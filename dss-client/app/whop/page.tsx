"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";

export default function Home() {
  return (
    <div className="pt-32">
      <WhopCheckoutEmbed
        fallback={<>loading...</>}
        planId="plan_G9SKfrwE0PAlP"
        theme="light"
        hidePrice={false}
      />
    </div>
  );
}
