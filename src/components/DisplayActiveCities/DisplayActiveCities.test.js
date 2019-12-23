import React from "react";
import { shallow } from "enzyme";
import { DisplayActiveCities } from "./DisplayActiveCities";
import Card from "../Card";

const props = {
  activeCities: [
    {
      name: "Berlin",
      id: 123,
      main: {
        temp_min: 4,
        temp_max: 20
      }
    },
    {
      name: "Munich",
      id: 456,
      main: {
        temp_min: 5,
        temp_max: 21
      }
    }
  ],
  requestStatus: {
    inProgress: false,
    failure: false
  },
  removeCity: jest.fn()
};

describe("DisplayActiveCities", () => {
  it("should render DisplayActiveCities", () => {
    const wrapper = shallow(<DisplayActiveCities {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render section with wrapper class", () => {
    const wrapper = shallow(<DisplayActiveCities {...props} />);
    expect(wrapper.find("section.active-city-card-wrapper").length).toBe(1);
  });

  it("should render section with inner wrapper class", () => {
    const wrapper = shallow(<DisplayActiveCities {...props} />);
    expect(wrapper.find("section.active-city-list").length).toBe(1);
  });

  it("should render card component(s) when activeCities prop has elements", () => {
    const wrapper = shallow(<DisplayActiveCities {...props} />);
    expect(wrapper.find(Card).length).toBe(props.activeCities.length);
  });

  it("should not render card component(s) when activeCities prop is empty", () => {
    const localProps = {
      ...props,
      activeCities: []
    };
    const wrapper = shallow(<DisplayActiveCities {...localProps} />);
    expect(wrapper.find(Card).length).toBe(0);
  });
});
