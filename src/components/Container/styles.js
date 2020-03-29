import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	width: 90%;

	@media only screen and (min-width: 600px) {
		& {
			width: 85%;
		}
	}

	@media only screen and (min-width: 1024px) {
		& {
			width: 75%;
		}
	}
`
