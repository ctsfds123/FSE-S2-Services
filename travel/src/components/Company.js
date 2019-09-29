import React from 'react'
import Summary from './Summary';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import EmployeeTrips from './EmployeeTrip';
import Admin from './Admin';

function Company(){
    return(
        
        <div>
        <h1>Welcome to Company</h1>
            <Router>
                    <ul>
                        <li>
                        <Link to="/Summary">Summary</Link>
                        </li>
                        <li>
                        <Link to="/Employee">Employee</Link>
                        </li>
                        <li>
                        <Link to="/Admin">Admin</Link>
                        </li>
                    </ul>
                    <Route path="/Summary" exact strict component={Summary} >
                    </Route>        
                    <Route path="/Employee" exact strict component= {EmployeeTrips}>
                    </Route>        
                    <Route path="/Admin" exact strict component= {Admin}>
                    </Route>        
                </Router>
        </div>
    )
}

export default Company