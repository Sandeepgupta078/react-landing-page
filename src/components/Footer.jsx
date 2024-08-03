import React from 'react'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>Apni Dukan</h1>
            <p>© 2024 Apni Dukan. All Rights Reserved.</p>
        </div>

        <div>
            <h5>Follow us</h5>
            <div>
                <a href="https://github.com/Sandeepgupta078" target='blank'><BsGithub />GitHub</a>
                <a href="https://www.instagram.com/sandeepgupta0/" target='blank'><BsInstagram/>Instagram</a>
                <a href="https://x.com/Sandeepgupta078/" target='blank'><BsTwitter/>Twitter</a>
                <a href="https://sandeepgupta.vercel.app" target='blank'>Portfolio</a>
            </div>
        </div>
    </footer>    
  )
}

export default Footer