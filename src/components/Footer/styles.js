import styled, { css } from 'styled-components'
import { Github } from '@styled-icons/evaicons-solid/Github'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { FilePdf } from '@styled-icons/boxicons-solid/FilePdf'

export const ContainerFlex = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	padding: 20px 0 0 0;
	& a:first-of-type {
		margin-bottom: 20px;
	}
	@media screen and (min-width: 520px) {
		align-items: center;
		flex-direction: row;
		justify-content: space-evenly;
		& a:first-of-type {
			margin-bottom: 0;
		}
	}
	@media screen and (min-width: 768px) {
		align-items: center;
		flex-direction: row;
		justify-content: flex-end;
	}
`

export const StyledGithub = styled(Github)`
	width: 40px;
	color: #b4b4b4;
	transition: color 0.5s ease;
	&:hover {
		color: ${props => (props.theme.isDark ? '#fff' : '#000')};
	}
`
export const StyledInstagram = styled(Instagram)`
	width: 40px;
	color: #b4b4b4;
	transition: color 0.5s ease;
	&:hover {
		color: ${props => (props.theme.isDark ? '#fff' : '#000')};
	}
`
export const StyledFacebook = styled(Facebook)`
	width: 40px;
	color: #b4b4b4;
	transition: color 0.5s ease;
	&:hover {
		color: ${props => (props.theme.isDark ? '#fff' : '#000')};
	}
`
export const StyledLinkedin = styled(Linkedin)`
	width: 40px;
	color: #b4b4b4;
	transition: color 0.5s ease;
	&:hover {
		color: ${props => (props.theme.isDark ? '#fff' : '#000')};
	}
`
export const StyledPdf = styled(FilePdf)`
	width: 40px;
	color: #b4b4b4;
	transition: color 0.5s ease;
	&:hover {
		color: ${props => (props.theme.isDark ? '#fff' : '#000')};
	}
`

export const ContainerIcons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	@media screen and (min-width: 768px) {
		justify-content: flex-start;
	}
`
