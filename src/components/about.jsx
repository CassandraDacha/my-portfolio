import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a final year student pursuing a degree in Electrical and Computer Engineering at the University of Capetown. I love coding, its among the things that make me feel unique, it's among the few ways I believe can change the world </p>
                    <p>My dream is to one day become a software engineer.My current tech interests are:- IoT specifically Automation, Web Development, Data Science and Cloud Computing. I am passionate about leadership, women empowerment and philanthropy. </p>
                    <h3>My Specialities are :-</h3>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>ReactJS</li>
                        <li>Javascript</li>
                    </ul>  

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1"style={{backgroundColor:"#23374D"}}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience in building websites and web applications using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3"style={{backgroundColor:"#23374D"}}>
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I have good grasp of the fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5"style={{backgroundColor:"#23374D"}}>
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Object Oriented Programming</h3>
                    <p>I have a good understanding of the core fundamentals of Java Programming i.e Abstraction and Encapsulation, Inheritance and Polymorphism</p>
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
