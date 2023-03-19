import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Tab = ({ label, onTabSelect, isSelected, className }) => {
  return (
    <button
      className={classnames(styles.root, className, {
        [styles.selected]: isSelected,
      })}
      onClick={onTabSelect}
    >
      {label}
    </button>
  );
};
