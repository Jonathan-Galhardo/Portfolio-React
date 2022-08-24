import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { MdWorkOutline } from "react-icons/md"
import { MdOutlineMiscellaneousServices } from "react-icons/md"
import { MdOutlineContactPhone } from "react-icons/md"

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome /></a>
      <a href="#about"><BiUser /></a>
      <a href="#experience"><MdWorkOutline /></a>
      <a href="#services"><MdOutlineMiscellaneousServices /></a>
      <a href="#contact"><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav