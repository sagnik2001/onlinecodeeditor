import WebEditor from './Components/WebEditor.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/web" component={WebEditor} />
    
    </Switch>
  </Router>
    </>
  );
}

export default App;
