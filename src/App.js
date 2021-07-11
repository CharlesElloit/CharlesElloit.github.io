import React from "react";
import Home from "pages/home/Home";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loading from "components/loading/Loading";
import CreateWorkspace from "components/workspace/CreateWorkspace";
import UpdateWorkspace from "components/workspace/UpdateWorkspace";
import DeleteWorkspace from "components/workspace/DeleteWorkspace";

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

  if (loading) {
    return <Loading progress={progress} />
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/workspaces/add" component={CreateWorkspace} />
        <Route exact path="/:name/update/:id" component={UpdateWorkspace} />
        <Route exact path="/:name/delete/:id" component={DeleteWorkspace} />
      </Switch>
    </Router>
  );
}

export default App;
