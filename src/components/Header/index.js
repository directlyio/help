import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles.scss';

const getBaseSitePath = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://directly.io/search';
    case 'staging':
      return 'https://directly-staging.surge.sh/search';
    default:
      return 'http://localhost:3000';
  }
};

const Header = ({ id }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div
        className={styles.headerBrand}
        onClick={() => (window.location = `${getBaseSitePath()}`)}
      >
        Directly
      </div>
      <input
        type="text"
        placeholder="Search for a knee surgery"
        className={styles.search}
        onKeyUp={(e) => {
          if (e.keyCode !== 13) return;

          const encodedSearchTerm = encodeURIComponent(e.target.value);
          window.location = `${getBaseSitePath()}/search?q=${encodedSearchTerm}`;
        }}
      />
    </div>
  </header>
);

export default withStyles(styles)(Header);
