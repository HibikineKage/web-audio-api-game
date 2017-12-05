const CHANGE_TEXT = 'CHANGE_TEXT';
const initialState = { text: '' };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      console.log('changetext');
      console.log(action);
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
}
