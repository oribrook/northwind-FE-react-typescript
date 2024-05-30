import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import "./navbar.css"

type Props = {}

const NavBar = (props: Props) => {
    
    const location = useLocation()
  return (
      <div className='nav-main'>
          <div className='nav-company-name'>
              Northwind
          </div>
          <div className='nav-links'>                          
            <Link to="/login" className={location.pathname == '/login' ? 'nav-link active' : 'nav-link'}> Login </Link>
            <Link to="/register" className={location.pathname == '/register' ? 'nav-link active' : 'nav-link'}> Register </Link>
          </div>
    </div>
  )
}

export default NavBar