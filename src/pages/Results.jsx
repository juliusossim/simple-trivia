import React from 'react';
import { Link } from 'react-router-dom';
import he from 'he';
import { totalQuestions } from '../utilities/resources';
import CustomAccordion from '../components/CustomAccordion';
import useResults from '../components/hooks/useResults';

const Quiz = () => {
  const {
    answers,
    wrongAnswers,
    currentPanel,
    setCurrentPanel
  } = useResults();

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
        <Link className="" to="/">PLAY AGAIN ?</Link>
      </div>
    </div>
  );
};

export default Quiz;
