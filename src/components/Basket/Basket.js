import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { useSelector } from '../../store/Store/hooks/useSelector';
import { selectBasket } from '../../store/basket/selectors';

const Basket = ({ className }) => {
  const selectProducts = useSelector(selectBasket);

  return (
    <div className={classnames(styles.root, className)}>
      <h2 className={styles.title}>Basket</h2>
      <ul className={styles.list}>
        {selectProducts &&
          Object.keys(selectProducts).map(productKey => (
            <li key={productKey} className={styles.product}>
              <span>{productKey}</span>
              <span>{selectProducts[productKey]}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Basket;
