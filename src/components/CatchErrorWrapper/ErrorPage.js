import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
    return (
        <div className='place-at-center height-100-vh'>
            <div>
                <h1>Oops...</h1>
                <h2>Looks like something went wrong</h2>
                <div>
                    Please visit our <Link to="/" className='link-decorate'>HOME PAGE</Link>
                </div>
            </div>

        </div>
    )
}