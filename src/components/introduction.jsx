import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
import image2 from './img/image2.jpg'
import image4 from './img/image4.jpg'
import image5 from './img/image5.jpg'
import image6 from './img/image6.jpg'
import image7 from './img/image7.jpg'
import image8 from './img/image8.jpg'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
          <BackgroundSlideshow  images={[ image2 , image4,image5, image6, image7 , image8]} />
            <ul className="slides">
              <li >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc"style={{color:"#06224A"}}>
                          <h1 style={{backgroundColor:"white",fontSize:"40px"}} >Hi! <br />I'm Cassandra Dacha
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1kdQfMdafwsYL_Ba8bFr1bHaSXq2L4xfV/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p></h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{backgroundColor:"white", fontSize:"40px"}}>Coding is my Cardio :)
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/CassandraDacha" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p></h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                      <div className="desc"style={{color:"#06224A"}}>
                          <h1 style={{backgroundColor:"white",fontSize:"40px"}} >Welcome to my world:)</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
