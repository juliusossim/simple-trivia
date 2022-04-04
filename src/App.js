import React from 'react';
import './App.css';
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
