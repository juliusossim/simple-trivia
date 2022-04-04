import React from 'react';
import './assets/scss/App.scss';
import { BrowserRouter } from 'react-router-dom';
import RouteTemplate from './routes/RoutesTemplate';

function App() {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="offset-2 col-8 text-center py-4 px-2">
          <BrowserRouter>
            <RouteTemplate />
          </BrowserRouter>
        </div>

      </div>

    </main>
  );
}

export default App;
