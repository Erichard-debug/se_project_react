import Weather from "../Weather/Weather";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../Utils/constants.js";
import { useMemo } from "react";
import "../Main/Main.css";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <Weather day={true} type="cloudy" weatherTemp={weatherTemp} />
      <section className="card__section">
        <div className="card__section-title">
          Today is {weatherTemp} F/ You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                key={item._id}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
export default Main;
