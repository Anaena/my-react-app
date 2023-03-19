import { useState } from 'react';

import styles from './styles.module.css';
import classnames from 'classnames';
export const Product = ({ name, className }) => {
  let [count, setCount] = useState(0);

  return (
    <li className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button
          onClick={() => setCount(count - 1)}
          className={styles.action}
          disabled={count <= 0}
        >
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className={styles.action}
          disabled={count >= 25}
        >
          +
        </button>
      </div>
    </li>
  );
};
