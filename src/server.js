import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { App, Layout } from './components';

const app = express();
const port = process.env.PORT || 3600;
const isProduction = process.env.NODE_ENV === 'production';

app.use('/assets', express.static('assets'));

app.use((req, res) => {
  const normalizeLink = isProduction
    ? 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'
    : 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css';

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

app.listen(port, () => console.log(`Listening at port ${port}!`));
