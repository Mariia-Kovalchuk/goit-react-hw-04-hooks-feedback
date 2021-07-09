import PropTypes from "prop-types";

import styles from './Section.module.css';

const Section = ({ title, children }) =>
  <div className={styles.container}>
    <h2>{title}</h2>
    {children}
  </div>;

Section.propTypes = {
  children: PropTypes.node,
}

export default Section;