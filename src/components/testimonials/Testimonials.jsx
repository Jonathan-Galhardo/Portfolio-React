import React from 'react'
import './testimonials.css'
import AVAT1 from '../../assets/avatar1.jpg'
import AVAT2 from '../../assets/avatar2.jpg'
import AVAT3 from '../../assets/avatar3.jpg'
import AVAT4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVAT1,
    name: 'Joana Darc',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.A quibusdam adipisci sit mollitia iusto cum nulla repudiandae dicta, perferendis, necessitatibus natus id veritatis eius quam molestiae.Quisquam autem asperiores at.',
  },
  {
    avatar: AVAT2,
    name: 'João Alencar',
    review: 'Amet consectetur adipisicing elit. Et harum rem sint omnis sit, architecto labore veritatis atque cumque illo ratione consequatur voluptatum ipsa voluptate velit quaerat reprehenderit accusamus dolorem aut repellendus. Quia amet asperiores eum doloribus maxime. Magnam rem velit fugit necessitatibus quasi nobis?',
  },
  {
    avatar: AVAT3,
    name: 'Andrew Tanenbaum',
    review: 'Dolor sit amet consectetur adipisicing elit. Ducimus omnis reprehenderit adipisci nostrum similique voluptatum mollitia iste accusamus corrupti cupiditate dicta, sint illum porro inventore impedit pariatur distinctio maxime!'
  },
  {
    avatar: AVAT4,
    name: 'Maria Ritta',
    review: 'Ipsum dolor sit, amet consectetur adipisicing elit. Alias, nulla libero. Natus molestiae velit eum corporis. Nihil minus est aspernatur facere, atque ducimus reiciendis pariatur possimus praesentium consequatur tenetur mollitia corrupti aperiam libero a veritatis quod. Dolorum eaque consectetur officia. Veritatis doloremque ab in ullam nulla fugit ducimus iure accusantium!',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>O que os clientes falam</h5>
      <h2>Depoimentos</h2>

      <div className='container testimonials__container'>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <article key={index} className='testimonial' >
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Testimonials