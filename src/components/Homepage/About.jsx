import React from 'react'
import about from '../../images/about.png'


function About() {
  return (
    <div className='home-about-us-container'>



    <div style={{ backgroundImage: `url(${about})` }} className='home-about-us-img'></div>

    <div className='about-us-text-cont'>
        <div className='about-us-text'>
        Fabrique François is opgericht door twee zussen.
        Onze collectie bestaat uit eigen geselecteerde stuks waar we zelf blij van worden. We willen betaalbare mode aanbieden voor dames die kiezen voor net dat tikkeltje 'extra'.
        </div>

        <button className='btn btn-green'>About us</button>

    </div>

  </div>
  )
}

export default About