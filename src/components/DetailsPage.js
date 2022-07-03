import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDataFetch from '../common/customHooks/useDataFetch';
import Table from '../common/table/Table';
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
    console.log("details Page : ", githubRepoData);

    return (
        <div className="placeAtCenter">
            {githubRepoData && githubRepoData.data ? <div>
                <h2>{githubRepoData.full_name}</h2>
                {/* <Suspense fallback={<div>Loading data....</div>}>
                    <Table
                        tbodyData={githubRepos.data}
                        customClass="listTableMain"
                        theadData={headerData}
                        tRowData={tableRowData}
                    />
                </Suspense> */}
                {/* <div>
                    <div>
                        <span>Repo Name</span>
                        <span>{githubRepoData.data.full_name}</span>
                    </div>
                    <div>
                        <span>Repo Name</span>
                        <span>{githubRepoData.data.full_name}</span>
                    </div>
                    <div>
                        <span>Description</span>
                        <span>{githubRepoData.data.description}</span>
                    </div>
                    <div>
                        <span>Github Link</span>
                        <span>{githubRepoData.data.html_url}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{githubRepoData.data.language}</span>
                    </div>
                    <div>
                        <span>Forks</span>
                        <span>{githubRepoData.data.forks}</span>
                    </div>
                    <div>
                        <span>Open Issues</span>
                        <span>{githubRepoData.data.open_issues}</span>
                    </div>
                    <div>
                        <span>Watchers</span>
                        <span>{githubRepoData.data.watchers}</span>
                    </div>
                </div> */}
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
        </div>
    );
}

export default GithubDetails;
