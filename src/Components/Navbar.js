import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <section className='nav-welcome'>
            Welcome to Loop
        </section>
        <section className='nav-started'>
            <Link to="/signup">
                <button>Get Started</button>
            </Link>
        </section>
    </div>
  )
}

export default Navbar