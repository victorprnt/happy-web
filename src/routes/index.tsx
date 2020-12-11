import React from "react"
import { Switch, Route } from "react-router-dom"

import { Landing } from "../pages/Landing"
import OrphanagesMap from "../pages/OrphangesMap"

const Routes = () =>(
        <Switch>
            <Route path="/" exact component={ Landing } />
            <Route path="/app" component={ OrphanagesMap } />
        </Switch>
    );

export default Routes;