import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className='place-at-center height-100-vh'>
            <div className='error-404-main'>
                <h1>404</h1>
                <h2>page not found</h2>
                <div>
                    Please visit our <Link to="/" className='link-decorate'>HOME PAGE</Link>
                </div>
            </div>

        </div>
    );
}

export default Error404;
