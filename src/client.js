import React from 'react';
import { render } from 'react-dom';
import { App, Layout } from './components';

const context = {
  insertCss: (...styles) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map(x => x._insertCss());
    return () => { removeCss.forEach(f => f()); };
  },
};

render(
  <App context={context}>
    <Layout />
  </App>,
  document.getElementById('root')
);
