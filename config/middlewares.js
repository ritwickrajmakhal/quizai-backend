module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https://market-assets.strapi.io",
            /**
             * Note: If using a STORAGE_URL replace `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net` w/ process.env.STORAGE_URL
             * If using a CDN URL make sure to include that url in the CSP headers process.env.STORAGE_CDN_URL
             */
            `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            /**
             * Note: If using a STORAGE_URL replace `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net` w/ process.env.STORAGE_URL
             * If using a CDN URL make sure to include that url in the CSP headers process.env.STORAGE_CDN_URL
             */
            `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net`,

          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'http://localhost:1337', 'https://quiz-ai.azurewebsites.net'], // specify allowed origins
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // specify allowed methods
      headers: ['Authorization', 'Content-Type', 'bearer'], // specify allowed headers
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
