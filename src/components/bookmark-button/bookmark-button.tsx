import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { AppRoute, AuthorizationStatus } from '@/const';
import useAppDispatch from '@/hooks/use-app-dispatch';
import useAppSelector from '@/hooks/use-app-selector';
import { changeFavoriteStatusAction } from '@/store/api-actions';
import { selectAuthorizationStatus } from '@/store/user-process/selectors';

type BookmarkButtonType = 'place-card' | 'offer';

type IconSize = {
  width: number;
  height: number;
};

const BookmarkButtonTypeToIconSize: Record<BookmarkButtonType, IconSize> = {
  'place-card': { width: 18, height: 19 },
  offer: { width: 31, height: 33 },
};

type BookmarkButtonProps = {
  type: BookmarkButtonType;
  offerId: string;
  isActive: boolean;
};

function BookmarkButton({
  type,
  offerId,
  isActive,
}: BookmarkButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const iconSize = BookmarkButtonTypeToIconSize[type];

  const handleButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(changeFavoriteStatusAction({ offerId, isFavorite: !isActive }));
  };

  return (
    <button
      className={clsx(`${type}__bookmark-button button`, {
        [`${type}__bookmark-button--active`]: isActive,
      })}
      type="button"
      onClick={handleButtonClick}
    >
      <svg
        className={`${type}__bookmark-icon`}
        width={iconSize.width}
        height={iconSize.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isActive ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default BookmarkButton;
