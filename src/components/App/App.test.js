import React from "react";
import { shallow } from "enzyme";
import { header } from "../../config";
import { App } from "./App";

const props = {
  showSuggestionList: jest.fn()
};

it("should render App", () => {
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it("should render 1 header tag", () => {
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.find("header").length).toBe(1);
});

it("should render 1 h1 tag", () => {
  const wrapper = shallow(<App {...props} />);
  expect(wrapper.find("h1").length).toBe(1);
});

it("should render correct contents of h1 tag", () => {
  const wrapper = shallow(<App {...props} />);
  const h1 = wrapper.find("h1").text();
  expect(h1).toEqual(header);
});
