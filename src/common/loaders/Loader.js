import React from 'react';

function Loader({ loader, Fallback, children }) {
    if (!loader) {
        return children
    }
    return Fallback;
}

export default Loader;