import styles from './styles.module.css';
import { useReducer } from 'react';

const actionTypes = {
  changeName: 'changeName',
  changeText: 'changeText',
  changeRating: 'changeRating',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.changeName:
      return { name: action.payload, text: '', rating: 0 };
    case actionTypes.changeText:
      return { ...state, text: action.payload };
    case actionTypes.changeRating:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formState, dispatch] = useReducer(reducer, {
    name: 'Default name',
    text: '',
    rating: 0,
  });

  return (
    <div className={styles.root}>
      <h3>New Review</h3>
      <span className={styles.title}>Name</span>
      <input
        value={formState.name}
        onChange={event => {
          dispatch({
            type: actionTypes.changeName,
            payload: event.target.value,
          });
        }}
      />

      <span className={styles.title}>Text</span>
      <input
        value={formState.text}
        onChange={event => {
          dispatch({
            type: actionTypes.changeText,
            payload: event.target.value,
          });
        }}
      />

      <span className={styles.title}>Rating</span>
      <input
        value={formState.rating}
        type="number"
        max="5"
        min="0"
        onChange={event => {
          dispatch({
            type: actionTypes.changeRating,
            payload: Number(event.target.value),
          });
        }}
      />
    </div>
  );
};
