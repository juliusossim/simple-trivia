import { useSelector } from 'react-redux';
import { useState } from 'react';
import useStartOverHook from './useStartOverHook';

const useResults = () => {
  /* custom hooks */
  useStartOverHook();

  /* redux hooks */
  const results = useSelector((state) => state.answers);
  // eslint-disable-next-line no-shadow
  const { answers, wrongAnswers } = results;

  /* react hooks */
  const [currentPanel, setCurrentPanel] = useState(1);

  return (
    {
      answers,
      wrongAnswers,
      currentPanel,
      setCurrentPanel
    }
  );
};
export default useResults;
