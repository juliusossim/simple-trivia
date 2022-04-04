import React from 'react';

const Question = ({ question }) => (
    <div>
        <div className="">
            <h1 className="title">{question?.category}</h1>
            <div className="question">
                {question.question}
            </div>
        </div>
    </div>
);
export default Question;
