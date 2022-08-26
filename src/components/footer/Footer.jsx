import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jonathan Galhardo</a>


      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Bio</a></li>
        <li><a href='#experience'>Tecnologias</a></li>
        <li><a href='#services'>Serviços</a></li>
        <li><a href='#portfolio'>Portfólio</a></li>
        <li><a href='#testimonials'>Depoimentos</a></li>
        <li><a href='#contact'>Contatos</a></li>

      </ul>
    </footer>
  )
}

export default Footer