/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  // Nada obligatorio. Déjalo así.
  // output: "standalone", // solo si Hostinger lo pide (normalmente no)
};

const sentryWebpackPluginOptions = {
  org: "joseluisdev",
  project: "sportsbook-odds-comparer",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: false
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
