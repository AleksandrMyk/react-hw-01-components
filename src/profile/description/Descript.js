import React from 'react';
import PropTypes from 'prop-types';
import styles from './Descript.module.css'

function Descript({ avatar, name, tag, location }) {
  return (
    <div className={styles.description}>
      <img src={avatar} alt="user avatar" className={styles.avatar}></img>
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
}

Descript.propTypes = {
  avatar: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default Descript; 