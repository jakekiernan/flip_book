export const InitialState = {
  theme: { primary: 'green' }
};
  
export const MainReducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme
      };
      
    default:
      return state;
  }
};
