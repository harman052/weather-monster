export const cityActive = (activeCities, cityId) => {
  if (activeCities.findIndex(city => city.id === cityId) === -1) {
    return false;
  }
  return true;
};

export const sortCities = activeCities =>
  activeCities.sort(
    (cityA, cityB) => cityB.main.temp_max - cityA.main.temp_max
  );
