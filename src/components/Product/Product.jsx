import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { addProduct, removeProduct } from '../../store/basket/actions';
import { useDispatch } from '../../store/Store/hooks/useDispatch';
import { useSelector } from '../../store/Store/hooks/useSelector';
import { selectProductCountFromBasket } from '../../store/basket/selectors';

export const Product = ({ name, className }) => {
  const dispatch = useDispatch();
  const productCount = useSelector(state =>
    selectProductCountFromBasket(state, name)
  );

  return (
    <li className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button
          onClick={() => dispatch(removeProduct(name))}
          className={styles.action}
          disabled={productCount <= 0}
        >
          -
        </button>
        <span className={styles.count}>{productCount}</span>
        <button
          onClick={() => dispatch(addProduct(name))}
          className={styles.action}
          disabled={productCount >= 25}
        >
          +
        </button>
      </div>
    </li>
  );
};
