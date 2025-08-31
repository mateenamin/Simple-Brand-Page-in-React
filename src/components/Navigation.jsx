import React from 'react'

const Navigation = () => {
  return (
    <>
      <nav className='container'>
      <div >
        <img className="logo" src="/images/brand-logo-img.png" alt="logo" />
      </div>
     
        <ul className='nav-bar'>
          <li>Menu</li>
           <li>Home</li>
            <li>About</li>
             <li>Contact Us</li>
        </ul>
     
      <button>login</button>
     </nav>
    </>
  )
}

export default Navigation
