import React from 'react'
import '../styles/Home.scss'
import vg from '../assets/2.webp'
import { AiFillAmazonCircle, AiFillYoutube, AiFillInstagram, AiFillGoogleCircle } from 'react-icons/ai'


export const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Apni Dukan</h1>
          <p>Solution to all your problems </p>
        </main>
      </div>

      <div className="home2">  
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are only one solution to provide you all the services you need in your daily life.
            We are here to help you with all your problems.
            we have a team of experts who are always ready to help you.
          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
            We are a website services provider, offering a wide range of solutions to meet your website needs.
            Whether you need a new website, website redesign, or website maintenance, we have got you covered.
            Our team of experienced professionals is dedicated to delivering high-quality and customized solutions.
            With our expertise, we can help you create a stunning and functional website that represents your brand and achieves your goals.
            Trust us to provide you with reliable and efficient website services.
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div 
              style={{
                animationDelay: '0.3s',
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div 
              style={{
                animationDelay: '0.5s',
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div 
              style={{
                animationDelay: '0.7s',
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div 
              style={{
                animationDelay: '1s',
              }}
            >
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  ) 
}


