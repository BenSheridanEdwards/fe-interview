import React from "react";
import { render } from "@testing-library/react";
import TransactionList from "./TransactionList";

describe("TransactionList component", () => {
  const createWrapper = (extraProps: any = {}) => {
    return render(
      <TransactionList
        transactions={[{ date: "2000-12-03", amount: 30 }]}
        {...extraProps}
      />
    );
  };

  it("should render the table headers", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("Date")).toBeInTheDocument();
    expect(wrapper.getByText("Amount")).toBeInTheDocument();
  });

  it("should render a transaction's date in the correct format, Do MMMM YYYY", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("3rd December 2000")).toBeInTheDocument();
  });

  it("should render a transaction's amount in the correct format, £0.00", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("£30.00")).toBeInTheDocument();
  });
});
