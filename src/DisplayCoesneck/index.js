import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class DisplayCoesneck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leagues: []
    }
  }

//   componentDidMount = async () => {
//     const id = this.props.match.params.id
//     const findLeagueInfo = await fetch(`/api/leagues/${id}`)
//     const leagueInfo = await findLeagueInfo.json()
//     this.setState({
//         league: leagueInfo
//     })
// }

  componentDidMount = async () => {
    const allLeagues = await fetch('api/leagues', {
      method: 'GET',
    })

    const allLeaguesInfo = await allLeagues.json();
    console.log(allLeaguesInfo)
    this.setState({
      leagues: allLeaguesInfo
    })
  }

render() {
    return (
      <div className="leagues statsDiv">
        <h1>This is the league display page</h1>

        <div className="leagues-containers">

          {this.state.leagues.map(league => <Link className="each-league-name" to={'/PlayersFromTeams/' + league.id} key={league.id} ><p className="each-league-name" key={league.id} >{league.leagueName}</p></Link>)}
          
        </div> 
      </div>
    )
  }
}