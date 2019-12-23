export const cityActive = (activeCities, cityId) => {
  if (activeCities.findIndex(city => city.id === cityId) > -1) {
    return true;
  } else {
    return false;
  }
};
