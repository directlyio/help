import { PropTypes, createElement } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles.scss';

const mapSizeToTag = (size) => {
  if (size > 6) {
    throw new Error('The \'size\' argument must be below 6.');
  }

  return `h${size}`;
};

const Heading = ({ id, size, children }) => createElement(
  mapSizeToTag(size),
  { id, className: styles.heading },
  children,
);

Heading.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Heading.defaultProps = {
  size: 1,
};

export default withStyles(styles)(Heading);
