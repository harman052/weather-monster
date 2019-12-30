import * as httpMethods from "./httpMethods";

const city = {
  name: "Berlin",
  id: 2950158,
  main: {
    temp_min: 6,
    temp_max: 7
  }
};

describe("http method: get", () => {
  it("should return successful promise", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(city)
      })
    );
    const response = await httpMethods.get();
    expect(response.statusCode).toEqual(200);
    expect(response.data).toEqual(city);
  });

  it("should return failed promise", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.reject({
        json: () => Promise.reject()
      })
    );
    const response = await httpMethods.get();
    expect(response.statusCode).toEqual(500);
    expect(response.data).toEqual({});
  });
});
