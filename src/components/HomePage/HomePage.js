import React, { useEffect } from "react";
import { GET_GITHUB_REPO_LIST_URL } from "../../Constants/Constants";
import useDataFetch from "../Hooks/useDataFetch";
import Loader from "../Loaders/Loader";
import GithubReposTable from "./GithubReposTable";
import Header from "../Header/Header";
import "./HomePage.css";

function HomePage() {
  const [state, setState] = useDataFetch(null, GET_GITHUB_REPO_LIST_URL);

  useEffect(() => {
    setState();
  }, []);

  if (state.loading) {
    return <Loader customClass="loaderListPage" />;
  }

  return (
    <Header>
      <div className="list-container main-page">
        <h2 className="textCenter list-heading">Godaddy Github Repositories</h2>
        {state.data ? (
          <div className="listTable place-at-center">
            <GithubReposTable list={state.data} />
          </div>
        ) : (
          <div>No data found</div>
        )}
      </div>
    </Header>
  );
}

export default HomePage;
