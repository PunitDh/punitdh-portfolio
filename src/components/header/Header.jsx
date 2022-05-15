import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Punit Dharmadhikari</h1>
				<h5 className="text-light">Full-Stack Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className="me">
					<img src={ME} alt="Punit Dharmadhikari" />
				</div>

				<a href="#about" className='scroll__down'>Scroll Down</a>
			</div>
		</header>
	)
}

export default Header