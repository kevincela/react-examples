import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(`COMPONENTDIDCATCH ${error} ${errorInfo}`);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something wrong has happened!</h1>
        } else {
            return this.props.children
        }
    }
}