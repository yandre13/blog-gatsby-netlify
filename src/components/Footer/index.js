import React from 'react'
import { Container } from '../Container/styles'
import { Text } from '../Text'
import styled from 'styled-components'
import {
	StyledGithub,
	StyledInstagram,
	StyledLinkedin,
	StyledFacebook,
	StyledPdf
} from './styles'

const IconsContainer = styled.div`
	width: 340px;
	margin: auto;
	display: flex;
	justify-content: space-around;
	margin: ${props => props.align && props.align};
	width: ${props => props.width && props.width};
`
export const Icons = ({ align, width }) => (
	<>
		<IconsContainer align={align} width={width}>
			<StyledGithub />
			<StyledFacebook />
			<StyledInstagram />
			<StyledLinkedin />
			<StyledPdf />
		</IconsContainer>
	</>
)

export const Footer = () => (
	<footer style={{ position: 'relative', bottom: 0 }}>
		<Container>
			<Text
				type={{ tag: 'h3' }}
				weight={'400'}
				mp={'0 50px'}
				p={'0 100px'}
				ma={'center'}
				align={'center'}
				mp={'0 0 30px 0'}
				p={'0 0 30px 0'}
			>
				"you can't use up creativity <br />
				the more you use the more you have."
			</Text>
			<Icons />
			<Text
				ma={'center'}
				align={'center'}
				type={{ tag: 'small' }}
				mp={'40px 0'}
				p={'30px 0 20px 0'}
			>
				Made with 🖤 for a better web by @me - {new Date().getFullYear()}
			</Text>
		</Container>
	</footer>
)
