import * as dotenv from "dotenv";
dotenv.config();

const requiredEnvVars = [
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "REDIRECT_URL",
  "GOOGLE_REFRESH_TOKEN",
  "GOOGLE_ACCESS_TOKEN",
  "USER_EMAIL",
  "USER_PASSWORD",
  "NODE_ENV",
  "PORT",
  "DSS_ADMIN_EMAIL",
];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

interface Config {
  googleClientId: string;
  googleClientSecret: string;
  redirectUrl: string;
  googleRefreshToken: string;
  googleAccessToken: string;
  userEmail: string;
  userPassword: string;
  nodeEnv: string;
  port: number;
  dssAdminEmail: string;
}

const config: Config = {
  googleClientId: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  redirectUrl: process.env.REDIRECT_URL as string,
  googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN as string,
  googleAccessToken: process.env.GOOGLE_ACCESS_TOKEN as string,
  userEmail: process.env.USER_EMAIL as string,
  userPassword: process.env.USER_PASSWORD as string,
  nodeEnv: process.env.NODE_ENV as string,
  port: parseInt(process.env.PORT as string, 10),
  dssAdminEmail: process.env.DSS_ADMIN_EMAIL as string,
};

export default config;
