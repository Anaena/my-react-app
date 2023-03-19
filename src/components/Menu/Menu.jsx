import React from 'react';

import { Product } from '../Product/Product';
import styles from './styles.module.css';
import classnames from 'classnames';
const Menu = ({ menu, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.menuTitle}>Menu</span>
      <ul className={styles.menuList}>
        {menu?.map(product => (
          <Product
            key={product.id}
            name={product.name}
            className={styles.product}
          />
        ))}
      </ul>
    </div>
  );
};

export const MemoMenu = React.memo(Menu);
