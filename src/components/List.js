import React, { useEffect, Suspense } from 'react';
import { headerData, tableRowData } from '../constants/ListContants';
import Table from '../common/table/Table';
import useDataFetch from '../common/customHooks/useDataFetch';
import Loader from '../common/loaders/Loader';
import LoaderScreen from '../common/loaders/LoaderScreen';
import './List.css';

function List(props) {
    const [githubRepos, setGithubRepos] = useDataFetch(null);

    useEffect(() => {
        const url = 'https://api.github.com/orgs/godaddy/repos';
        setGithubRepos(url)
    }, []);

    return (
        <div className="listContainer">
            <Loader loader={githubRepos.loading} Fallback={<LoaderScreen customClass="loaderListPage" />}>
                <h2 className='textCenter'>Github Repositories</h2>
                <div className='listTable placeAtCenter'>
                    <Suspense fallback={<div>Loading data....</div>}>
                        <Table
                            tbodyData={githubRepos.data}
                            customClass="listTableMain"
                            theadData={headerData}
                            tRowData={tableRowData}
                        />
                    </Suspense>
                </div>
            </Loader>
        </div>
    );
}

export default List;
