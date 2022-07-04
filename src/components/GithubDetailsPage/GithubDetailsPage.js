import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDataFetch from "../Hooks/useDataFetch";
import Loader from "../Loaders/Loader";
import { GET_GITHUB_REPO_URL } from "../../Constants/Constants";
import Header from "../Header/Header";
import DetailsCard from "./DetailsCard";

function GithubDetails() {
  const { reponame } = useParams();
  const [state, setState] = useDataFetch(
    null,
    `${GET_GITHUB_REPO_URL}${reponame}`
  );

  useEffect(() => {
    setState();
  }, []);

  if (state.loading) {
    return <Loader customClass="loaderDetailsPage" />;
  }

  return (
    <Header>
      <div className="">
        {state && state.data ? (
          <DetailsCard data={state.data} />
        ) : (
          <div>No data found</div>
        )}
      </div>
    </Header>
  );
}

export default GithubDetails;
