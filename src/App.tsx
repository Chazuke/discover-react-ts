import React from 'react';
import GreeterFunctional from './GreeterFunctional'
import PayeesManager from './payees/PayeesManager'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import PeopleManager from './people/PeopleManager'
import ReduxCounter from './demos/ReduxCounter'

function App() {
  return (
    <Router>
      <section className="section">
        <div>
          <GreeterFunctional company="Discover Financial Services" greeting="Salutations"/>

          <div>
            <p>
              <NavLink to="/payees">Payees</NavLink> |
              <NavLink to="/people"> People</NavLink> |
              <NavLink to="/redux-counter"> Redux Counter</NavLink>
            </p>
          </div>

          <Switch>
            <Route path="/payees">
              <PayeesManager />
            </Route>
            <Route path="/people">
              <PeopleManager />
            </Route>
            <Route path="/redux-counter">
              <ReduxCounter />
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  );
}

export default App;
