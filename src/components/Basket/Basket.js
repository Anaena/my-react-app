import React, { useContext, useEffect, useState } from "react";
import styles from './styles.module.css';
import classnames from 'classnames';
import { StoreContext } from "../../context/ThemeContext/StoreContext";

function useSelector() {
  const componentKey = 'Basket';
  const [state, setState] = useState();
  const store = useContext(StoreContext);

  useEffect(() => {
    store.subscribe(componentKey, (state) => setState(state.basket));

    return () => store.unsubscribe(componentKey);
  }, []);

  return state;
}
const Basket = ({className}) => {
  const selectProducts = useSelector();

  return (
    <div className={classnames(styles.root, className)}>
      <h2 className={styles.title}>Basket</h2>
      <ul className={styles.list}>
        {selectProducts && Object.keys(selectProducts).map((productKey) => (
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
