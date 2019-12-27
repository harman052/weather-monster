import React from "react";
import { shallow } from "enzyme";
import { SuggestedCityList } from "./SuggestedCityList";

const props = {
  isOpen: false,
  filteredList: [
    { name: "Berlin", id: 123 },
    { name: "Munich", id: 456 }
  ],
  addCity: jest.fn()
};

describe("SuggestedCityList", () => {
  it("should render SuggestedCityList component", () => {
    const wrapper = shallow(<SuggestedCityList {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should return null when isOpen is false", () => {
    const wrapper = shallow(<SuggestedCityList {...props} />);
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it("should return list of suggested cities when filteredList is not empty and isOpen is set to true", () => {
    const localProps = {
      ...props,
      isOpen: true
    };
    const wrapper = shallow(<SuggestedCityList {...localProps} />);
    expect(wrapper.find(".suggested-city-list-item").length).toEqual(
      localProps.filteredList.length
    );
  });

  it("should call addCity when an item from suggested city list is clicked", () => {
    const localProps = {
      ...props,
      isOpen: true
    };
    const wrapper = shallow(<SuggestedCityList {...localProps} />);
    wrapper
      .find(".suggested-city-list-item")
      .first()
      .simulate("click");
    expect(props.addCity).toHaveBeenCalledWith(localProps.filteredList[0]);
    expect(props.addCity).toHaveBeenCalledTimes(1);
  });
});
