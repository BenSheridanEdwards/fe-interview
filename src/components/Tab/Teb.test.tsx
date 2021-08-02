import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tab from "./Tab";

describe("Tab component", () => {
  const tabChangeMock = jest.fn();

  const createWrapper = (extraProps: Object = {}) => {
    return render(
      <Tab
        label="My tab"
        activeTab="Other tab"
        setActiveTab={tabChangeMock}
        {...extraProps}
      />
    );
  };

  it("should render the tab text", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText("My tab")).toBeInTheDocument();
  });

  it("should change the active tab when the tab button is clicked", () => {
    const wrapper = createWrapper();
    const tabButton = wrapper.getByText("My tab");

    userEvent.click(tabButton);

    expect(tabChangeMock).toHaveBeenCalledWith("My tab");
  });
});
