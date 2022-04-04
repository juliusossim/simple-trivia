import React from 'react';
import './assets/scss/App.scss';
import {BrowserRouter} from "react-router-dom";
import RouteTemplate from "./routes/RoutesTemplate";

function App() {
  return (
      <BrowserRouter>
        <RouteTemplate />
      </BrowserRouter>
  );
}

export default App;
