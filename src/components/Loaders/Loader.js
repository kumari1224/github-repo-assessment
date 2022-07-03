import React from 'react';
import './Loader.css';

function Loader({ customClass }) {
    return (
        <div className={customClass}>
            <div className={`overlay`} style={{ display: "block" }}>
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Loader;