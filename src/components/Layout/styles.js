import styled from 'styled-components'

export const StyledMain = styled.main`
	width: 100%;
	height: 100%;
	background: ${props => props.theme.backgroundColor};
	position: relative;
	padding-bottom: 80px;
	top: 66px;
	@media screen and (max-width: 768px) {
		top: 56px;
	}
`
