import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
	{
		id: 1,
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias hic ab quibusdam atque voluptatum',
		title: 'Earnest achiever',
		avatar: AVTR1
	},
	{
		id: 2,
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias hic ab quibusdam atque voluptatum',
		title: 'Earnest achiever',
		avatar: AVTR2
	},
	{
		id: 3,
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias hic ab quibusdam atque voluptatum',
		title: 'Earnest achiever',
		avatar: AVTR3
	},
	{
		id: 4,
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias hic ab quibusdam atque voluptatum',
		title: 'Earnest achiever',
		avatar: AVTR4
	}
]


const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>What people say about me</h5>
			<h2>Testimonials</h2>
			<div className="container testimonials__container">
				{data.map(({ id, title, review, avatar }) => <article key={id} className='testimonial'>
					<div className="client__avatar">
						<img src={avatar} alt={`Avatar ${id}`} />
					</div>
					<h5 className="client__name">
						{title}
					</h5>
					<small className='client__review'>
						{review}
					</small>
				</article>)}
			</div>
		</section>
	)
}

export default Testimonials