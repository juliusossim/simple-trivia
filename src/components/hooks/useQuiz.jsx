import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { answers, resetAnswers, wrongAnswers } from '../../app/questionSlice';
import { useGetQuestionsQuery } from '../../app/service';
import { answerType, gameLevel } from '../../utilities/resources';

const useQuiz = () => {
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
    {
      isLoading,
      data,
      handleAnswer,
      current
    }
  );
};
export default useQuiz;
