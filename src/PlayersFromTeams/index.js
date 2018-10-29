import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class PlayersFromTeams extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: [],
            teams: [],
            deletePlayer: false
        }
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const findPlayersInfo = await fetch(`/api/players?teamid[]=${id}`, {
            method: 'GET',
          })
        const playersInfo = await findPlayersInfo.json()
        console.log(playersInfo)
        this.setState({
            players: playersInfo
        })

        const findTeamsInfo = await fetch(`/api/teams?leagueid[]=${id}`, {
            method: 'GET',
          })
        const teamsInfo = await findTeamsInfo.json()
        console.log(teamsInfo)
        this.setState({
            teams: teamsInfo
        })
    } 


    deletePlayers = async () => {
        const id = this.props.match.params.id
        const deleteplayersInfo = await fetch(`/api/players/${id}`, {
            method: 'DELETE',
        });
        this.setState({
            deletePlayers: true
        })
    }

    render() {
        const { name, age, playerPhoneNumber, playerEmergencyContact, pointsGame1, pointsGame2, pointsGame3, pointsGame4, pointsGame5, pointsGame6, pointsGame7, pointsGame8, pointsGame9, pointsGame10, pointsGame11, pointsGame12, avgPPG  } = this.state.players
        const { teamName, coachName, coachPhoneNumber, coachEmail, teamColor, amountOwed } = this.state.teams



      
        if (this.state.deletePlayer) {
            return (
              <Redirect to="/" />
            )
          }
        return (
            <div className="statsDiv">
                    <h1>Players Averages</h1>

                    {this.state.players.map(player => <Link className="each-contact-name" to={'/editPlayerPage/' + player.id} key={player.id} ><p className="each-contact-name" key={player.id} >{player.name} Averging {player.avgPPG}PPG</p></Link>)}
                
                    <Link className="addplayer-button-container" to={'/AddPlayerPage/' + this.props.match.params.id}><img className="addcontact-button" src={"/images/addButton.png"}/></Link>

                

            </div>
        )
    }
}
