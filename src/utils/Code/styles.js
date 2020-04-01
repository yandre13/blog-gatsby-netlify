import styled from 'styled-components'

export const Pre = styled.pre`
	text-align: left;
	margin: 1rem 0;
	padding: 0.5rem;
	overflow-x: auto;
	border-radius: 3px;

	& .token-line {
		line-height: 1.3rem;
		height: 1.3rem;
	}
	font-family: 'Courier New', Courier, monospace;
	position: relative;
`

export const LineNo = styled.span`
	display: inline-block;
	width: 20px;
	user-select: none;
	opacity: 0.3;
`

export const CopyCode = styled.button`
	position: absolute;
	width: 54px;
	top: 0;
	right: 0;
	border: 0;
	border-radius: 3px;
	opacity: 0.3;
	cursor: pointer;
	&:hover {
		opacity: 0.6;
	}
`
