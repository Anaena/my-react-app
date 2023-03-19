import React from 'react';

import styles from './styles.module.css';
import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, selectedId, onTabSelect }) => {
  return (
    <div className={styles.root}>
      {tabs.map(({ tab, id }) => (
        <Tab
          key={id}
          label={tab}
          onTabSelect={() => onTabSelect(id)}
          isSelected={id === selectedId}
          className={styles.tab}
        />
      ))}
    </div>
  );
};
