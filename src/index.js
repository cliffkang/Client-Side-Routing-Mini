import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./index.css";
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';

function About() {
  return (
    <div>
      <h1>About Component</h1>
      <p id="paragraph">This is the About Component</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <p id="paragraph">This is the Home Component</p>
    </div>
  );
}

function Movies() {
  return (
    <div>
      <h1>Movies Component</h1>
      <p id="paragraph">This is the Movies Component</p>
    </div>
  );
}

function Music() {
  return (
    <div>
      <h1>Music Component</h1>
      <p id="paragraph">This is the Music Component</p>
    </div>
  );
}

function Products(props) {
  return (
    <div>
      <li>
        <NavLink to="/products/movies" activeClassName="navlink--active">
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/products/music" activeClassName="navlink--active">
          Music
        </NavLink>
      </li>
        <Route path="/products/movies" component={Movies} />
        <Route path="/products/music" component={Music} />
    </div>
  );
}

function Greeter(props) {
  return (
    <div>
      <h3>Hello {props.match.params.first} {props.match.params.last}</h3>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="navlink--active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="navlink--active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="navlink--active">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/greet" activeClassName="navlink--active">
            Greeter
          </NavLink>
        </li>
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/greet/:first/:last" component={Greeter} />
    </div>
  </Router>,
  document.getElementById("root")
);

// registerServiceWorker();
// http://localhost:3000/
