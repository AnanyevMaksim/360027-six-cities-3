import { RefObject, useEffect } from 'react';

function useOutsideClick(
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void,
): void {
  useEffect(() => {
    const handleDocumentClick = (evt: MouseEvent) => {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [ref, onOutsideClick]);
}

export default useOutsideClick;
