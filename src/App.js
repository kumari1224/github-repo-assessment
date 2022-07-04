import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GithubDetailsPage from "./components/GithubDetailsPage";
import CatchErrorWrapper from "./components/CatchErrorWrapper";
import Error404 from "./components/Error404Page";
import "./App.css";
import "./global/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CatchErrorWrapper>
              <HomePage />
            </CatchErrorWrapper>
          }
        />
        <Route
          path="/github-repo-details/:reponame"
          element={
            <CatchErrorWrapper>
              <GithubDetailsPage />
            </CatchErrorWrapper>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
