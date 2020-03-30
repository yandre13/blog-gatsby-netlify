import Highlight, { defaultProps } from 'prism-react-renderer'
import dark from './theme'
import light from 'prism-react-renderer/themes/github'
import React, { useState, useContext } from 'react'
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode'
import styled from 'styled-components'
import { copyToClipboard } from '../../utils/copy-to-clipboard'

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

const CopyCode = styled.button`
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

const Code = ({ codeString, language }) => {
	const { isDark } = useContext(ThemeManagerContext)
	const [copied, setCopied] = useState(false)
	console.log('ff')
	const handleClick = () => {
		copyToClipboard(codeString)
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 3500)
	}
	return (
		<Highlight
			{...defaultProps}
			code={codeString}
			language={language}
			theme={isDark ? dark : light}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Pre className={className} style={style}>
					<CopyCode onClick={handleClick}>{copied ? 'Copied' : 'Copy'}</CopyCode>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							<LineNo>{i + 1}</LineNo>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</Pre>
			)}
		</Highlight>
	)
}

export default Code
