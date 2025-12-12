import { Whop } from "@whop/sdk";

// console.log("WHOP_WEBHOOK_KEY exists:", !!process.env.WHOP_WEBHOOK_KEY);

export const whopsdk = new Whop({
  appID: process.env.NEXT_PUBLIC_WHOP_APP_ID,
  apiKey: process.env.WHOP_API_KEY,
  webhookKey: btoa(
    process.env.WHOP_WEBHOOK_SECRET ||
      "ws_8197fa1f1a6ef64b00d2e341af4f44c92e971dcc3709d091637ea6b0c0dec47d"
  ),
});
