import React from 'react';
import { Link } from 'react-router-dom';
import { totalQuestions } from '../utilities/resources';
import useHome from '../components/hooks/useHome';

const Home = () => {
  useHome();
  return (
    <div className="bg-theme-faint-1 vh-100 py-5">
      <div className="bg-theme-faint-1 vh-100">
        <div className="font-title fw-bold">
          Welcome to the
          {' '}
          <br />
          Trivia Challenge

        </div>
        <div className="central font-title ">
          <div className="">
            {` You will be presented with ${totalQuestions} true or false Questions`}
          </div>
          <div className="space-top mt-5 pb-5">
            Can you score 100%?
          </div>
        </div>
        <Link to="/quiz/0" className="fixed-bottom pb-3">
          BEGIN
        </Link>
      </div>
    </div>
  );
};
export default Home;
