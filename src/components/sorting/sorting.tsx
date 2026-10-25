import { useRef, useState } from 'react';
import clsx from 'clsx';
import useAppDispatch from '@/hooks/use-app-dispatch';
import useAppSelector from '@/hooks/use-app-selector';
import useOutsideClick from '@/hooks/use-outside-click';
import { selectSortType } from '@/store/selectors';
import { changeSort } from '@/store/action';
import { SortType } from './const';

function Sorting(): JSX.Element {
  const activeSortType = useAppSelector(selectSortType);
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const sortingRef = useRef<HTMLFormElement | null>(null);

  const handleSortTypeClick = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  const handleOptionClick = (sortType: SortType) => {
    dispatch(changeSort(sortType));
    setIsOpened(false);
  };

  const handleOutsideClick = () => {
    setIsOpened(false);
  };

  useOutsideClick(sortingRef, handleOutsideClick);

  return (
    <form className="places__sorting" action="#" method="get" ref={sortingRef}>
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
