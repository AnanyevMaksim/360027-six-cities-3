import { useEffect } from 'react';
import clsx from 'clsx';
import useAppDispatch from '@/hooks/use-app-dispatch';
import useAppSelector from '@/hooks/use-app-selector';
import { fetchFavoritesAction } from '@/store/api-actions';
import {
  selectFavoritesByCity,
  selectFavoritesStatus,
} from '@/store/favorites-data/selectors';
import PlaceCard from '@/components/place-card/place-card';
import Logo from '@/components/logo/logo';
import Header from '@/components/header/header';
import Loader from '@/components/loader/loader';
import FullPageError from '@/components/full-page-error/full-page-error';
import FavoritesEmpty from '@/components/favorites-empty/favorites-empty';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesByCity = useAppSelector(selectFavoritesByCity);
  const { isLoading, isError } = useAppSelector(selectFavoritesStatus);
  const isEmpty = Object.keys(favoritesByCity).length === 0;

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (isError) {
    return <FullPageError />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={clsx('page', { 'page--favorites-empty': isEmpty })}>
      <Header />

      <main
        className={clsx('page__main page__main--favorites', {
          'page__main--favorites-empty': isEmpty,
        })}
      >
        <div className="page__favorites-container container">
          {isEmpty ? (
            <FavoritesEmpty />
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.keys(favoritesByCity).map((city) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favoritesByCity[city].map((offer) => (
                        <PlaceCard
                          key={offer.id}
                          offer={offer}
                          type="favorites"
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <Logo type="footer" />
      </footer>
    </div>
  );
}

export default FavoritesPage;
