import React from 'react'
import { StyledLink as Link, StyledList } from './styles'

export const Links = () => (
	<StyledList>
		<li>
			<Link to="/#home">Home</Link>
		</li>
		<li>
			<Link to="/#whoweare">Who we are</Link>
		</li>
		<li>
			<Link to="/#features">Features</Link>
		</li>
		<li>
			<Link to="/#testimonials">Testimonials</Link>
		</li>
	</StyledList>
)
