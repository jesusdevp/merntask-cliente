import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Projects from "./components/projects/Projects";

import ProjectState from "./context/projects/projectState";
import TaskState from "./context/tasks/taskState";
import AlertaState from "./context/alerts/alertState";
import AuthState from "./context/authentication/authState";

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
