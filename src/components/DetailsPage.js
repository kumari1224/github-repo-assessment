import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDataFetch from '../common/customHooks/useDataFetch';
import Loader from '../common/loaders/Loader';
import LoaderScreen from '../common/loaders/LoaderScreen';
import './App.css';

function GithubDetails() {
    const [githubRepoData, setGithubRepoData] = useDataFetch(null);

    const { reponame } = useParams();
    console.log(reponame);

    useEffect(() => {
        if (reponame) {
            const url = `https://api.github.com/repos/godaddy/${reponame}`;
            setGithubRepoData(url);
        }
    }, [reponame]);

    return (
        <div className="placeAtCenter">
            <Loader loader={githubRepoData.loading} Fallback={<LoaderScreen customClass="loaderDetailsPage" />}>
                {githubRepoData && githubRepoData.data ? <div>
                    <h2>{githubRepoData.full_name}</h2>
                    <table>
                        <tr>
                            <th>Header</th>
                            <th>Details</th>
                        </tr>
                        <tr>
                            <td>Repo Name</td>
                            <td>{githubRepoData.data.full_name}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{githubRepoData.data.description}</td>
                        </tr>
                        <tr>
                            <td>Github Link</td>
                            <td>{githubRepoData.data.html_url}</td>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            <td>{githubRepoData.data.language}</td>
                        </tr>
                        <tr>
                            <td>Forks</td>
                            <td>{githubRepoData.data.forks}</td>
                        </tr>
                        <tr>
                            <td>Open Issues</td>
                            <td>{githubRepoData.data.open_issues}</td>
                        </tr>
                        <tr>
                            <td>Watchers</td>
                            <td>{githubRepoData.data.watchers}</td>
                        </tr>
                    </table>

                </div> : <div>No data found</div>}
            </Loader>

        </div>
    );
}

export default GithubDetails;
