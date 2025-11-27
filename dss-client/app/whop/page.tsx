"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";

export default function Home() {
  return (
    <div className="pt-32">
      <WhopCheckoutEmbed
        fallback={<>loading...</>}
        planId="plan_6YmRQ13s4x4NL"
        theme="light"
        hidePrice={false}
      />
    </div>
  );
}
