const rootReducer = (state = { sentence: 'Default' }, action) => {
  console.log('action.type:' + action.type);
  switch (action.type) {
    case 'UPDATE_QUOTES':
      console.log('action.quotes:' + action.quotes);
      return { ...state, quotes: action.quotes };
    case 'UPDATE_QUOTE':
      console.log('action.quote:' + action.quote);
      return { ...state, quote: action.quote };
    case 'TOGGLE_SHOW_ALL':
      return { ...state, showAll: action.showAll };
    default:
      return state;
  }
};

export default rootReducer;
