import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Disable body scrolling on web */}
        <ScrollViewStyleReset />

        {/* Raw CSS styles for dark-mode background flicker prevention */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* Accessible global head content */}
        <meta name="description" content="An accessible React Native web app" />
        <meta name="theme-color" content="#6200ea" />
      </head>
      <body aria-live="polite">{children}</body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
