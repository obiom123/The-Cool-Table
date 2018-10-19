import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class DetailedTeamPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: {},
            deleteTeam: false
        }
    }

    componentDidMount = async () => {
        console.log('component did mount')
        const id = this.props.match.params.id
        const findTeamsInfo = await fetch(`/api/teams/${id}`)
        const teamsInfo = await findTeamsInfo.json()
        console.log(`this is what you need ${teamsInfo}`)
        this.setState({
            team: teamsInfo
        })
    }


    deletePlayers = async () => {
        const id = this.props.match.params.id
        const deleteteamsInfo = await fetch(`/api/teams/${id}`, {
            method: 'DELETE',
        })
        this.setState({
            deleteTeam: true
        })
    }

    render() {
        const { teamName, coachName, coachPhoneNumber, coachEmail, teamColor, amountOwed } = this.state.teams
        console.log(this.state.team)

        if (this.state.deleteTeam) {
            return (
                <Redirect to={`/DisplayCoesneck`} />
            )
        }
        return (
            <div>
                <Link to="/"><img className="exit-button" src={"/images/button-exit.png"} /></Link>
                <div className="all-form-containers">
                    <h1>This is the Player pageeeeeee</h1>
                    <p className="detail-info-label detail-name" ><span className="detail-info">{teamName}</span></p>
                    <p className="detail-info-label"><span>{coachName}</span></p>
                    <p className="detail-info-label">WE MET AT: <span className="detail-info">{coachPhoneNumber}</span></p>
                    <p className="detail-info-label"><span>{coachEmail}</span></p>
                    <p className="detail-info-label"><span>{teamColor}</span></p>
                    <p className="detail-info-label"><span>{amountOwed}</span></p>
                    
                    {/* {this.state.players.map(player => <Link className="each-contact-name" to={'/detailcontact/' + player.id} key={player.id} ><p className="each-contact-name" key={player.id} >{player.name} Avg PPG {player.avgPPG}</p></Link>)} */}



                    <div className="edit-button-container">
                        {/* <Link className="button" to={'/editcontact/' + this.props.match.params.id} ><button>Edit</button></Link> */}
                        {/* <button className="button"><Link className="link" to={'/editPlayerPage/' + this.props.match.params.id} >Edit</Link></button> */}
                        {/* <button className="button" onClick={this.deletePlayers} >Delete</button> */}
                    </div>
                </div>
            </div>
        )
    }
}