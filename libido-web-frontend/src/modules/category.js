import { createAction, handleActions } from "redux-actions";

const CHANGE_CATEGORY = "category/CHANGE_CATEGORY";
const INITIALIZE_CATEGORY = "category/INITIALIZE_CATEGORY";

export const changeCategory = createAction(
  CHANGE_CATEGORY,
  category => category
);

export const initializeCategory = createAction(
  INITIALIZE_CATEGORY,
  category => category
);

const initialState = {
  sort: "",
};

const category = handleActions(
  {
    [CHANGE_CATEGORY]: (state, { payload: category }) => ({
      sort: category,
    }),
    [INITIALIZE_CATEGORY]: (state, { payload: category }) => ({
      sort: category,
    }),
  },
  initialState
);

export default category;
