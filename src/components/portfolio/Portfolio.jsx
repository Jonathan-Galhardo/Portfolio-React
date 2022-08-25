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
          <h3>Orçamento Pessoal</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jonathan-Galhardo/Orcamento-Pessoal" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="#" className='btn btn-primary' target='_blank'>Deploy</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Game: Valhalla</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jonathan-Galhardo/Valhalla_Gloria_Eterna" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://valhalla-batalha-final.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Deploy</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Calculadora em Js</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jonathan-Galhardo/Calculadora_JavaScript" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://calculadora-java-script-mu.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Deploy</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Clt ou Pj? </h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jonathan-Galhardo/CLT-ou-PJ" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://clt-ou-pj.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Deploy</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Rachando a Conta</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jonathan-Galhardo/Calculadora-de-Gorjetas" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://calculadora-de-gorjetas-three.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Deploy</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Seção Depoimentos</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jonathan-Galhardo/Secao-Depoimentos" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://secao-depoimentos.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Deploy</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Portfolio