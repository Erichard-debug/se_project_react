import "../Weather/Weather.css";

const weatherOptions = [
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

const Weather = ({ day, type, weatherTemp = "" }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    return i.day == day && i.type == type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp} F</div>
      <img src={imageSrcUrl} className="weather__image" />
    </section>
  );
};
export default Weather;
