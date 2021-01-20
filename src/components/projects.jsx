import React, { Component } from 'react'
import image10 from './img/image10.jpg'
import image11 from './img/image11.jpg'
import image12 from './img/image12.jpg'
import image13 from './img/image13.jpg'
export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I've Done</span>
                <h2 className="colorlib-heading">Here are some of the recent projects I've worked on</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1"style={{backgroundColor:"white"}}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc" >
                    <h3>Patient ward Automation System </h3>
					<a href="https://github.com/CassandraDacha/Automation" target="_blank" rel="noopener noreferrer"><img style={{width:"50%", height:"auto"}}src={image13} alt="Logo" /></a>
                </div>
                </div>
            </div>
			<div className="col-md-4 text-center animate-box">
                <div className="services color-1"style={{backgroundColor:"white"}}>
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Shopping Cart Application</h3>
					<a href="https://shoppingcartsite0.000webhostapp.com/" target="_blank" rel="noopener noreferrer"><img style={{width:"50%", height:"auto"}}src={image11} alt="Logo" /></a>
                </div>
                </div>
            </div>
			<div className="col-md-4 text-center animate-box">
                <div className="services color-1"style={{backgroundColor:"white"}}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc" >
                    <h3>Property listing web application </h3>
					<a href="http://property24clone.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img style={{width:"50%", height:"auto"}}src={image10} alt="Logo" /></a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
