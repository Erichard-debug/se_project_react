import "../WeatherCard/WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day == day && i.type == type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp} F</div>
      <img src={imageSrcUrl} className="weather__image" alt="weather type" />
    </section>
  );
};
export default WeatherCard;
