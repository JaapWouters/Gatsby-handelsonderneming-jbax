import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <h1>Handelsonderneming J. Bax</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/overmij'>Over mij</Link>
        <Link to='/aanbod'>Aanbod</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}
