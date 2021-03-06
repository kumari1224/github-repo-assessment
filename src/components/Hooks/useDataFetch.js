import { useState } from "react";

// Custom Hook to fetch the data async as well as display the loader
function useDataFetch(initialState, url) {
    const [state, setState] = useState({ data: initialState, loading: false });

    const fetchDataHandler = () => {
        setState(prev => ({ ...prev, loading: true }));
        fetch(url)
            .then(res => res.json())
            .then(res => {
                let formattedData = { data: res, loading: false };
                setState({ ...formattedData });
            })
            .catch(err => setState(prev => ({ ...prev, loading: false, errorMessage: err.message })))
    }

    return [state, fetchDataHandler];
}

export default useDataFetch;