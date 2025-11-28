"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";

export default function Home() {
  return (
    <div className="pt-32">
      <WhopCheckoutEmbed
        onComplete={(planId, receiptId) => {
          console.log(planId, receiptId);
        }}
        fallback={<>loading...</>}
        planId="plan_G9SKfrwE0PAlP"
        theme="light"
        hidePrice={false}
      />
    </div>
  );
}
