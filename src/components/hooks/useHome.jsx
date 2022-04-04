import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetAnswers } from '../../app/questionSlice';

const useHome = () => {
  /* redux hooks */
  const dispatch = useDispatch();

  /* react hooks */
  useEffect(() => {
    dispatch(resetAnswers());
  }, [dispatch]);
};
export default useHome;
