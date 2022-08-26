import React from 'react'
import './footer.css'
import { SiGmail } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

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

      <div className='footer__socials'>
        <a href="mailto:galhardoj@gmail.com"><SiGmail /></a>
        <a href="https://api.whatsapp.com/send?phone=5555984389850&text=Ol%C3%A1!"><SiWhatsapp /></a>
        <a href="https://www.linkedin.com/in/jonathangalhardo/"><GrLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jonathan Galhardo. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer