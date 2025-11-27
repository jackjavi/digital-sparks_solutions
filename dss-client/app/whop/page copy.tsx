"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";

export default function Home() {
  return (
    <div className="pt-32">
      <WhopCheckoutEmbed
        fallback={<>loading...</>}
        planId="plan_e8Iis0RcuS09B"
        theme="light"
        hidePrice={false}
      />
    </div>
  );
}
