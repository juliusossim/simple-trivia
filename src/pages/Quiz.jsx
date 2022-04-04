import React, {useState} from "react";
import { useGetQuestionsQuery } from "../app/service";
import Question from "../components/Question";
import {useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {answers, wrongAnswers} from "../app/questionSlice";

const Quiz = () => {
    const dispatch = useDispatch();
    const { index } = useParams();
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(index);

    const { isLoading, isFetching, data, isError, error } = useGetQuestionsQuery({ amt: 10, type: 'boolean', level: 'hard' });
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
        <div>
            {
                isLoading
                    ? <div>Loading...</div>
                    : <Question question={data?.results[current] || {}} />
            }
            <button type="button" onClick={() => handleAnswer('True')}>true</button>
            <button type="button" onClick={() => handleAnswer('False')}>false</button>
        </div>
    );
};

export default Quiz;