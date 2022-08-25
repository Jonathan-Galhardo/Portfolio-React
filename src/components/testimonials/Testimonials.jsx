import React from 'react'
import './testimonials.css'
import AVAT1 from '../../assets/avatar1.jpg'
import AVAT2 from '../../assets/avatar2.jpg'
import AVAT3 from '../../assets/avatar3.jpg'
import AVAT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVAT1,
    name: 'Joana Darc',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.A quibusdam adipisci sit mollitia iusto cum nulla repudiandae dicta, perferendis, necessitatibus natus id veritatis eius quam molestiae.Quisquam autem asperiores at.',
  },
  {
    avatar: AVAT2,
    name: 'João Alencar',
    review: 'Amet consectetur omnis sit, architecto labore veritatis atque cumque illo ratione consequatur voluptatum ipsa voluptate velit quaerat reprehenderit accusamus dolorem aut repellendus. Quia amet asperiores eum doloribus maxime. Magnam rem velit fugit necessitatibus quasi nobis?',
  },
  {
    avatar: AVAT3,
    name: 'Andrew Tanenbaum',
    review: 'Dolor sit amet consectetur adipisicing elit. Ducimus omnis reprehenderit adipisci nostrum similique voluptatum mollitia iste accusamus corrupti cupiditate dicta, sint illum porro inventore impedit pariatur distinctio maxime!'
  },
  {
    avatar: AVAT4,
    name: 'Maria',
    review: 'Alias, nulla libero. Natus molestiae velit eum corporis. Nihil minus est aspernatur facere, atque ducimus reiciendis pariatur possimus praesentium consequatur tenetur mollitia corrupti aperiam libero a veritatis quod. Dolorum e ure accusantium!',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>O que os clientes falam</h5>
      <h2>Depoimentos</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial' >
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section >
  )
}

export default Testimonials