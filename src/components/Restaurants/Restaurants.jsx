import React, { useState } from 'react';

import { Restaurant } from '../Restaurant/Restaurant';
import styles from './styles.module.css';
import { Tabs } from '../Tabs/Tabs';
import Basket from '../Basket/Basket';

export const Restaurants = ({ restaurants }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0].id
  );

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div>
        <Tabs
          tabs={restaurants.map(({ name, id }) => ({ tab: name, id }))}
          selectedId={currentRestaurantId}
          onTabSelect={setCurrentRestaurantId}
        />
        <Restaurant
          restaurant={restaurants.find(({ id }) => id === currentRestaurantId)}
        />
        <Basket className={styles.basket} />
      </div>
    </div>
  );
};
