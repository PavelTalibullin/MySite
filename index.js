import * as Sentry from '@sentry/browser';

import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',

  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});

let a = 100;
console.log(a);

function showGreeting(str) {
  return str;
}

showGreeting('Hello!');
