import React from 'react'
import './services.css'
import { BsCheck2Circle } from "react-icons/bs";

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu faço</h5>
      <h2>Serviços</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Desenvolvimento Web Frontend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>ACESSIBILIDADE: uso correto das semânticas HTML.</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>RESPONSIVIDADE: facilidade na navegação em todos os navegadores e dispositivos.</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>PERFORMANCE: Código limpo e eficiente, velocidade, peso de página, tempo de carregamento total.</p>
            </li>
          </ul>

        </article>
      </div>





    </section>
  )
}

export default Services