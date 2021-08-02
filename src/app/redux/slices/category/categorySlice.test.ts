import categoryReducer, { CategoryState, setCategories } from "./categorySlice";

describe("category reducer", () => {
  const initialState: CategoryState = {
    categories: []
  };

  it("should handle setting the initial state", () => {
    expect(categoryReducer(undefined, { type: "unknown" })).toEqual({
      categories: []
    });
  });

  it("should handle setting the categories", () => {
    const newState = categoryReducer(
      initialState,
      setCategories([
        {
          id: 1,
          name: "Category",
          iconUrl: "www."
        }
      ])
    );
    expect(newState.categories).toEqual([
      {
        id: 1,
        name: "Category",
        iconUrl: "www."
      }
    ]);
  });
});
