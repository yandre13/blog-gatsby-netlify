import styled, { css } from 'styled-components'
import { dark, light } from '../../../styles/config'

//Button

export const Stripe = styled.div`
	width: 100%;
	height: 1px;
	background: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	margin: 5px auto;
	transition: all 0.3s;
	backface-visibility: hidden;
`
export const Hamburger = styled.div`
	cursor: pointer;
	height: 20px;
	width: 16px;
	transition: all 0.3s ease;

	${props =>
		props.show &&
		css`
			& ${Stripe}.top {
				transform: rotate(48deg) translate(4px, 5px);
			}
			& ${Stripe}.middle {
				opacity: 0;
			}
			& ${Stripe}.bottom {
				transform: rotate(-47deg) translate(3px, -5px);
			}
		`}
`
