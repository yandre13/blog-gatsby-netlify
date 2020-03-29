import React, { useContext, useState, useEffect } from 'react'
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode'
import { Navbar } from '../Navbar'
//Header for dark mode
export const Header = () => {
	const themeContext = useContext(ThemeManagerContext)
	const [dark, setDark] = useState(false)

	useEffect(() => {
		setDark(!themeContext.isDark)
	}, [dark])

	return (
		<>
			<Navbar themeContext={themeContext} dark={dark} setDark={setDark} />
		</>
	)
}
