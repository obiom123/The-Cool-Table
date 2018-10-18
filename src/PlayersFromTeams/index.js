import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class PlayersFromTeams extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: [],
            deletePlayer: false
        }
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const findPlayersInfo = await fetch(`/api/players?teamid[]=${id}`, {
            method: 'GET',
          })
        // console.log(findPlayersInfo)
        const playersInfo = await findPlayersInfo.json()
        console.log(playersInfo)
        this.setState({
            players: playersInfo
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


      
        if (this.state.deletePlayer) {
            return (
              <Redirect to="/" />
            )
          }
        return (
            <div>
                <Link to="/"><img className="exit-button" src={"/images/button-exit.png"}/></Link>
                <div className="all-form-containers">
                    <h1>This is the Player pageeeeeee</h1>
                    <p className="detail-info-label detail-name" ><span className="detail-info">{name}</span></p>
                    <p className="detail-info-label"><span>{age}</span></p>
                    <p className="detail-info-label">WE MET AT: <span className="detail-info">{playerPhoneNumber}</span></p>
                    <p className="detail-info-label"><span>{pointsGame1}</span></p>
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
                    <p className="detail-info-label"><span>{avgPPG}</span></p>
                    {this.state.players.map(player => <Link className="each-contact-name" to={'/players/' + player.id} key={player.id} ><p className="each-contact-name" key={player.id} >{player.name} Avg PPG {player.avgPPG}</p></Link>)}


                   
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
