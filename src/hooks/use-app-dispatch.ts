import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/types/state';

function useAppDispatch(): AppDispatch {
  return useDispatch<AppDispatch>();
}

export default useAppDispatch;
