import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "../../../lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const headersList = await headers();
    const origin =
      headersList.get("origin") ||
      headersList.get("referer") ||
      "http://localhost:3000";

    // Parse form data from the request
    const formData = await request.formData();
    const priceId = formData.get("price_id") as string;
    const quantity = parseInt(formData.get("quantity") as string, 10);

    // Validate input
    if (!priceId || !quantity || quantity < 1) {
      return NextResponse.json(
        { error: "Invalid price_id or quantity provided." },
        { status: 400 }
      );
    }

    // Create Checkout Session with dynamic price_id and quantity
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      billing_address_collection: "required",
      customer_email: undefined, // Let customer enter their email
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "No checkout session URL was returned by Stripe." },
        { status: 500 }
      );
    }

    // Return the URL as JSON for client-side redirect
    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: err.message || "An error occurred during checkout." },
      { status: err.statusCode || 500 }
    );
  }
}
