import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
	{
		id: 1,
		title: 'This is a portfolio item',
		image: IMG1,
		github: 'https://github.com',
		demo: 'https://dribble.com',
	},
	{
		id: 2,
		title: 'This is a portfolio item',
		image: IMG2,
		github: 'https://github.com',
		demo: 'https://dribble.com',
	},
	{
		id: 3,
		title: 'This is a portfolio item',
		image: IMG3,
		github: 'https://github.com',
		demo: 'https://dribble.com',
	},
	{
		id: 4,
		title: 'This is a portfolio item',
		image: IMG4,
		github: 'https://github.com',
		demo: 'https://dribble.com',
	},
	{
		id: 5,
		title: 'This is a portfolio item',
		image: IMG5,
		github: 'https://github.com',
		demo: 'https://dribble.com',
	},
	{
		id: 6,
		title: 'This is a portfolio item',
		image: IMG6,
		github: 'https://github.com',
		demo: 'https://dribble.com',
	},
]


const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>
				My Recent Work
			</h5>
			<h2>
				Portfolio
			</h2>
			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => (
					<article key={id} className='portfolio__item'>
						<div className="portfolio__item-image">
							<img src={image} alt={`portfolio ${id}`} />
						</div>
						<h3>{title}</h3>
						<div className='portfolio__item-cta'>
							<a href={github} className='btn' target="_blank" rel='noreferrer'>GitHub</a>
							<a href={demo} className='btn btn-primary' target="_blank" rel='noreferrer'>Live Demo</a>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Portfolio