import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutePages from './RoutePages';
const Main = () => {
    return (
        <Router>
            <RoutePages />
        </Router>
    )
}

export default Main;