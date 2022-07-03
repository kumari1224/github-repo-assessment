import React, { useEffect } from 'react';
import { headerData, tableRowData } from '../../Constants/ListContants';
import { GET_GITHUB_REPO_LIST_URL } from '../../Constants/Constants'
import Table from '../table/Table';
import useDataFetch from '../Hooks/useDataFetch';
import Loader from '../Loaders/Loader';
import './HomePage.css';

function List() {
    const [state, setState] = useDataFetch(null, GET_GITHUB_REPO_LIST_URL);

    useEffect(() => {
        setState();
    }, []);

    if (state.loading) {
        return <Loader customClass="loaderListPage" />
    }

    return (
        <div className="listContainer">
            <h2 className='textCenter'>Github Repositories</h2>
            <div className='listTable placeAtCenter'>
                <Table
                    tbodyData={state.data}
                    customClass="listTableMain"
                    theadData={headerData}
                    tRowData={tableRowData}
                />
            </div>
        </div>
    );
}

export default List;
