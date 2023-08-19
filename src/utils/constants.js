export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  {
    url: require("../images/day/sunnyday.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/cloudyday.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/day/rainday.svg").default,
    day: true,
    type: "rainy",
  },
  {
    url: require("../images/day/stormday.svg").default,
    day: true,
    type: "stormy",
  },
  {
    url: require("../images/day/fogday.svg").default,
    day: true,
    type: "foggy",
  },
  {
    url: require("../images/day/snowday.svg").default,
    day: true,
    type: "snowy",
  },
  {
    url: require("../images/night/clearnight.svg").default,
    day: false,
    type: "clearmoon",
  },
  {
    url: require("../images/night/cloudynight.svg").default,
    day: false,
    type: "cloud",
  },
  {
    url: require("../images/night/rainnight.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/night/stormnight.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/fognight.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../images/night/snownight.svg").default,
    day: false,
    type: "snow",
  },
];
