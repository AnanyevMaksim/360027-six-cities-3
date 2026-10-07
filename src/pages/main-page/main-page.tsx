import { Offers } from '@/types/offer';
import PlacesList from '@/components/places-list/places-list';
import Header from '@/components/header/header';
import CitiesList from '@/components/cities-list/cities-list';
import Sorting from '@/components/sorting/sorting';
import Map from '@/components/map/map';

type MainPageProps = {
  offers: Offers;
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const city = offers[0]?.city;

  return (
    <div className="page page--gray page--main">
      <Header isActiveLogo />

      <main className="page__main page__main--index">
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in Amsterdam
              </b>
              <Sorting />
              <PlacesList offers={offers} />
            </section>
            <div className="cities__right-section">
              {city && (
                <Map className="cities__map" city={city} offers={offers} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
