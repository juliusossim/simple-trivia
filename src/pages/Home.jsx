import React from 'react';
import { Link } from 'react-router-dom';
import { totalQuestions } from '../utilities/resources';

const Home = () => (
    <div>
        <div className="">
            Welcome to the Trivia Challenge
        </div>
        <div className="">
            {` You will be presented with ${totalQuestions} true or false Questions`}
        </div>
        <div className="">
            Can you score 100%?
        </div>
        <Link to="/quiz/0" className="">
            BEGIN
        </Link>
    </div>
);
export default Home;
