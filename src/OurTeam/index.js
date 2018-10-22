import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class OurTeam extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }



  render() {
    return (
      <div>
        <div className="entire-staff-container">
          <section className="section-staff-container fred-section">
            <div className="staff-text-container">
              <p className="each-staff-header oddColor">Fred Lopez </p>
              <p className="each-staff-description oddColor">Program Director</p>
            </div>
            <div className="staff-pic-container">
              <img className="individual-staff-pic fred1" src="/images/fredPic.jpeg" />
            </div>
          </section>

          <section className="section-staff-container obi-section">
            <div className="staff-text-container">
              <p className="each-staff-header evenColor">Obi Onuora </p>
              <p className="each-staff-description evenColor">Software Engineer</p>
            </div>
            <div className="staff-pic-container">
              <img className="individual-staff-pic obi1" src="/images/obiPic.png" />
            </div>
          </section>

          <section className="section-staff-container mike-section">
            <div className="staff-text-container">
              <p className="each-staff-header oddColor">Mike Woods </p>
              <p className="each-staff-description oddColor">Public School Teacher</p>
            </div>
            <div className="staff-pic-container">
              <img className="individual-staff-pic mike1" src="/images/mikePic.jpeg" />
            </div>
          </section>

          <section className="section-staff-container ant-section">
            <div className="staff-text-container">
              <p className="each-staff-header evenColor">Anthony Lee </p>
              <p className="each-staff-description evenColor">Entrepreneur</p>
            </div>
            <div className="staff-pic-container">
              <img className="individual-staff-pic ant1" src="/images/antPic.png" />
            </div>
          </section>

          <section className="section-staff-container gabe-section">
            <div className="staff-text-container">
              <p className="each-staff-header oddColor">Gabriel Pena </p>
              <p className="each-staff-description oddColor">Special Education Teacher</p>
            </div>
            <div className="staff-pic-container">
              <img className="individual-staff-pic gabe1" src="/images/gabePic.jpg" />
            </div>
          </section>

          <section className="section-staff-container rief-section">
            <div className="staff-text-container">
              <p className="each-staff-header evenColor">Sharief Warfield </p>
              <p className="each-staff-description evenColor">Social Worker</p>
            </div>
            <div className="staff-pic-container">
              <img className="individual-staff-pic rief1" src="/images/riefPic.jpeg" />
            </div>
          </section>

    
        </div>


      </div>
    )
  }
}