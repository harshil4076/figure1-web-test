import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Details from './Details'
export default function Routes(){
    return(
        <Switch>
             <Route exact path="/">
                <App />
            </Route>
            <Route path="/details">
                <Details />
            </Route>
        </Switch>
    )
}