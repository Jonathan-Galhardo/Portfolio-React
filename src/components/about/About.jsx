import React from 'react'
import './about.css'
import ME from "../../assets/about_me.png"
import { FaAward } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id='about'>
      <h5>Bio</h5>
      <h2>Sobre Mim</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <img src={ME} alt="" />
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>6+ meses</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>30+</small>
            </article>
          </div>

          <p>
            Sou um entusiasta da tecnologia, acredito que ela seja para todas as pessoas e para todos os negócios. Busco resolver os problemas no meu caminho com calma, organização e uma dose grande de criatividade!
          </p>

          <a href="#contact" className='btn btn-primary'>Contato</a>

        </div>
      </div>
    </section>
  )
}

export default about