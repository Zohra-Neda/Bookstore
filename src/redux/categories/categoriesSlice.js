const CHECK_STATUS = 'categories/CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const initialState = 'Under construction';

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return state;
    default:
      return state;
  }
};

export default categoriesReducer;
