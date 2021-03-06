import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class AddPlayerPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      age: "",
      playerPhoneNumber: "",
      playerEmergencyContact: "",
      pointsGame1: "",
      pointsGame2: "",
      pointsGame3: "",
      pointsGame4: "",
      pointsGame5: "",
      pointsGame6: "",
      pointsGame7: "",
      pointsGame8: "",
      pointsGame9: "",
      pointsGame10: "",
      pointsGame11: "",
      pointsGame12: "",
      avgPPG: "",
      teamId: "",
      submittedAddPlayer: false
    }
  }


  onInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  addThisPlayer = async () => {
    const body = JSON.stringify({
      name: this.state.name,
      age: this.state.age,
      playerPhoneNumber: this.state.playerPhoneNumber,
      playerEmergencyContact: this.state.playerEmergencyContact,
      pointsGame1: this.state.pointsGame1,
      pointsGame2: this.state.pointsGame2,
      pointsGame3: this.state.pointsGame3,
      pointsGame4: this.state.pointsGame4,
      pointsGame5: this.state.pointsGame5,
      pointsGame6: this.state.pointsGame6,
      pointsGame7: this.state.pointsGame7,
      pointsGame8: this.state.pointsGame8,
      pointsGame9: this.state.pointsGame9,
      pointsGame10: this.state.pointsGame10,
      pointsGame11: this.state.pointsGame11,
      pointsGame12: this.state.pointsGame12,
      avgPPG: this.state.avgPPG,
      teamId: this.state.teamId
    });



    const checkUserResponse = await fetch('/api/players', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json',
        // 'jwt-token': localStorage.getItem('user-jwt')
      }
    });

    const checkUserBody = await checkUserResponse.json();

    this.setState({
      submittedAddPlayer: true
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    if (this.state.submittedAddPlayer) {
      return (
        <Redirect to={'/PlayersFromTeams/' + this.props.match.params.id} />
      )
    }
    return (
      <div className="inputForm-container">
        <Link to="/"><img className="exit-button" src={"/images/button-exit.png"} /></Link>
        <form className="form-addContact all-form-containers" onSubmit={this.onSubmit}>
          <label htmlFor="input-name" className="add-label add-name-label">Name</label>
          <input id="input-name" className="add-input name" type="text" name="name" value={this.state.name} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-ContactInfo" className="add-label add-contactInfo-label">Age</label>
          <input id="input-age" className="add-input inputAge" type="text" name="age" value={this.state.age} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Players Phone Number</label>
          <input id="input-playerPhoneNumber" className="add-input inputplayerPhoneNumber" type="text" name="playerPhoneNumber" value={this.state.playerPhoneNumber} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Emergency Contact</label>
          <input id="input-playerEmergencyContact" className="add-input inputplayerEmergencyContact" type="text" name="playerEmergencyContact" value={this.state.playerEmergencyContact} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 1 Points</label>
          <input id="input-pointsGame1" className="add-input inputpointsGame1" type="text" name="pointsGame1" value={this.state.pointsGame1} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 2 Points</label>
          <input id="input-pointsGame2" className="add-input inputpointsGame2" type="text" name="pointsGame2" value={this.state.pointsGame2} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 3 Points</label>
          <input id="input-pointsGame3" className="add-input inputpointsGame3" type="text" name="pointsGame3" value={this.state.pointsGame3} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 4 Points</label>
          <input id="input-pointsGame4" className="add-input inputpointsGame4" type="text" name="pointsGame4" value={this.state.pointsGame4} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 5 Points</label>
          <input id="input-pointsGame5" className="add-input inputpointsGame5" type="text" name="pointsGame5" value={this.state.pointsGame5} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 6 Points</label>
          <input id="input-pointsGame6" className="add-input inputpointsGame6" type="text" name="pointsGame6" value={this.state.pointsGame6} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 7 Points</label>
          <input id="input-pointsGame7" className="add-input inputpointsGame7" type="text" name="pointsGame7" value={this.state.pointsGame7} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 8 Points</label>
          <input id="input-pointsGame8" className="add-input inputpointsGame8" type="text" name="pointsGame8" value={this.state.pointsGame8} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 9 Points</label>
          <input id="input-pointsGame9" className="add-input inputpointsGame9" type="text" name="pointsGame9" value={this.state.pointsGame9} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 10 Points</label>
          <input id="input-pointsGame10" className="add-input inputpointsGame10" type="text" name="pointsGame10" value={this.state.pointsGame10} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 11 Points</label>
          <input id="input-pointsGame11" className="add-input inputpointsGame11" type="text" name="pointsGame11" value={this.state.pointsGame11} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Game 12 Points</label>
          <input id="input-pointsGame12" className="add-input inputpointsGame12" type="text" name="pointsGame12" value={this.state.pointsGame12} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Average PPG</label>
          <input id="input-avgPPG" className="add-input inputavgPPG" type="text" name="avgPPG" value={this.state.avgPPG} onChange={this.onInputChange} />
          <br></br>
          <label htmlFor="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Team</label>
          <input id="input-avgPPG" className="add-input inputavgPPG" placeholder={this.state.teamId} type="text" name="teamId" value={this.state.teamId} onChange={this.onInputChange} />
          <br></br>

          <button className="add-contact" onClick={this.addThisPlayer}>Add Player</button>
        </form>
      </div>
    )
  }
}