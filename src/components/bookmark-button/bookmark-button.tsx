import clsx from 'clsx';

type BookmarkButtonProps = {
  isActive: boolean;
};

function BookmarkButton({ isActive }: BookmarkButtonProps): JSX.Element {
  return (
    <button
      className={clsx(
        'place-card__bookmark-button button',
        isActive && 'place-card__bookmark-button--active',
      )}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isActive ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default BookmarkButton;
