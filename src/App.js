import React from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Home from "pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loading from "components/loading/Loading";
import CreateWorkspace from "components/workspace/CreateWorkspace";
import UpdateWorkspace from "components/workspace/UpdateWorkspace";
import DeleteWorkspace from "components/workspace/DeleteWorkspace";
import CreateProject from "components/projects/createProject";
// import ProtectedRoute from "components/auth/ProtectedRoute";
import SignIn from "pages/auth/SignIn";

function App() {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress(prevState => {
        if (prevState === 100) {
          setLoading(false)
          return 0;
        }
        return Math.min(prevState + 15, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const token = localStorage.getItem("AuthToken");
  let authenticated;

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      window.location.href = "/signin";
      authenticated = false;
    }
    axios.defaults.headers.common["Authorization"] = token;
    authenticated = true;
  }

  if (authenticated && loading) {
    return <Loading progress={progress} />
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Home} />
        <Route exact path="/workspaces/add" component={CreateWorkspace} />
        <Route exact path="/:name/update/:id" component={UpdateWorkspace} />
        <Route exact path="/:name/delete/:id" component={DeleteWorkspace} />
        <Route exact path="/:workspace/create-project" component={CreateProject} />
      </Switch>
    </Router>
  );
}

export default App;
