import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import favicon from 'serve-favicon';
import { App, Layout } from './components';

const app = express();
const port = process.env.PORT || 3600;
const env = process.env.NODE_ENV;

if (env === 'production') {
  app.all('*', (req, res, next) => {
    if (req.secure) return next();
    return res.redirect(`https://${req.hostname}${req.url}`);
  });
}

app.use('/assets', express.static('assets'));
app.use(favicon(`${__dirname}/assets/iconsfavicon.ico`));

app.use((req, res) => {
  const normalizeLink = 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css';
  const css = new Set();
  const context = {
    // eslint-disable-next-line
    insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())),
  };

  const html = renderToString(
    <App context={context}>
      <Layout />
    </App>
  );

  return res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="mobile-web-app-capable" content="yes">
        <title>Directly FAQ</title>
        <script async src="/assets/bundle.js"></script>
        <link href="${normalizeLink}" rel="stylesheet">
        <style type="text/css">${[...css].join('')}</style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

// eslint-disable-next-line
app.listen(port, () => console.log(`Listening at port ${port}!`));
