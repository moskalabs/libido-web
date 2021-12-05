import { createAction, handleActions } from "redux-actions";

const CHANGE_CATEGORY = "category/CHANGE_CATEGORY";

export const changeCategory = createAction(
  CHANGE_CATEGORY,
  category => category
);

const initialState = {
  sort: "libido",
};

const category = handleActions(
  {
    [CHANGE_CATEGORY]: (state, { payload: category }) => ({
      sort: category,
    }),
  },
  initialState
);

export default category;
