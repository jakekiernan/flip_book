import { get } from 'lodash';
import { texts } from '../assets/texts';

export const initialState = {
  theme: { primary: 'green' },
  count: 0,
  text: {
    author: '',
    text: '',
  },
  speed: 50,
};

// TODO break this into multiple reducers
export const mainReducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme
      };
    case 'incrementCounter':
      return {
        ...state,
        count: ++state.count
      };
    case 'selectText':
      return {
        ...state,
        text: {
          author: action.author,
          text: get(texts, action.author)
        }
      };
    case 'changeSpeed':
        return {
          ...state,
          speed: action.value,
        };
    case 'scrollText':
        return {
          ...state,
          count: action.value,
        };
      
    default:
      return state;
  }
};
