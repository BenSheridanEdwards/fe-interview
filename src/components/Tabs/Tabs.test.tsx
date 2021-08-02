import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "../../app/redux/slices/rootReducer";
import { render } from "@testing-library/react";
import Tabs from "./Tabs";
import Tab from "../Tab/Tab";

describe("Tabs component", () => {
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
    },
    categories: {
      categories: [{ name: "Category 1", id: 1, iconUrl: "www." }]
    }
  });

  const createWrapper = () => {
    return render(
      <Provider store={store}>
        <Tabs>
          <Tab
            label="Active Bills"
            activeTab="Active Bills"
            setActiveTab={jest.fn()}
          />
        </Tabs>
      </Provider>
    );
  };

  // The below test should be separated out as an integration test

  it("should render a category with a merchant that has an active bill", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("Category 1")).toBeInTheDocument();
    expect(wrapper.getByText("1 merchant")).toBeInTheDocument();
  });
});
