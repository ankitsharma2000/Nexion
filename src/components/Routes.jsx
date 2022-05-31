import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Feedback from '../pages/Feedback'
import Vendors from '../pages/Vendors'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/feedback' component={Feedback}/>
            <Route path='/vendors' component={Vendors}/>
        </Switch>
    )
}

export default Routes
