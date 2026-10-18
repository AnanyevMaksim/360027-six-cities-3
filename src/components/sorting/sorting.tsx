import { useState } from 'react';
import clsx from 'clsx';
import { SortType } from './const';

type SortingProps = {
  activeSortType: SortType;
  onSortTypeChange: (sortType: SortType) => void;
};

function Sorting({
  activeSortType,
  onSortTypeChange,
}: SortingProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const handleSortTypeClick = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  const handleOptionClick = (sortType: SortType) => {
    onSortTypeChange(sortType);
    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortTypeClick}
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={clsx('places__options places__options--custom', {
          'places__options--opened': isOpened,
        })}
      >
        {Object.values(SortType).map((sortType) => (
          <li
            className={clsx('places__option', {
              'places__option--active': sortType === activeSortType,
            })}
            key={sortType}
            tabIndex={0}
            onClick={() => handleOptionClick(sortType)}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
