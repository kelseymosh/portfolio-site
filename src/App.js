import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './pages/navigation.js'
import Home from './pages/home.js'
import About from './pages/about.js'
import Projects from './pages/projects.js'
import Resume from './pages/resume.js'
import Contact from './pages/contact.js'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
