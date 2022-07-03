import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GithubDetailsPage from './components/GithubDetailsPage';
import CatchErrorWrapper from './components/CatchErrorWrapper';
import Error404 from './components/Error404Page';
import './App.css';

function App() {
  return (
    <CatchErrorWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/github-repo-details/:reponame"
            element={<GithubDetailsPage />}
          />
          <Route
            path="*"
            element={<Error404 />}
          />
        </Routes>
      </Router>
    </CatchErrorWrapper>
  );
}

export default App;
