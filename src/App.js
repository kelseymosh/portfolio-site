import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'
import About from './pages/about.js'
import Projects from './pages/projects.js'
import Resume from './pages/resume.js'
import Contact from './pages/contact.js'

function App() {
  return (
    <Router>
      <Home/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
