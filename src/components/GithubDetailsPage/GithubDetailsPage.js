import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDataFetch from '../Hooks/useDataFetch';
import Loader from '../Loaders/Loader';
import { GET_GITHUB_REPO_URL } from '../../Constants/Constants';
import './GithubDetailsPage.css';

function GithubDetails() {
    const { reponame } = useParams();
    const [state, setState] = useDataFetch(null, `${GET_GITHUB_REPO_URL}${reponame}`);

    console.log(reponame);

    useEffect(() => {
        setState();
    }, []);

    if (state.loading) {
        return <Loader customClass="loaderDetailsPage" />;
    }

    return (
        <div className="placeAtCenter">
            {state && state.data ? <div>
                <h2>{state.full_name}</h2>
                <table>
                    <tr>
                        <th>Header</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td>Repo Name</td>
                        <td>{state.data.full_name}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{state.data.description}</td>
                    </tr>
                    <tr>
                        <td>Github Link</td>
                        <td>{state.data.html_url}</td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>{state.data.language}</td>
                    </tr>
                    <tr>
                        <td>Forks</td>
                        <td>{state.data.forks}</td>
                    </tr>
                    <tr>
                        <td>Open Issues</td>
                        <td>{state.data.open_issues}</td>
                    </tr>
                    <tr>
                        <td>Watchers</td>
                        <td>{state.data.watchers}</td>
                    </tr>
                </table>

            </div> : <div>No data found</div>}
        </div>
    );
}

export default GithubDetails;
