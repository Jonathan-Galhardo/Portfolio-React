import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/section_depoiments.png"
import IMG2 from "../../assets/calc_gorjeta.png"
import IMG3 from "../../assets/clt_pj.png"
import IMG4 from "../../assets/calc.png"
import IMG5 from "../../assets/valhalla.png"
import IMG6 from "../../assets/orcamento_pessoal.jpg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Trabalhos recentes</h5>
      <h2>Portfólio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>Tile</h3>
          <a href="#" className='btn' target='_blank'>GitHub</a>
          <a href="#" className='btn btn-primary' target='_blank'>Deploy</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Tile</h3>
          <a href="#" className='btn' target='_blank'>GitHub</a>
          <a href="#" className='btn btn-primary' target='_blank'>Deploy</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Tile</h3>
          <a href="#" className='btn' target='_blank'>GitHub</a>
          <a href="#" className='btn btn-primary' target='_blank'>Deploy</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Tile</h3>
          <a href="#" className='btn' target='_blank'>GitHub</a>
          <a href="#" className='btn btn-primary' target='_blank'>Deploy</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Tile</h3>
          <a href="#" className='btn' target='_blank'>GitHub</a>
          <a href="#" className='btn btn-primary' target='_blank'>Deploy</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Tile</h3>
          <a href="#" className='btn' target='_blank'>GitHub</a>
          <a href="#" className='btn btn-primary' target='_blank'>Deploy</a>
        </article>

      </div>

    </section>
  )
}

export default Portfolio