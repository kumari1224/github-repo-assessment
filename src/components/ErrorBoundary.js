import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
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
        return this.props.children;
    }
}

export default ErrorBoundary;