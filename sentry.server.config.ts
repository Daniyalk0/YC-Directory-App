// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
if (process.env.NODE_ENV === "production") {
  
  Sentry.init({
    dsn: "https://ae0977e7ed758d27d41c46a2c237f6e3@o4508863743000576.ingest.de.sentry.io/4508863747719248",
    
    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
    
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}