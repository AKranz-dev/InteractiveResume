const React = require('react');

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4PKNKQ7MNJ" key="gtag-js" />,
    <script
      key="gtag-init"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4PKNKQ7MNJ');`,
      }}
    />,
  ]);
};
