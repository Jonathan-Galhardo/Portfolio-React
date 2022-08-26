import React from 'react'
import './contact.css'
import { FiMail } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contato</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <FiMail />
            <h4>Email</h4>
            <h5>galhardoj@gmail.com</h5>
            <a className='btn btn-primary' href="mailto:galhardoj@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp />
            <h4>Whatsapp</h4>
            <h5>(55)9.8438-9850</h5>
            <a className='btn btn-primary' href="https://api.whatsapp.com/send?phone=5555984389850&text=Ol%C3%A1!">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin />
            <h4>LinkedIn</h4>
            <h5>Jonathan Galhardo</h5>
            <a className='btn btn-primary' href="https://www.linkedin.com/in/jonathangalhardo/">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Digite seu nome' required />
          <input type="email" name='email' placeholder='Digite seu email' required />
          <textarea name='message' rows='7' placeholder='Digite sua mensagem' required />
          <button type='submit' className='btn btn-primary'>Enviar</button>

        </form>
      </div>
    </section>
  )
}

export default Contact