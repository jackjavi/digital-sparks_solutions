import Whop from "@whop/sdk";
import config from "../../config/index";

const whopClient = new Whop({
  apiKey: config.whopApiKey,
});

export default whopClient;
