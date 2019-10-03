import * as TYPES from '../Actions/actionTypes';

const initialState = {
  list: []
};

const renderList = (state, action) => {
  return {
    ...state,
    list: action.payload
  };
}

const addItem = (state, action) => {
  let newList = [
    ...state.list,
    {
      ...action.payload
    }
  ];

  return {
    ...state,
    list: newList
  };
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.RENDER_LIST:
      return renderList(state, action)

    case TYPES.ADD_ITEM_SUCCESS:
      return addItem(state, action)
    case TYPES.ADD_ITEM_FAILED:
      console.log(action.error);
      return state;

    default:
      return state;
  }
}

export default rootReducer;