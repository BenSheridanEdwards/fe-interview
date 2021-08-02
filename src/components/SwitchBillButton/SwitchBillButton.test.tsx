import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { reducers } from "../../app/redux/slices/rootReducer";
import SwitchBillButton from "./SwitchBillButton";

describe("SwitchBillButton component", () => {
  const store = createStore(reducers, {
    merchants: {
      merchants: [
        {
          name: "Merchant 1",
          categoryId: 1,
          iconUrl: "",
          id: "123",
          transactions: [],
          isBill: false
        }
      ]
    }
  });

  const createWrapper = (extraProps: any = {}) => {
    return render(
      <Provider store={store}>
        <SwitchBillButton
          type="Add"
          merchant={{
            name: "Merchant 1",
            categoryId: 1,
            iconUrl: "",
            id: "123",
            transactions: [],
            isBill: false
          }}
          {...extraProps}
        />
      </Provider>
    );
  };

  it("should render the button text 'Add bill' when the merchant is flagged as a active bill", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("Add bill")).toBeInTheDocument();
  });

  it("should render the button text 'Remove bill' when the merchant is flagged as a potential bill", () => {
    const wrapper = createWrapper({
      merchant: {
        name: "Merchant 1",
        categoryId: 1,
        iconUrl: "",
        id: "123",
        transactions: [],
        isBill: true
      }
    });
    expect(wrapper.getByText("Remove bill")).toBeInTheDocument();
  });
});
