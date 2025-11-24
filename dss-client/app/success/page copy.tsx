import { redirect } from "next/navigation";
import { stripe } from "../../lib/stripe";
import Link from "next/link";
import { CheckCircle, Mail, Home, ArrowRight, Calendar } from "lucide-react";
import { paymentAPI } from "../api/payment";
import { EbookDownload } from "./_components/EbookDownload";
import CalendlyEmbed from "./_components/CalendlyEmbed";
import { servicesData } from "../../lib/service-data";

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const status = session.status;
  const customerEmail = session.customer_details?.email;
  const customerName = session.customer_details?.name;
  const priceId =
    session.line_items && session.line_items.data.length > 0
      ? session.line_items.data[0].price?.id ?? null
      : null;

  if (status === "open") {
    return redirect("/");
  }

  console.log("Price ID:\n", priceId);

  // Find the service by price_id to get download link and title
  const service = priceId
    ? servicesData.find((s) => s.price_id === priceId)
    : null;

  // Check if this is a consultation booking
  const isConsultation = service?.title === "Book A Consultation";

  if (status === "complete" && customerEmail) {
    // Send confirmation emails via backend
    try {
      if (isConsultation) {
        // TODO: Call consultation-specific API
        // await consultationAPI.confirmBooking({
        //   userEmail: customerEmail,
        //   userName: customerName || undefined,
        //   sessionId: session_id,
        //   calendlyLink: process.env.NEXT_PUBLIC_CALENDLY_EVENT_LINK || undefined,
        // });
        console.log("Consultation booking confirmed (API to be implemented)");
      } else {
        // Regular service payment - send ebook download
        await paymentAPI.confirmPayment({
          userEmail: customerEmail,
          userName: customerName || undefined,
          sessionId: session_id,
          downloadLink: service?.downloadLink || undefined,
        });
        console.log("Confirmation emails sent successfully");
      }
    } catch (error) {
      console.error("Failed to send confirmation emails:", error);
      // Continue rendering the page even if email fails
    }

    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-24">
        {/* Animated background */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-4xl w-full relative z-10">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-green-500 to-emerald-600 rounded-full animate-bounce">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Success Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-lilita-one text-center">
              <span className="bg-linear-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                Payment Successful!
              </span>
            </h1>

            <div className="w-24 h-1 bg-linear-to-r from-green-500 to-emerald-600 mx-auto mb-8 rounded-full" />

            {/* Success Message */}
            <p className="text-lg text-gray-300 mb-8 font-nunito leading-relaxed text-center">
              Thank you for your payment! We appreciate your business and look
              forward to working with you.
            </p>

            {/* Conditional Rendering: Calendly or E-book Download */}
            {isConsultation ? (
              <>
                {/* Calendly Section */}
                <div className="mb-8">
                  <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <Calendar className="h-6 w-6 text-cyan-400" />
                      <h2 className="text-xl font-bold text-cyan-400 font-lilita-one">
                        Schedule Your Consultation
                      </h2>
                    </div>
                    <p className="text-gray-300 font-nunito text-center leading-relaxed">
                      Choose a convenient time for your 1-hour Zoom consultation
                      below. Select any available slot that works for your
                      schedule.
                    </p>
                  </div>

                  {/* Calendly Widget */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-slate-700/50">
                    <CalendlyEmbed
                      url={process.env.NEXT_PUBLIC_CALENDLY_EVENT_LINK || ""}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* E-book Download Section */}
                {service && service.downloadLink && (
                  <EbookDownload
                    downloadLink={service.downloadLink}
                    serviceTitle={service.title}
                  />
                )}
              </>
            )}

            {/* Email Confirmation */}
            {!isConsultation && (
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <p className="text-cyan-400 font-semibold font-nunito">
                    Confirmation Email Sent
                  </p>
                </div>
                <p className="text-gray-400 font-nunito text-center">
                  A confirmation email with your e-book download link has been
                  sent to
                  <span className="text-white font-semibold">
                    {customerEmail}
                  </span>
                </p>
              </div>
            )}

            {/* Additional Info */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-8">
              <p className="text-blue-300 font-nunito text-sm leading-relaxed text-center">
                If you have any questions, please email us at{" "}
                <a
                  href="mailto:info@digitalsparkssolutions.com"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold underline transition-colors duration-300"
                >
                  info@digitalsparkssolutions.com
                </a>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 font-nunito group"
              >
                <Home className="h-5 w-5" />
                Back to Home
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-700/50 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-600/50 hover:border-cyan-500/50 font-nunito"
              >
                Explore More Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for any other status
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4 font-lilita-one">
          Processing Payment...
        </h1>
        <p className="text-gray-400 font-nunito">
          Please wait while we confirm your payment.
        </p>
      </div>
    </div>
  );
}
