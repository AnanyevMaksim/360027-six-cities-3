import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '@/const';
import useAppDispatch from '@/hooks/use-app-dispatch';
import useAppSelector from '@/hooks/use-app-selector';
import { logoutAction } from '@/store/api-actions';
import {
  selectAuthorizationStatus,
  selectFavoriteOffers,
  selectUser,
} from '@/store/selectors';

function Nav(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const user = useAppSelector(selectUser);
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const dispatch = useAppDispatch();

  const handleSignOutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth && user ? (
          <>
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.Favorites}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  {user.email}
                </span>
                <span className="header__favorite-count">
                  {favoriteOffers.length}
                </span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a
                className="header__nav-link"
                href="#"
                onClick={handleSignOutClick}
              >
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
