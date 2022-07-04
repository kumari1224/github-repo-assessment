import React from 'react';
import ErrorPage from './ErrorPage';

// Error Boundary Component to catch the errors and display a fallback
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Error Boundary Fallback component
            return <ErrorPage />
        }
        return this.props.children;
    }
}

export default ErrorBoundary;