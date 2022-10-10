import React from 'react'
import './header.css'
import { CTA } from "./CTA";
import ME from '../../assets/me.webp'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <section className="container header__container">
        <h5>Olá, Eu sou! </h5>
        <h1>Jonathan Galhardo</h1>
        <div className="text-light">Desenvolvedor Frontend</div>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </section>
    </header>
  )
}

export default Header
