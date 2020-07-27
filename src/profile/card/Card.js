import React from 'react';
import Descript from '../description/Descript';
import Stats from '../stats/Stats';
import styles from './Card.module.css'
import user from '../user.json';

function Card() {
  return (
    <>
    <h1>Profile</h1>
      <div className={styles.profile}>
        <Descript
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
        />
        <div className={styles.boxLi}>
          <Stats
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
          />
        </div>
      </div>
    </>
  );
}
export default Card;