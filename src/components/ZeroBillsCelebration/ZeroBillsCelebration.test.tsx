import React from "react";
import { render } from "@testing-library/react";
import ZeroBillsCelebration from "./ZeroBillsCelebration";

describe("TransactionList component", () => {
  const createWrapper = (extraProps: any = {}) => {
    return render(<ZeroBillsCelebration type="Active" />);
  };

  it("should render the celebration message with the correct type", () => {
    const wrapper = createWrapper();
    expect(
      wrapper.getByText("You have no more active bills!")
    ).toBeInTheDocument();
  });
});
