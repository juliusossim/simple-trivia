import React from 'react';
import he from 'he';

const Question = ({ question }) => (
  <div>
    <div className="">
      <h1 className="title fw-bold">{question?.category}</h1>
      <div className="font-title border-solid-2 py-5 mt-5">
        <div className="py-5 flex-wrap">
          {he.decode(question.question)}
        </div>
      </div>
    </div>
  </div>
);
export default Question;
