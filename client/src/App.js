import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../src/components/auth/Login';
import NewAccount from '../src/components/auth/NewUser';
import Projects from '../src/components/projects/Hobbies';

import ProjectState from '../src/context/projects/Status';
import TaskState from '../src/context/tasks/Status';
import AlertState from '../src/context/alerts/Status';
import AuthState from '../src/context/autentification/Status';
import tokenAuth from '../src/config/TokenAuth';
import PrivateRoute from '../src/components/routes/Route';

// check if a token exists
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {

  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
