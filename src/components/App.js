import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './List';
import DetailsPage from './DetailsPage';
import ErrorBoundary from './ErrorBoundary';
import Error404 from './Error404';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ErrorBoundary><List /></ErrorBoundary>}
        />
        <Route
          path="/details/:reponame"
          element={<ErrorBoundary><DetailsPage /></ErrorBoundary>}
        />
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
