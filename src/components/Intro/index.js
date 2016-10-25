import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Container from '../Container';
import Heading from '../Heading';
import styles from './styles.scss';

const Intro = () => (
  <div className={styles.intro}>
    <Container>
      <Heading id="intro-heading">Directly question center</Heading>
      <p>If you need further assistence, please <a href="mailto:hello@directly.io">email us</a>.</p>
    </Container>
  </div>
);

export default withStyles(styles)(Intro);
