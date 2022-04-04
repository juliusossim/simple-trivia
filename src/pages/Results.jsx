import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import he from 'he';
import { totalQuestions } from '../utilities/resources';
import CustomAccordion from '../components/CustomAccordion';

const Quiz = () => {
  /* router hooks */
  const navigate = useNavigate();

  /* redux hooks */
  const results = useSelector((state) => state.answers);
  const { answers, wrongAnswers } = results;

  /* react hooks */
  const [currentPanel, setCurrentPanel] = useState(1);

  useEffect(() => {
    answers.length < 1 && navigate('/');
  }, []);

  return (
    <div>
      <div className="min-vh-100">
        <div className="font-title bold mb-3">
          <p>You Scored</p>
          <p>{`${(totalQuestions - wrongAnswers.length)}/${totalQuestions}`}</p>
        </div>
        <div className="mb-5">
          {
            answers.map((answer, index) => (
              <CustomAccordion
                key={answer.question}
                currentPanel={currentPanel}
                collapse={answer.correct ? '+' : '-'}
                expand={answer.correct ? '+' : '-'}
                panel={index + 1}
                setCurrentPanel={setCurrentPanel}
                data={{
                  answer: answer.correct ? answer.correct_answer : answer.incorrect_answers[0],
                  details: he.decode(answer.question)
                }}
              />
            ))
          }
        </div>
      </div>
      <div className="fixed-bottom pb-1 pt-3 mt-2 bg-white">
        <Link className="" to="/">PLAY AGAIN</Link>
      </div>
    </div>
  );
};

export default Quiz;
