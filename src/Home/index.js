import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }



  render() {
    return (
      <div>
        <div className="home-container">
          <div className="hs-boys-pic-container"><img className="hs-boys-pic" src="/images/hs-boys.png" /></div>
          <section className="main-content">
            <div className="main1">
              <h2 className="quotes-header" >""</h2>
              <p className="quotes-paragraphs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="main2">
              <h2 className="quotes-header" >""</h2>
              <p className="quotes-paragraphs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="main3">
              <h2 className="quotes-header" >""</h2>
              <p className="quotes-paragraphs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </section>
        </div>
            <h1 className="gallery-header">Gallery</h1>
          <section className="gallery-section">
            <div className="gallery-pic-container">
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic1.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic2.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic3.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic4.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic5.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic6.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic7.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic8.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic9.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic10.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic11.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic12.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic13.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic14.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic15.jpg" />
            </div>
            <div className="individual-pic-container">
              <img className="individual-pic" src="/images/pic16.jpg" />
            </div>


            </div>

          </section>
      </div>
    )
  }
}
