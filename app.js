import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Company Website</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>Company Name</p>
      <input type="text" placeholder="Enter your name" className="textbox" />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <p>Contact information goes here</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="page-content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;
