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
                {/* <Link to="/"><img className="exit-button" src={"/images/button-exit.png"}/></Link> */}
                <div className="all-form-containers">
                    <h1>This is the league page</h1>
                    <p className="detail-info-label detail-name" ><span className="detail-info">{name}</span></p>
                    <p className="detail-info-label"><span>{age}</span></p>
                    <p className="detail-info-label">Players: <span className="detail-info">{playerPhoneNumber}</span></p>
                    {/* <p className="detail-info-label"><span>{pointsGame1}</span></p>
                    <p className="detail-info-label"><span>{pointsGame2}</span></p>
                    <p className="detail-info-label"><span>{pointsGame3}</span></p>
                    <p className="detail-info-label"><span>{pointsGame4}</span></p>
                    <p className="detail-info-label"><span>{pointsGame5}</span></p>
                    <p className="detail-info-label"><span>{pointsGame6}</span></p>
                    <p className="detail-info-label"><span>{pointsGame7}</span></p>
                    <p className="detail-info-label"><span>{pointsGame8}</span></p>
                    <p className="detail-info-label"><span>{pointsGame9}</span></p>
                    <p className="detail-info-label"><span>{pointsGame10}</span></p>
                    <p className="detail-info-label"><span>{pointsGame11}</span></p>
                    <p className="detail-info-label"><span>{pointsGame12}</span></p>
                    <p className="detail-info-label"><span>{playerEmergencyContact}</span></p>
                    <p className="detail-info-label"><span>{avgPPG}</span></p> */}
                    {this.state.players.map(player => <Link className="each-contact-name" to={'/editPlayerPage/' + player.id} key={player.id} ><p className="each-contact-name" key={player.id} >{player.name} Averging{player.avgPPG}</p></Link>)}
                    {this.state.teams.map(team => <Link className="each-contact-name" to={'/DetailTeamView/' + team.id} key={team.id} ><p className="each-contact-name" key={team.id} >{team.teamName}</p></Link>)}
                    <table id="stats">
                        <tr>
                            <td>
                                Falcons
                            </td>
                        </tr>
                        <tr>
                            <td>
                                John
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Jeb
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Eagles
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Rick
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Bob
                            </td>
                        </tr>
                        <tr>
                    <th> {this.state.teams.map(team => <Link className="each-contact-name" to={'/DetailTeamView/' + team.id} key={team.id} ><p className="each-contact-name" key={team.id} >{team.teamName}</p></Link>)}</th>
                            
                        </tr>
                        <tr>  {this.state.players.map(player => <Link className="each-contact-name" to={'/editPlayerPage/' + player.id} key={player.id} ><p className="each-contact-name" key={player.id} >{player.name} Averging{player.avgPPG}</p></Link>)} </tr>


                    </table>

                   
                    

                    <Link className="addcontact-button-container" to={'/AddPlayerPage/' + this.props.match.params.id}><img className="addcontact-button" src={"/images/addButton.png"}/></Link>

                    <div className="edit-button-container">
                        {/* <Link className="button" to={'/editcontact/' + this.props.match.params.id} ><button>Edit</button></Link> */}
                        {/* <button className="button"><Link className="link"to={'/editcontact/' + this.props.match.params.id} >Edit</Link></button> */}
                        {/* <button className="button" onClick={this.deleteContact} >Delete</button> */}
                    </div>
                </div>
            </div>
        )
    }
}
