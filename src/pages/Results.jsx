import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { totalQuestions } from '../utilities/resources';
import CustomAccordion from '../components/CustomAccordion';

const Quiz = () => {
    const results = useSelector((state) => state.answers);
    const [currentPanel, setCurrentPanel] = useState(1);
    const { answers, wrongAnswers } = results;

    return (
        <div>
            <h2>
                <p>You sored</p>
                <p>{`${(totalQuestions - wrongAnswers.length)}/${totalQuestions}`}</p>
            </h2>
            <div>
                {
                    answers.map((answer, index) => (
                        <CustomAccordion
                            currentPanel={currentPanel}
                            collapse={answer.correct ? '+' : '-'}
                            expand={answer.correct ? '+' : '-'}
                            panel={index + 1}
                            setCurrentPanel={setCurrentPanel}
                            data={{
                                name: (<div>k</div>),
                                details: answer.question
                            }}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Quiz;
