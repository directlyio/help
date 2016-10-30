import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles.scss';

const getBaseSitePath = () => 'https://directly.io';

// FIXME: implement once envs are created

/*
const getBaseSitePath = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://directly.io';
    case 'staging':
      return 'https://directly-staging.surge.sh';
    default:
      return 'http://localhost:3000';
  }
};
*/

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div
        className={styles.headerBrand}
        onClick={() => (window.location = `${getBaseSitePath()}`)}
      >
        Directly
      </div>
    </div>
  </header>
);

export default withStyles(styles)(Header);
