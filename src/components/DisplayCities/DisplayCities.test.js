import React from "react";
import { shallow } from "enzyme";
import { DisplayCities } from "./DisplayCities";
import Card from "../../components/Card";

const props = {
  cities: [
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
  removeCity: jest.fn()
};

it("should render DisplayCities", () => {
  const wrapper = shallow(<DisplayCities {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it("should render section with wrapper class", () => {
  const wrapper = shallow(<DisplayCities {...props} />);
  expect(wrapper.find("section.active-city-card-wrapper").length).toBe(1);
});

it("should render section with inner wrapper class", () => {
  const wrapper = shallow(<DisplayCities {...props} />);
  expect(wrapper.find("section.active-city-list").length).toBe(1);
});

it("should render card component(s) when cities prop has elements", () => {
  const wrapper = shallow(<DisplayCities {...props} />);
  expect(wrapper.find(Card).length).toBe(props.cities.length);
});

it("should not render card component(s) when cities prop is empty", () => {
  const localProps = {
    ...props,
    cities: []
  };
  const wrapper = shallow(<DisplayCities {...localProps} />);
  expect(wrapper.find(Card).length).toBe(0);
});
