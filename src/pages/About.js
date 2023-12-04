import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{backgroundImage: `url(${MultiplePizzas})`}}
      ></div>
      <div className='aboutBottom'>
        <h1> ABOUT US</h1>
        <p>Welcome to Pizzeria– where passion meets perfection in every slice! Established with a love for crafting authentic, mouthwatering pizzas, we take pride in delivering an unparalleled culinary experience to pizza enthusiasts like you.

At Pedro Pizza, we believe that great pizza starts with exceptional ingredients. Our commitment to quality begins with handpicked, fresh produce and extends to our meticulously selected cheeses and savory meats. Every pizza is a canvas for flavor, and our chefs are the artists who bring it to life.

What sets us apart is our dedication to both tradition and innovation. We honor the time-honored recipes that have made pizza a worldwide favorite, while also embracing creativity in our kitchen. From classic Margheritas to bold and inventive combinations, our diverse menu caters to every palate.

Beyond our commitment to taste, we prioritize your experience. We strive for excellence not only in our pizzas but also in our service. Whether you're dining in, ordering for delivery, or hosting an event, expect nothing less than prompt, friendly service and pizzas that exceed expectations.

Pedro Pizza is more than a restaurant; it's a community of pizza lovers. Join us on a culinary journey that celebrates the art of pizza-making. Explore our menu, savor the flavors, and make every meal an occasion to remember.

Thank you for choosing Pedro Pizza. We look forward to sharing the joy of exceptional pizza with you!</p>
      </div>
    </div>
  )
}

export default About
