import React, { useState, useEffect } from 'react'
import { Toolbar } from './Toolbar'
import { SideDrawer } from './SideDrawer'
import { BackDrop } from './BackDrop'
//Drawer for mobile
export const Navbar = ({ themeContext, dark, setDark }) => {
	const [show, setShow] = useState(false),
		[width, setWidth] = useState(0)

	const handleShow = () => setShow(!show)

	useEffect(() => {
		if (typeof window !== `undefined`) {
			setWidth(window.innerWidth)
		}
		function watchResize() {
			window.addEventListener('resize', () => setWidth(window.innerWidth))
		}
		watchResize()
		return () => {
			window.removeEventListener('resize', () => setWidth(window.innerWidth))
		}
	}, [])

	return (
		<>
			<Toolbar
				width={width}
				show={show}
				setShow={handleShow}
				themeContext={themeContext}
				dark={dark}
				setDark={setDark}
			/>
			{width < 768 && <SideDrawer show={show} />}
			{show && width < 768 && <BackDrop setShow={handleShow} />}
		</>
	)
}
