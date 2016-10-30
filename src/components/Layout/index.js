import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ConsumerQuestions from '../ConsumerQuestions';
import Header from '../Header';
import Intro from '../Intro';
import ProviderQuestions from '../ProviderQuestions';
import styles from './styles.scss';

const Layout = () => (
  <div className={styles.layout}>
    <Header />
    <Intro />
    <ConsumerQuestions />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <ProviderQuestions />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </div>
);

export default withStyles(styles)(Layout);
