const cityList = [
  {
    id: 707860,
    name: "Hurzuf",
    country: "UA",
    coord: {
      lon: 34.283333,
      lat: 44.549999
    }
  },
  {
    id: 519188,
    name: "Novinki",
    country: "RU",
    coord: {
      lon: 37.666668,
      lat: 55.683334
    }
  },
  {
    id: 1283378,
    name: "Gorkhā",
    country: "NP",
    coord: {
      lon: 84.633331,
      lat: 28
    }
  },
  {
    id: 1270260,
    name: "State of Haryāna",
    country: "IN",
    coord: {
      lon: 76,
      lat: 29
    }
  },
  {
    id: 708546,
    name: "Holubynka",
    country: "UA",
    coord: {
      lon: 33.900002,
      lat: 44.599998
    }
  },
  {
    id: 1283710,
    name: "Bāgmatī Zone",
    country: "NP",
    coord: {
      lon: 85.416664,
      lat: 28
    }
  },
  {
    id: 529334,
    name: "Mar’ina Roshcha",
    country: "RU",
    coord: {
      lon: 37.611111,
      lat: 55.796391
    }
  },
  {
    id: 1269750,
    name: "Republic of India",
    country: "IN",
    coord: {
      lon: 77,
      lat: 20
    }
  },
  {
    id: 1283240,
    name: "Kathmandu",
    country: "NP",
    coord: {
      lon: 85.316666,
      lat: 27.716667
    }
  },
  {
    id: 703363,
    name: "Laspi",
    country: "UA",
    coord: {
      lon: 33.733334,
      lat: 44.416668
    }
  },
  {
    id: 3632308,
    name: "Merida",
    country: "VE",
    coord: {
      lon: -71.144997,
      lat: 8.598333
    }
  },
  {
    id: 473537,
    name: "Vinogradovo",
    country: "RU",
    coord: {
      lon: 38.545555,
      lat: 55.423332
    }
  },
  {
    id: 384848,
    name: "Qarah Gawl al ‘Ulyā",
    country: "IQ",
    coord: {
      lon: 45.6325,
      lat: 35.353889
    }
  },
  {
    id: 569143,
    name: "Cherkizovo",
    country: "RU",
    coord: {
      lon: 37.728889,
      lat: 55.800835
    }
  },
  {
    id: 713514,
    name: "Alupka",
    country: "UA",
    coord: {
      lon: 34.049999,
      lat: 44.416668
    }
  },
  {
    id: 2878044,
    name: "Lichtenrade",
    country: "DE",
    coord: {
      lon: 13.40637,
      lat: 52.398441
    }
  },
  {
    id: 464176,
    name: "Zavety Il’icha",
    country: "RU",
    coord: {
      lon: 37.849998,
      lat: 56.049999
    }
  },
  {
    id: 295582,
    name: "‘Azriqam",
    country: "IL",
    coord: {
      lon: 34.700001,
      lat: 31.75
    }
  },
  {
    id: 1271231,
    name: "Ghūra",
    country: "IN",
    coord: {
      lon: 79.883331,
      lat: 24.766666
    }
  },
  {
    id: 690856,
    name: "Tyuzler",
    country: "UA",
    coord: {
      lon: 34.083332,
      lat: 44.466667
    }
  },
  {
    id: 464737,
    name: "Zaponor’ye",
    country: "RU",
    coord: {
      lon: 38.861942,
      lat: 55.639999
    }
  },
  {
    id: 707716,
    name: "Il’ichëvka",
    country: "UA",
    coord: {
      lon: 34.383331,
      lat: 44.666668
    }
  },
  {
    id: 697959,
    name: "Partyzans’ke",
    country: "UA",
    coord: {
      lon: 34.083332,
      lat: 44.833332
    }
  },
  {
    id: 803611,
    name: "Yurevichi",
    country: "RU",
    coord: {
      lon: 39.934444,
      lat: 43.600555
    }
  },
  {
    id: 614371,
    name: "Gumist’a",
    country: "GE",
    coord: {
      lon: 40.973888,
      lat: 43.026943
    }
  },
  {
    id: 874560,
    name: "Ptitsefabrika",
    country: "GE",
    coord: {
      lon: 40.290558,
      lat: 43.183613
    }
  },
  {
    id: 874652,
    name: "Orekhovo",
    country: "GE",
    coord: {
      lon: 40.146111,
      lat: 43.351391
    }
  },
  {
    id: 2347078,
    name: "Birim",
    country: "NG",
    coord: {
      lon: 9.997027,
      lat: 10.062094
    }
  },
  {
    id: 2864071,
    name: "Neustadt",
    country: "DE",
    coord: {
      lon: 12.56667,
      lat: 52.400002
    }
  },
  {
    id: 1704628,
    name: "Mabiga",
    country: "PH",
    coord: {
      lon: 120.585098,
      lat: 15.1917
    }
  },
  {
    id: 3076348,
    name: "Dubí",
    country: "CZ",
    coord: {
      lon: 15.41857,
      lat: 49.533878
    }
  },
  {
    id: 6811761,
    name: "Wŏnsŏngil-tong",
    country: "KR",
    coord: {
      lon: 127.161346,
      lat: 36.809792
    }
  },
  {
    id: 696416,
    name: "Potok",
    country: "UA",
    coord: {
      lon: 25.03334,
      lat: 49.512241
    }
  },
  {
    id: 6845986,
    name: "Mironovka",
    country: "RU",
    coord: {
      lon: 44.214001,
      lat: 54.499802
    }
  },
  {
    id: 670942,
    name: "Petroman",
    country: "RO",
    coord: {
      lon: 21.116671,
      lat: 45.533329
    }
  },
  {
    id: 2620274,
    name: "Hjallese",
    country: "DK",
    coord: {
      lon: 10.38499,
      lat: 55.348289
    }
  },
  {
    id: 2624596,
    name: "Årslev",
    country: "DK",
    coord: {
      lon: 9.3485,
      lat: 55.026772
    }
  },
  {
    id: 2615199,
    name: "Pederstrup",
    country: "DK",
    coord: {
      lon: 10.48753,
      lat: 55.285309
    }
  }
];

export default cityList;
