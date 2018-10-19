import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from "../Login";
// import EditPage from "../EditPage";
import DisplayCoesneck from "../DisplayCoesneck";
import PlayersFromTeams from "../PlayersFromTeams";
import DetailPlayerView from "../DetailPlayerView";
import EditPlayerPage from "../EditPlayerPage"
import AddPlayerPage from "../AddPlayerPage"









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
        <Route
              path="/login"
              render={(props) => <Login {...props} emailValid={this.state.emailValid} passwordValid={this.state.passwordValid} userEmail={this.state.userEmail} password={this.state.password} onLogIn={this.onLogIn} onInputChange={this.onInputChange} />}
            />
        {/* <Route path="/editpage" exact component={EditPage} /> */}
        <Route path="/DisplayCoesneck" exact component={DisplayCoesneck} />
        <Route path="/PlayersFromTeams/:id" exact component={PlayersFromTeams} />
        <Route path="/DetailPlayerView/:id" exact component={DetailPlayerView} />
        <Route path="/EditPlayerPage/:id" exact component={EditPlayerPage} />
        <Route path="/AddPlayerPage/:id" exact component={AddPlayerPage} />







        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="UQR66D2AAAZF2" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <Link to="/login">Login</Link>
        <Link to="/DisplayCoesneck">Coesneck</Link>
        <Link to="/PlayersFromTeams">PlayerrrrrrrPageeee</Link>

        </section>
      </div>
      </Router>
    )
  }
}

export default App;
