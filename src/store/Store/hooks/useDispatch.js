import { useContext } from 'react';
import { StoreContext } from '../../../context/ThemeContext/StoreContext';

export function useDispatch() {
  const store = useContext(StoreContext);
  return store?.dispatch.bind(store);
}
