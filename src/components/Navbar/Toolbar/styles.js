import styled, { css } from 'styled-components'
import { Toggle } from 'react-toggle-component'
import { light, dark } from '../../../styles/config'

export const ContainerButton = styled.div`
	display: flex;
	align-items: center;
	height: 66px;
	justify-self: flex-end;
	@media screen and (max-width: 768px) {
		height: 56px;
	}
`

//This needs a Header
export const Header = styled.header`
	position: fixed;
	display: flex;
	justify-content: center;
	height: 66px;
	width: 100%;
	/* background */
	transition: 0.4s ease-in;
 background: ${props =>
		props.theme.isDark ? dark.backgroundColor : light.backgroundColor};
 @supports (backdrop-filter: saturate(180%) blur(25px)) {
  & {
   ${props =>
				props.transparent > props.innerMiddleHeight &&
				css`
					background: ${props =>
						props.theme.isDark ? 'transparent' : 'transparent'};
					backdrop-filter: saturate(180%) blur(25px);
					border: 0;
				`}
  }
}
 

/* 	${props =>
	props.transparent > props.innerHeight &&
	css`
		background: transparent;
		backdrop-filter: saturate(180%) blur(25px);
	`} */
top: 0;
	left: 0;
	z-index: 210;
 @media screen and (max-width: 768px) {
		height: 56px;
	}
 
`
//A nav
export const Nav = styled.nav`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
//A logo in a div
export const Logo = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	align-self: flex-start;
	& img {
		width: 120px;
		display: block;
		padding: 10px;
	}
`

export const StyledToggle = styled(Toggle)`
	display: inline-block;
	width: 20px;
	height: 20px;
	position: relative;
	top: 0px;
	background-color: transparent;
	background: ${props =>
		props.dark ? `url('./moon_icon.svg')` : `url('./sun_icon.svg')`};
	background-size: cover;
	transition: all ease-in 0.7s;
	& input[type='checkbox'] {
		position: relative;
		margin: 0;
	}
	& input[type='checkbox'] + label {
		background: transparent;
		width: 28px;
		display: inline-block;
		position: relative;
		top: -20px;
		&::before {
			display: none;
		}
		&::after {
			display: none;
		}
	}
	& input[type='checkbox']:checked + label {
		background: transparent;
	}
`
