import * as TYPES from './actionTypes';

export const addItem = (value) => {
  return {
    type: TYPES.ADD_ITEM,
    payload: {
      id: new Date().getTime(),
      value
    }
  };
}

export const loadList = () => {
  return {
    type: TYPES.LOAD_LIST
  };
}