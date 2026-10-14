import clsx from 'clsx';
import { CityName } from '@/types/offer';

type CitiesListProps = {
  cities: readonly CityName[];
  activeCity: CityName;
};

function CitiesList({ cities, activeCity }: CitiesListProps): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li className="locations__item" key={city}>
                <a
                  className={clsx('locations__item-link tabs__item', {
                    'tabs__item--active': city === activeCity,
                  })}
                  href="#"
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
