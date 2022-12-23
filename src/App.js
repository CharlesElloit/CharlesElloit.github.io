import React from "react";
// import Home from "pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "components/loading/Loading";
import CreateWorkspace from "components/workspace/CreateWorkspace";
import UpdateWorkspace from "components/workspace/UpdateWorkspace";
import DeleteWorkspace from "components/workspace/DeleteWorkspace";
import WorkspaceTasks from "components/workspace/Workspace-tasks";
import CreateProject from "components/projects/createProject";
import SignIn from "pages/auth/SignIn";
import ProjectPage from "pages/project";

function App() {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((prevState) => {
        if (prevState === 100) {
          setLoading(false);
          return 0;
        }
        return Math.min(prevState + 15, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (loading) {
    return <Loading progress={progress} />;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={ProjectPage} />
        <Route exact path="/workspaces/add" component={CreateWorkspace} />
        <Route exact path="/:name/update/:id" component={UpdateWorkspace} />
        <Route exact path="/:name/delete/:id" component={DeleteWorkspace} />
        <Route
          exact
          path="/:workspace/create-project"
          component={CreateProject}
        />
        <Route path="/:workspace" component={WorkspaceTasks} />
      </Switch>
    </Router>
  );
}

export default App;
