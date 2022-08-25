import React from 'react'
import './testimonials.css'
import AVAT1 from '../../assets/avatar1.jpg'
import AVAT2 from '../../assets/avatar2.jpg'
import AVAT3 from '../../assets/avatar3.jpg'
import AVAT4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>O que os clientes falam</h5>
      <h2>Depoimentos</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVAT1} alt="Avt1" />
            <h5 className='client__name'>Nome Cliente</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea rerum fuga, reiciendis voluptatibus totam, optio impedit pariatur obcaecati dolores quod iste provident voluptatum consequuntur, laborum accusantium? Fugit, molestiae deserunt!
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVAT1} alt="Avt1" />
            <h5 className='client__name'>Nome Cliente</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea rerum fuga, reiciendis voluptatibus totam, optio impedit pariatur obcaecati dolores quod iste provident voluptatum consequuntur, laborum accusantium? Fugit, molestiae deserunt!
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVAT1} alt="Avt1" />
            <h5 className='client__name'>Nome Cliente</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea rerum fuga, reiciendis voluptatibus totam, optio impedit pariatur obcaecati dolores quod iste provident voluptatum consequuntur, laborum accusantium? Fugit, molestiae deserunt!
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVAT1} alt="Avt1" />
            <h5 className='client__name'>Nome Cliente</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea rerum fuga, reiciendis voluptatibus totam, optio impedit pariatur obcaecati dolores quod iste provident voluptatum consequuntur, laborum accusantium? Fugit, molestiae deserunt!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials