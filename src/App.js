import "./App.css";
import ContactMe from "./Components/ContactMe/ContactMe";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Blogs from "./Components/Blogs/Blogs";
import CV from "./Components/CV/CV.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
        <Route path="/cv">
          <CV />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
