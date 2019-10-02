export const ADD_ITEM = 'ADD_ITEM';
export const LOAD_LIST = 'LOAD_LIST';
export const RENDER_LIST = 'RENDER_LIST';

export const addItem = (value) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: new Date().getTime(),
      value
    }
  };
}

export const loadList = () => {
  return {
    type: LOAD_LIST
  };
}