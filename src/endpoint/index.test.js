import { getWeatherEndpoint } from ".";

const city = {
  name: "Berlin",
  id: 2950158,
  main: {
    temp_min: 6,
    temp_max: 7
  }
};

describe("Search", () => {
  it("should return city object when called with correct parameters", async () => {
    const response = await getWeatherEndpoint(city.id);
    expect(response.data.name).toEqual(city.name);
  });

  it("should not return city object when called with incorrect parameters", async () => {
    const response = await getWeatherEndpoint(100);
    expect(response.data.message).toEqual("city not found");
  });
});
