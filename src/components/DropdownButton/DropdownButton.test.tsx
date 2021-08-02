import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import DropdownButton from "./DropdownButton";

describe("DropdownButton component", () => {
  const createWrapper = (extraProps: any = {}) => {
    return render(
      <DropdownButton
        buttonText={"Button text"}
        subText={"Sub text"}
        iconUrl={"www."}
        {...extraProps}
      >
        <p>Dropdown content</p>
      </DropdownButton>
    );
  };

  it("should render the button text", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("Button text")).toBeInTheDocument();
  });

  it("should render the button sub text", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("Sub text")).toBeInTheDocument();
  });

  it("should show the dropdown content when the button is clicked", () => {
    const wrapper = createWrapper();
    userEvent.click(wrapper.getByText("Button text"));
    expect(wrapper.getByText("Dropdown content")).toBeInTheDocument();
  });
});
