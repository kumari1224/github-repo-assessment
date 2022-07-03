import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
    return (
        <div className='placeAtCenter height100vh'>
            <div className='errorBoundaryBody'>
                <h1>Oops...</h1>
                <h2>Looks like something went wrong</h2>
                <div>
                    Please visit our <Link to="/" className='linkDecorate'>HOME PAGE</Link>
                </div>
            </div>

        </div>
    )
}