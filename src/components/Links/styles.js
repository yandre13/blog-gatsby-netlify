import styled from 'styled-components'
import { Link } from 'gatsby'
import { dark, light } from '../../styles/config'

export const StyledList = styled.ul`
	width: 100%;
	list-style: none;
	display: flex;
	flex-direction: column;
	padding: 10px 15px 10px 30px;

	& li {
		border-bottom: 1px solid #8b99c2;
	}
	& li:last-child {
		border-bottom: 0;
	}

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-end;
		& li {
			margin-right: 20px;
			border: 0;
		}
	}
`

export const StyledLink = styled(Link)`
	padding: 16px 0;
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	text-decoration: none;
	line-height: 24px;
	display: block;
	width: 100%;
`
