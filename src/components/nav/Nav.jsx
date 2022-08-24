import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { MdWorkOutline } from "react-icons/md"
import { MdOutlineMiscellaneousServices } from "react-icons/md"
import { MdOutlineContactPhone } from "react-icons/md"
import { useState } from "react"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav