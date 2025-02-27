import React from 'react'

export default function () {
  return (
    <div className='Header'>
      <div className='container'>
        <div className='Content'>
          <div className='logo'>
            <img src="./src/assets/tasks.png" alt="" />
            <h2>Tasks</h2>
          </div>
          <ul className='Links'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Your Tasks</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
