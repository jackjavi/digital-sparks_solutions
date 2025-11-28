import type { NextRequest } from "next/server";
import { whopsdk } from "../../../lib/whop-sdk";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://digitalsparkssolutions.com";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    // Validate the webhook to ensure it's from Whop
    const requestBodyText = await request.text();
    const headers = Object.fromEntries(request.headers);

    let webhookData;

    // For development: allow bypassing signature validation
    const isDevelopment = process.env.NODE_ENV === "development";
    const bypassValidation = process.env.BYPASS_WEBHOOK_VALIDATION === "true";

    if (isDevelopment && bypassValidation) {
      console.log("[WHOP WEBHOOK] DEV MODE: Bypassing signature validation");
      webhookData = JSON.parse(requestBodyText);
    } else {
      // Validate webhook signature in production
      webhookData = whopsdk.webhooks.unwrap(requestBodyText, { headers });
    }

    console.log("[WHOP WEBHOOK] Received:", {
      id: webhookData.id,
      type: webhookData.type,
      paymentId: webhookData.data?.id,
    });

    // Forward to backend API for processing
    if (webhookData.type === "payment.succeeded") {
      try {
        const backendResponse = await fetch(
          `${API_BASE_URL}/api/whop/payment-succeeded`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(webhookData),
          }
        );

        const backendResult = await backendResponse.json();

        if (!backendResponse.ok) {
          console.error("[WHOP WEBHOOK] Backend processing failed:", {
            status: backendResponse.status,
            result: backendResult,
          });
          // Still return 200 to Whop to prevent retries
          return new Response("OK", { status: 200 });
        }

        console.log("[WHOP WEBHOOK] Backend processed successfully:", {
          paymentId: backendResult.data?.paymentId,
          duplicate: backendResult.data?.duplicate,
        });
      } catch (backendError) {
        console.error(
          "[WHOP WEBHOOK] Failed to forward to backend:",
          backendError
        );
        // Still return 200 to Whop to prevent retries
      }
    }

    // Always return 200 OK quickly to Whop
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("[WHOP WEBHOOK] Error:", error);
    // Still return 200 to prevent retries for invalid webhooks
    return new Response("OK", { status: 200 });
  }
}
