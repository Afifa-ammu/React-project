import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars ,FaTimes } from "react-icons/fa";



function Navbar() {
const [ icon, setIcon] =useState(false)
const handleClick =()=>{

    setIcon (!icon)
}
    const closeSideDrawer =() =>{
        setIcon(false)
    }

    return (
        <>
        <nav className='navbar'>
            <Link to ='/' className='nav-logo' onClick={closeSideDrawer}>LOGO</Link>
            <div className='menu-icon' onClick={handleClick}>
                {
                    icon ? <FaTimes className='fa-times'></FaTimes> :<FaBars className='fa-bars'></FaBars>
                }
            </div>
            
                <ul className={
                    icon ? 'nav-menu active' : 'nav-menu'
                }>
                    <li>
                 <Link to ='./' className='nav-links' onClick={closeSideDrawer}>Home</Link>
                 </li>
                
                <li>
                 <Link to ='./about' className='nav-links' onClick={closeSideDrawer}>About</Link>
                </li>
                <li>
                 <Link to ='./product' className='nav-links' onClick={closeSideDrawer}>Product</Link>
                </li>
                <li>
                 <Link to ='./service' className='nav-links' onClick={closeSideDrawer}>Service</Link>
                </li>
                <li>
                 <Link to ='./contact' className='nav-links' onClick={closeSideDrawer}>Contact</Link>
                </li>
                </ul>
            </nav>
            
            </>
        
    )
}

export default Navbar



