import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from "../Login";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App page-container">
      <nav className="nav-container">
        <div className="tctLogo-container">
          <img className="tctLogo" src="/images/coolTableLogo.png"></img>
        </div>
          <ul className="links-container">
            <li className="nav-list-items">Home<a className="nav-link-items" href="#"></a></li>
            <li className="nav-list-items">About Us<a className="nav-link-items" href="#"></a></li>
            <li className="nav-list-items">Events<a className="nav-link-items" href="#"></a></li>
            <li className="nav-list-items">Leagues<a className="nav-link-items" href="#"></a></li>
            <li className="nav-list-items">Donate<a className="nav-link-items" href="#"></a></li>
            <li className="nav-list-items"><Link to="/login">Login</Link></li>

          </ul>
        </nav>
        <section>
        <main>

        </main>
        <footer>

        </footer>
        <Route path="/login" exact component={Login} />

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="UQR66D2AAAZF2" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <Link to="/login">Login</Link>
        </section>
      </div>
      </Router>
    )
  }
}

export default App;
