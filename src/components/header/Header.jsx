import React from 'react'
import './header.css'
import { CTA } from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, Eu sou! </h5>
        <h1>Jonathan Galhardo</h1>
        <div className="text-light">Desenvolvedor Frontend</div>
        <CTA />
      </div>
    </header>
  )
}

export default Header
