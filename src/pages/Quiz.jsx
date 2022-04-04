import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetQuestionsQuery } from '../app/service';
import Question from '../components/Question';
import { answers, resetAnswers, wrongAnswers } from '../app/questionSlice';
import { answerType, gameLevel, totalQuestions } from '../utilities/resources';

const Quiz = () => {
  /* redux hooks */
  const dispatch = useDispatch();
  const { isLoading, data } = useGetQuestionsQuery({ amt: 10, type: answerType, level: gameLevel });

  /* router hooks */
  const { index } = useParams();
  const navigate = useNavigate();

  /* react hooks */
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(index);

  useEffect(() => {
    dispatch(resetAnswers());
  }, [dispatch]);

  /**
   * checks answer is correct or otherwise
   * dispatches actions appropraitely
   * @param answer
   * */
  const handleAnswer = (answer) => {
    const correct = data?.results[current]?.correct_answer === answer;
    const answered = {
      ...data?.results[current],
      correct
    };
    dispatch(answers(answered));
    !correct && dispatch(wrongAnswers(answered));
    setQuestions([
      ...questions,
      answered
    ]);
    setCurrent((prevState) => parseInt(prevState, 10) + 1);
    if (current === 9) {
      navigate('/results');
    }
  };

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
