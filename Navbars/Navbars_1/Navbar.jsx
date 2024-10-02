import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [isActive,setIsActive]=useState(false)

const toggleEvent=()=>{
  setIsActive(!isActive)
}


  return (
    <>
    <div className={`navbar   ${isActive ? "active":""}`} >

        <div className="logo">
            <span>Logo</span>
        </div>

       

         
         <div className={`nav   ${isActive? "active":""}`} >
            
            <ul className={`nav__menu  ${isActive? "active":""}`}>
                <li >Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Contact</li>
            </ul>
         </div>


         <div className={`hamburger   ${isActive? "active":""}`}     onClick={toggleEvent}>
          <span className="bar active"></span>
          <span className="bar active "></span>
          <span className="bar active"></span>
         </div>

      

         


    </div>
       
      
    </>
  )
}

export default Navbar
