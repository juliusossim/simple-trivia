import React from 'react';
import Question from '../components/Question';
import { totalQuestions } from '../utilities/resources';
import useQuiz from '../components/hooks/useQuiz';

const Quiz = () => {
  const {
    isLoading, data, current, handleAnswer
  } = useQuiz();
  return (
    <div className="vh-100 bg-theme-faint-1">
      <div className="central">
        {
          isLoading
            ? <div>Loading...</div>
            : (
              <div className="">
                <Question question={data?.results[current] || {}} />

                <div className="mt-5">
                  <button type="button" className="mx-2 btn btn-info" onClick={() => handleAnswer('True')}>true</button>
                  <button type="button" className="mx-2 btn btn-warning" onClick={() => handleAnswer('False')}>false</button>
                </div>
                <div className="mt-5">
                  {`${parseInt(current, 10) + 1}/${totalQuestions}`}
                </div>
              </div>
            )
        }
      </div>
    </div>
  );
};

export default Quiz;
