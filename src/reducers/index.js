const rootReducer = (state = { sentence: 'Default' }, action) => {
  switch (action.type) {
    case 'STIR_THE_TANKS':
      return { sentence: action.sentence };
    default:
      return state;
  }
};

export default rootReducer;
