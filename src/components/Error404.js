import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className='placeAtCenter height100vh'>
            <div className='error404Container'>
                <h1>404</h1>
                <h2>page not found</h2>
                <div>
                    Please visit our <Link to="/" className='linkDecorate'>HOME PAGE</Link>
                </div>
            </div>

        </div>
    );
}

export default Error404;
