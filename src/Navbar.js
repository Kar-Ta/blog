import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';


const Navbar = () => {
  return (
    <nav>
            <div className='mbar'>
                <li> HOME </li>
                <ul className='bar'>
                    <li> BLOGS & POSTS </li>
                    <li> SIGN IN</li>
                    <li className='uIcon' > <AiOutlineUser /> </li>
                </ul>
            </div>
    </nav>
  )
}

export default Navbar