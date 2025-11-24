# Digital Sparks Solutions

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Fonts Setup Guide [Fonts](https://www.contentful.com/blog/next-js-fonts/)

#### Setting Up Ngrok Static Domain

Make sure the ngrok agent is running on your local device. You can start the ngrok agent with the CLI command ngrok http [port].
If you're using a custom domain, make sure you add the domain to the agent start command: ngrok http [port] --url [your-url].
If you want to avoid this experience in the future, ngrok allows
which keeps your endpoint URL consistent even when the agent restarts. You can enable this with the command ngrok http [port] --pooling-enabled true.
Once you've confirmed that the ngrok agent is running, check for your endpoint in your ngrok dashboard at https://dashboard.ngrok.com/endpoints. Your ngrok dashboard will show all of the active endpoints under your account.

```bash
ngrok http --url=top-bunny-surely.ngrok-free.app 80

ngrok http --url=top-bunny-surely.ngrok-free.app 80 &>/dev/null &   # Run in background; Add nohup at the start of the command incase of termination
```

### Theme colors with Tailwind CSS v4.0 and Next Themes (Dark/Light/Custom mode)

A tutorial on how to implement theme colors with Tailwind CSS v4.0 and Next Themes in a Next.js application.
[Tutorial on Medium](https://medium.com/@kevstrosky/theme-colors-with-tailwind-css-v4-0-and-next-themes-dark-light-custom-mode-36dca1e20419)

### GitHub Repository

[GitHub Repository](https://github.com/kevstrosky/tailwind-v4-theme-colors-example)
