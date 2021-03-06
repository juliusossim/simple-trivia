import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStartOverHook = () => {
  const navigate = useNavigate();
  const results = useSelector((state) => state.answers);
  const { answers } = results;
  useEffect(() => {
    answers.length < 1 && navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useStartOverHook;
