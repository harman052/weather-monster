import React from "react";
import { shallow } from "enzyme";
import { searchPlaceholderText } from "../../config";
import { Search } from "./Search";
import cityList from "../../cityList";

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
  addCity: jest.fn(),
  requestInProgress: jest.fn(),
  requestFailure: jest.fn(),
  showSuggestionList: jest.fn(),
  requestStatus: {
    inProgress: false,
    failure: false
  },
  isSuggestionListActive: false
};

it("should render Search component", () => {
  const wrapper = shallow(<Search {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it("should render 1 input element", () => {
  const wrapper = shallow(<Search {...props} />);
  expect(wrapper.find("input").length).toBe(1);
});

it("should render correct placeholder text of input element", () => {
  const wrapper = shallow(<Search {...props} />);
  const inputElement = wrapper.find("input").props().placeholder;
  expect(inputElement).toEqual(searchPlaceholderText);
});

it("should render city suggestion list when input field clicked", () => {
  const wrapper = shallow(<Search {...props} />);
  wrapper.find("input").simulate("click", { stopPropagation: () => {} });
  expect(wrapper.state().filteredList.length).toBeGreaterThan(0);
});

it("should render city suggestion list with results matching to user input", () => {
  const randomCityName = cityList[0].name;
  const cityNameSubString = randomCityName.substring(0, 3);
  const wrapper = shallow(<Search {...props} />);
  wrapper
    .find("input")
    .simulate("change", { currentTarget: { value: cityNameSubString } });
  const filteredCityNames = wrapper.state().filteredList.map(city => city.name);
  expect(
    filteredCityNames.every(cityName => cityName.includes(cityNameSubString))
  ).toBe(true);
});
