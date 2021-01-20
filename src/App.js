import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages'
// import About from './pages/about.js'
// import Projects from './pages/projects.js'
// import Resume from './pages/resume.js'
// import Contact from './pages/contact.js'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
