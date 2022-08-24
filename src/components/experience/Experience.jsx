import React from 'react'
import './experience.css'
import { FaReact } from "react-icons/fa"
import { AiOutlineHtml5 } from "react-icons/ai"
import { TbBrandCss3 } from "react-icons/tb"
import { TbBrandBootstrap } from "react-icons/tb"
import { DiJavascript1 } from "react-icons/di"

const Experience = () => {
  return (
    <section id='experience'>Experience
      <h5>Skills</h5>
      <h2>Tecnologias</h2>

      <div className='container experience__container'>
        <div className="experience_frontend">
          <h3>Desenvolvedor Frontend</h3>
          <div className='experience__content'>
            <article className='experiencie__details'>
              <AiOutlineHtml5 />
              <h4>HTML5</h4>
              <small className='text-light'>Avançado</small>
            </article>
            <article className='experiencie__details'>
              <TbBrandCss3 />
              <h4>CSS3</h4>
              <small className='text-light'>Avançado</small>
            </article>

            <article className='experiencie__details'>
              <TbBrandBootstrap />
              <h4>Bootstrap</h4>
              <small className='text-light'>Avançado</small>
            </article>

            <article className='experiencie__details'>
              <DiJavascript1 />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediário</small>
            </article>

            <article className='experiencie__details'>
              <FaReact />
              <h4>React</h4>
              <small className='text-light'>Básico</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience