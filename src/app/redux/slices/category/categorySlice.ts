const GET_CATEGORIES = "GET_CATEGORIES";
const SET_CATEGORIES = "SET_CATEGORIES";

export interface CategoryType {
  id: number;
  name: string;
  iconUrl: string;
}

export interface CategoryState {
  categories: Array<CategoryType>;
}

const initialState: CategoryState = {
  categories: []
};

interface Action {
  type: string;
  [x: string]: any;
}

export const getCategories = (): Action => ({
  type: GET_CATEGORIES
});

export const setCategories = (categories: Array<CategoryType>): Action => ({
  type: SET_CATEGORIES,
  categories
});

const categoriesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      const { categories } = action;
      return { ...state, categories };
    default:
      return state;
  }
};

export default categoriesReducer;
