import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Category from "./Category";
import { reducers } from "../../app/redux/slices/rootReducer";

describe("Category component", () => {
  const store = createStore(reducers, {
    merchants: {
      merchants: [
        {
          name: "Merchant 1",
          categoryId: 1,
          iconUrl: "",
          id: "123",
          transactions: [],
          isBill: true
        }
      ]
    }
  });

  const createWrapper = (extraProps: any = {}) => {
    return render(
      <Provider store={store}>
        <Category
          categoryData={{
            name: "Category",
            id: 1,
            iconUrl: "www."
          }}
          isActiveBill={true}
          {...extraProps}
        />
      </Provider>
    );
  };

  // The below tests should be separated out as integration tests

  it("should render the category name", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("Category")).toBeInTheDocument();
  });

  it("should render the text '1 merchant' when there is one merchant in a specific category", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("1 merchant")).toBeInTheDocument();
  });

  it("should render the text '2 merchants' when there are two merchants in a specific category", () => {
    const store = createStore(reducers, {
      merchants: {
        merchants: [
          {
            name: "Merchant 1",
            categoryId: 1,
            iconUrl: "",
            id: "123",
            transactions: [],
            isBill: true
          },
          {
            name: "Merchant 2",
            categoryId: 1,
            iconUrl: "",
            id: "123",
            transactions: [],
            isBill: true
          }
        ]
      }
    });

    const createWrapper = (extraProps: any = {}) => {
      return render(
        <Provider store={store}>
          <Category
            categoryData={{
              name: "Category",
              id: 1,
              iconUrl: "www."
            }}
            isActiveBill={true}
            {...extraProps}
          />
        </Provider>
      );
    };

    const wrapper = createWrapper();
    expect(wrapper.getByText("2 merchants")).toBeInTheDocument();
  });
});
