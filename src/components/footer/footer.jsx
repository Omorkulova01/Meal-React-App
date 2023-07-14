import React from 'react'
import logoTCDB from '../../img/logo-tcdb.png'
import logoTADB from '../../img/logo-tadb.png'
import logoTSDB from '../../img/logo-tsdb.png'
import './footer.css'

const Footer = () => {
    
    return (
        <footer>
            <div className='footerLinks'>
                <ul>
                    <li><a href="#">© 2023 TheMealDB</a></li>
                    <li><a href="#">Proudly built in the UK</a></li>
                </ul>

                <div>
                    <img src={logoTCDB} alt="#" />
                    <img src={logoTADB} alt="#" />
                    <img src={logoTSDB} alt="#" />
                </div>

                <ul className='links'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
