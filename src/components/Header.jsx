import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-[9999] py-5 bg-black-50 text-white-50'>
        <div className="container">
            <div className="text-4xl font-tungsten-bold">
                <Link to="/" className='block'>Valo Agents</Link>
            </div>
        </div>
    </header>
  )
}

export default Header
