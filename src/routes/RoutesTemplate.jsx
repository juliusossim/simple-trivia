import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const Quiz = lazy(() => import('../pages/Quiz'));
const Results = lazy(() => import('../pages/Results'));

const RouteTemplate = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/quiz/:index"
      element={(
        <Suspense fallback={(
          <div className="loader-container loader-container2">
            <div className="loader">
              <i />
            </div>
          </div>
        )}
        >
          <Quiz />
        </Suspense>
      )}
    />
    <Route
      path="/results"
      element={(
        <Suspense fallback={(
          <div className="loader-container loader-container2">
            <div className="loader">
              <i />
            </div>
          </div>
        )}
        >
          <Results />
        </Suspense>
      )}
    />
  </Routes>
);

export default RouteTemplate;
