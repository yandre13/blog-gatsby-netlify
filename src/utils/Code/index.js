import Highlight, { defaultProps } from 'prism-react-renderer'
import dark from './theme'
import light from 'prism-react-renderer/themes/github'
import React, { useState, useContext } from 'react'
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode'
import { copyToClipboard } from '../../utils/copy-to-clipboard'
import { CopyCode, LineNo, Pre } from './styles'

const Code = ({ codeString, language }) => {
	const { isDark } = useContext(ThemeManagerContext),
		[copied, setCopied] = useState(false),
		handleClick = () => {
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
