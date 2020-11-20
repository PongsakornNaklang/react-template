import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import { Home } from '../page/Home';
import { NotFound } from '../page/NotFound';

export const Router = (props) => {
    return (
        <BrowserRouter>
            {props.children}
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
