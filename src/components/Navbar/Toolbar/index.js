import React, { useState, useEffect } from 'react'

import { Header, Nav, Logo, ContainerButton, StyledToggle } from './styles'
import { ToggleButton } from '../ToogleButton'
import { Container } from '../../Container/styles.js'
import { Links } from '../../Links'
import { StyledLinkLogo } from '../../../styles'

export const Toolbar = ({
	show,
	setShow,
	width,
	dark,
	setDark,
	themeContext
}) => {
	const [transparent, setTransparent] = useState(0),
		[innerHeight, setInnerHeight] = useState(0),
		[innerMiddleHeight, setInnerMiddleHeight] = useState(0)

	useEffect(() => {
		function watchScroll() {
			window.addEventListener('scroll', () => setTransparent(window.scrollY))
		}
		watchScroll()
		return () => {
			window.removeEventListener('scroll', () => setTransparent(window.scrollY))
		}
	}, [])

	useEffect(() => {
		if (typeof window !== `undefined`) {
			setInnerHeight(window.innerHeight - 30)
			setInnerMiddleHeight(window.innerHeight / 4)
		}
	}, [])

	return (
		<Header
			id="home"
			transparent={transparent}
			innerHeight={innerHeight}
			innerMiddleHeight={innerMiddleHeight}
		>
			<Container>
				<Nav>
					{width < 768 && (
						<ContainerButton>
							<ToggleButton show={show} setShow={setShow} />
						</ContainerButton>
					)}
					<Logo>
						<StyledLinkLogo to="/">
							rightaway
							<br />
						</StyledLinkLogo>
					</Logo>

					{width > 768 && <Links />}
					<StyledToggle
						dark={dark}
						name="toggle-switch"
						onToggle={() => {
							setDark(themeContext.isDark)
							themeContext.toggleDark()
						}}
					/>
				</Nav>
			</Container>
		</Header>
	)
}
