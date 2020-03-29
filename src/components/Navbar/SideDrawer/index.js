import React from 'react'
import { NavDrawer } from './styles'
import { Links } from '../../Links'

export const SideDrawer = ({ show }) => (
	<NavDrawer show={show}>
		<Links />
	</NavDrawer>
)
