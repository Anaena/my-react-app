import { useContext, useEffect, useRef, useState } from 'react';
import { StoreContext } from '../../../context/ThemeContext/StoreContext';
import { nanoid } from 'nanoid';

export function useSelector(selector) {
  const componentKey = useRef(nanoid());
  const [value, setValue] = useState();
  const store = useContext(StoreContext);

  useEffect(() => {
    store.subscribe(componentKey.current, state => setValue(selector(state)));

    return () => store.unsubscribe(componentKey.current);
  }, []);

  return value;
}
