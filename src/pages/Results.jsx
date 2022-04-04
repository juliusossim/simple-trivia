import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { totalQuestions } from '../utilities/resources';
import CustomAccordion from '../components/CustomAccordion';
import {Link} from "react-router-dom";

const Quiz = () => {
    const results = useSelector((state) => state.answers);
    const [currentPanel, setCurrentPanel] = useState(1);
    const { answers, wrongAnswers } = results;

    return (
        <div className="offset-2 col-8 text-center py-4 px-2">
            <div className="font-title bold mb-3">
                <p>You sored</p>
                <p>{`${(totalQuestions - wrongAnswers.length)}/${totalQuestions}`}</p>
            </div>
            <div className="">
                {
                    answers.map((answer, index) => (
                        <CustomAccordion
                            key={index}
                            currentPanel={currentPanel}
                            collapse={answer.correct ? '+' : '-'}
                            expand={answer.correct ? '+' : '-'}
                            panel={index + 1}
                            setCurrentPanel={setCurrentPanel}
                            data={{
                                answer: answer.correct ? answer.correct_answer : answer.incorrect_answers[0],
                                details: answer.question
                            }}
                        />
                    ))
                }
            </div>
            <div>
                <Link className="" to="/">PLAY AGAIN</Link>
            </div>
        </div>
    );
};

export default Quiz;
