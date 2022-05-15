import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know Me</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt="Punit Dharmadhikari" />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>1 year experience</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>2</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>2</small>
						</article>
					</div>

					<p>
						I am a full-stack developer with a passion for building
						beautiful and functional web applications. I have
						experience in building web applications using the
						following technologies:
						<ul>
							<li>React.JS</li>
							<li>Node.JS</li>
							<li>Express.JS</li>
							<li>MongoDB</li>
							<li>MySQL</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>Bootstrap</li>
							<li>Javascript</li>
							<li>jQuery</li>
							<li>Git</li>
							<li>GitHub</li>
							<li>GitLab</li>
							<li>GitFlow</li>
							<li>Webpack</li>
							<li>Webpack-dev-server</li>
							<li>Babel</li>
							<li>Babel-loader</li>
							<li>Babel-preset-env</li>
							<li>Babel-preset-react</li>

						</ul>
					</p>
				</div>
			</div>
		</section>
	)
}

export default About