import React from "react";
import { render } from "@testing-library/react";
import Merchant from "./Merchant";

describe("Merchant component", () => {
  const createWrapper = (extraProps: any = {}) => {
    return render(
      <Merchant
        merchantData={{
          name: "Merchant",
          id: "123",
          iconUrl: "www.",
          isBill: false,
          transactions: [{ date: "2021-02-01", amount: 10 }]
        }}
        isActiveBill={false}
        {...extraProps}
      />
    );
  };

  // The below tests should be separated out as integration tests

  it("should render the merchant name", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("Merchant")).toBeInTheDocument();
  });

  it("should render '1 transaction' when there is one transaction attached to a merchant", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("1 transaction")).toBeInTheDocument();
  });

  it("should render '2 transactions' when there are two transactions attached to a merchant", () => {
    const wrapper = createWrapper({
      merchantData: {
        isBill: false,
        transactions: [
          { date: "2021-02-01", amount: 10 },
          { date: "2021-02-02", amount: 10 }
        ]
      }
    });
    expect(wrapper.getByText("2 transactions")).toBeInTheDocument();
  });
});
