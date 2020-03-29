import styled, { css } from 'styled-components'
import { dark, light } from '../../../styles/config'

export const NavDrawer = styled.nav`
	height: 100%;
	background: ${props =>
		props.theme.isDark ? dark.backgroundColor : light.backgroundColor};
	opacity: 0.9;
	box-shadow: 2px 0 8px rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 56px;
	width: 78vw;
	max-width: 300px;
	z-index: 200;
	${props =>
		props.show
			? css`
					transform: translateX(0);
					transition: transform 0.2s ease-out;
			  `
			: css`
					transform: translateX(${props => (props.right ? '101%' : '-101%')});
					transition: transform 0.2s ease-out;
			  `}

	@media (min-width: 769px) {
		& {
			display: none;
		}
	}
`
