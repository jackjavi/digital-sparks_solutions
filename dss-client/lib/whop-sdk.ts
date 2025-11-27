import { Whop } from "@whop/sdk";

export const whopsdk = new Whop({
  // appID: process.env.NEXT_PUBLIC_WHOP_APP_ID,
  // apiKey: process.env.WHOP_API_KEY,
  webhookKey: btoa(
    "ws_28c2a0ba7b871781f3e69297d36443e0748ba95ca48b627483daf94564bd613a"
  ),
});
