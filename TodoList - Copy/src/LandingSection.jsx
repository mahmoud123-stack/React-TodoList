import React from 'react'
import LandingImg from "./assets/checklist (1).png"
export default function LandingSection() {
  return (
    <div className='LandingSection'>
      <div className='container'>
        <div>
          <div className='HeroText'>
            <h2>To Do List</h2>
            <h5>Use It to Organize Your Life &Starting Success</h5>
            <a href=""><h5>Organize Now</h5></a>
          </div>
          <div className='HeroImage'>
            <img src={LandingImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
