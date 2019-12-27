import React from "react";
import { shallow } from "enzyme";
import DisplayMessage from ".";

const props = {
  message: "This is a demo message",
  condition: true
};

describe("DisplayMessage", () => {
  it("should render DisplayMessage component", () => {
    const wrapper = shallow(<DisplayMessage {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render message when condition is true", () => {
    const wrapper = shallow(<DisplayMessage {...props} />);
    expect(wrapper.find("p").text()).toEqual(props.message);
  });

  it("should render message when condition is false", () => {
    const localProps = {
      ...props,
      condition: false
    };
    const wrapper = shallow(<DisplayMessage {...localProps} />);
    expect(wrapper.find("p").length).toEqual(0);
  });
});
