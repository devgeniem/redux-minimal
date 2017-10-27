export default function langReducer(state = { lang: 'en' }, action) {
  switch (action.type) {
    case 'SET_LANGUAGE': {
      const newState = Object.assign({}, state);
      newState.lang = action.lang;
      return newState;
    }

    // initial state
    default:
      return state;
  }
}
