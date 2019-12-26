import { cityActive } from "./helpers";

const activeCities = [
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
];

describe("Check if city is active", () => {
  it("should check if city is active", () => {
    expect(cityActive(activeCities, 123)).toBe(true);
  });
  it("should check if city is not active", () => {
    expect(cityActive(activeCities, 1)).toBe(false);
  });
});
