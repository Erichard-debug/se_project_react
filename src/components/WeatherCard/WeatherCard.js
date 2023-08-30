import "../WeatherCard/WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day == day && i.type == type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather">
      <div className="weather__info">
        {weatherTemp}° {currentTemperatureUnit}
      </div>
      <img src={imageSrcUrl} className="weather__image" alt="weather type" />
    </section>
  );
};
export default WeatherCard;
