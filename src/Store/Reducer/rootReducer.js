import { ADD_ITEM, RENDER_LIST } from '../Actions/actions';

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
      ...action.list
    }
  ];

  return {
    ...state,
    list: newList
  };
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_LIST:
      return renderList(state, action)

    case ADD_ITEM:
      return addItem(state, action)

    default:
      return state;
  }
}

export default rootReducer;