import React from "react";
import { shallow } from "enzyme";
import Card from ".";

const props = {
  city: {
    name: "Berlin",
    id: 123,
    main: {
      temp_min: 4,
      temp_max: 20,
    },
  },
  removeCity: jest.fn(),
};

describe("Card", () => {
  it("should render Card component", () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render 1 <strong> element", () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.find("strong").length).toBe(0);
  });

  it("should render correct contents of <strong> element", () => {
    const wrapper = shallow(<Card {...props} />);
    const cardTitle = wrapper.find("strong").text();
    expect(cardTitle).toEqual(props.city.name);
  });

  it("should render 2 <span> elements", () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.find("span").length).toBe(2);
  });

  it("should render correct contents of <span> elements", () => {
    const wrapper = shallow(<Card {...props} />);
    const min = wrapper.find(".min-temp-label").text();
    const max = wrapper.find(".max-temp-label").text();
    expect(min).toEqual("Min");
    expect(max).toEqual("Max");
  });

  it("should call removeCity when card is clicked", () => {
    const wrapper = shallow(<Card {...props} />);
    wrapper.find("article").simulate("click");
    expect(props.removeCity).toHaveBeenCalledWith(props.city.id);
    expect(props.removeCity).toHaveBeenCalledTimes(1);
  });
});
