import React, { useState } from 'react';

import { MemoMenu, Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';

export const Restaurant = ({ restaurant }) => {
  const restaurantRate = Math.ceil(
    restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) /
      restaurant.reviews.length
  );

  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rating value={restaurantRate} />
      </div>
      <div className={styles.detailedInfo}>
        <MemoMenu menu={restaurant.menu} className={styles.menu} />
        <div className={styles.reviews}>
          <Reviews reviews={restaurant.reviews} />
        </div>
      </div>
    </div>
  );
};
