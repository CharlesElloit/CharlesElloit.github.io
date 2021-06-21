import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "pages/home/Home";
import CreateWorkspace from "components/workspace/CreateWorkspace";
import UpdateWorkspace from "components/workspace/UpdateWorkspace";
import DeleteWorkspace from "components/workspace/DeleteWorkspace";

function App() {
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
