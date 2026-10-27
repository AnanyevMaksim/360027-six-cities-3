import { MouseEvent } from 'react';
import clsx from 'clsx';
import { CITIES } from '@/const';
import { CityName } from '@/types/offer';

type CitiesListProps = {
  activeCity: CityName;
  onCityChange: (city: CityName) => void;
};

function CitiesList({
  activeCity,
  onCityChange,
}: CitiesListProps): JSX.Element {
  const handleCityClick = (
    evt: MouseEvent<HTMLAnchorElement>,
    city: CityName,
  ) => {
    evt.preventDefault();
    onCityChange(city);
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <li className="locations__item" key={city}>
                <a
                  className={clsx('locations__item-link tabs__item', {
                    'tabs__item--active': city === activeCity,
                  })}
                  href="#"
                  onClick={(evt) => handleCityClick(evt, city)}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;
