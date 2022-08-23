import React from 'react'
import { IconName } from "react-icons/vsc"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsWhatsapp } from 'react-icons/bs'

const headerSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jonathangalhardo/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Jonathan-Galhardo" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://api.whatsapp.com/send?phone=5555984389850&text=Ol%C3%A1!" target="_blank" rel="noreferrer"><BsWhatsapp /></a>

    </div>
  )
}

export default headerSocial



