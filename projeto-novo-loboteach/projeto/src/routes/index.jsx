import { Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import React from 'react';

function routes() {
    return (
        <Switch>
            <Route path="/" component={HomePage}/>
        </Switch>
    );
}

export default routes;