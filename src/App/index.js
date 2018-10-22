import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from "../Login";
// import EditPage from "../EditPage";
import DisplayCoesneck from "../DisplayCoesneck";
import PlayersFromTeams from "../PlayersFromTeams";
import DetailPlayerView from "../DetailPlayerView";
import DetailedTeamPage from "../DetailedTeamPage";
import EditPlayerPage from "../EditPlayerPage"
import AddPlayerPage from "../AddPlayerPage"
import PrivateRoute from "../PrivateRoute";
import Home from "../Home";
import About from "../About";










import "./style.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userEmail: "",
      password: "",
      emailValid: true,
      passwordValid: true,
    }
  }

  onInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/;
    // (?=.{6,32}$)

    const validateEmail = emailRegex.test(String(this.state.userEmail).toLowerCase());
    const validatePassword = passwordRegex.test(String(this.state.password));

    this.setState({
      emailValid: validateEmail,
      passwordValid: validatePassword,
    })
  }

  logout = () => {
    localStorage.clear();
  }
  render() {
    return (
      <Router>
        <div className="App page-container">
          <link href="https://fonts.googleapis.com/css?family=Charmonman" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Yantramanav" rel="stylesheet"></link>
          <nav className="nav-container top-bar">
            <img className="tctLogo logo" src="/images/coolTableLogo.png"></img>
            <ul className="links-container">

              <Link to="/Home" className="each-item-container"><li className="nav-list-items"><a className="link-items" href="#">Home</a></li></Link>
              <Link to="/About" className="each-item-container"><li className="nav-list-items"><a className="link-items" href="#">About</a></li></Link>
              <div className="each-item-container"><li className="nav-list-items"><a className="link-items" href="#">Our Team</a></li></div>
              <div className="each-item-container"><li className="nav-list-items"><a className="link-items" href="#">Donate</a></li></div>
              <Link to="/DisplayCoesneck" className="each-item-container"><li className="nav-list-items"><a className="link-items" href="#">Coesneck-Classic</a></li></Link>

            </ul>
          </nav>
          <div className="banner">
            <div className="banner-text">
              <div className="banner-text-items">
                {/* <h2 className="text-header-banner">Welcome To The Cool Table</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
              </div>
            </div>
          </div>

          <Route
            path="/login"
            render={(props) => <Login {...props} emailValid={this.state.emailValid} passwordValid={this.state.passwordValid} userEmail={this.state.userEmail} password={this.state.password} onLogIn={this.onLogIn} onInputChange={this.onInputChange} />}
          />
          {/* <Route path="/editpage" exact component={EditPage} /> */}
          <PrivateRoute path="/DisplayCoesneck" exact component={DisplayCoesneck} />
          <PrivateRoute path="/PlayersFromTeams/:id" exact component={PlayersFromTeams} />
          <PrivateRoute path="/DetailPlayerView/:id" exact component={DetailPlayerView} />
          <PrivateRoute path="/DetailedTeamPage/:id" exact component={DetailedTeamPage} />
          <PrivateRoute path="/EditPlayerPage/:id" exact component={EditPlayerPage} />
          <PrivateRoute path="/AddPlayerPage/:id" exact component={AddPlayerPage} />
          <Route path="/Home" exact component={Home} />
          <Route path="/About" exact component={About} />








          {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="UQR66D2AAAZF2" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          <Link to="/DisplayCoesneck">Coesneck</Link>
          <Link to="/PlayersFromTeams">PlayerrrrrrrPageeee</Link> */}
          <footer>

            <div className="inside-footer-container">
            <form className="footer-form-container" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="UQR66D2AAAZF2" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
             

              <div className="individual-logo-container middle-logo-container">
                <img className="logo-footer cnc-logo" src="/images/cnc-logo.png" />
          <Link className="login-footer" to="/login">Login</Link>
              </div>
              <a className="individual-logo-container insta-container" href="https://www.instagram.com/coesneckclassic/"> 
                <img className="logo-footer insta-logo" src="/images/insta-logo.png" />
              </a>
            </div>
          </footer>

          <Link to="/login" onClick={this.logout} >Logout</Link>

        </div>
      </Router>
    )
  }
}

export default App;
