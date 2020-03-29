import React from 'react'
import { H1, H2, H3, H4, H5, P, Small } from './styles'

export const Text = ({
	id,
	type,
	align,
	ma,
	weight,
	p,
	mp,
	color,
	children
}) => {
	return (
		<>
			{type.tag === 'h1' && (
				<H1
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					color={color}
				>
					{children}
				</H1>
			)}
			{type.tag === 'h2' && (
				<H2
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					color={color}
				>
					{children}
				</H2>
			)}
			{type.tag === 'h3' && (
				<H3
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					color={color}
				>
					{children}
				</H3>
			)}
			{type.tag === 'h4' && (
				<H4
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					color={color}
				>
					{children}
				</H4>
			)}
			{type.tag === 'h5' && (
				<H5
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					color={color}
				>
					{children}
				</H5>
			)}
			{type.tag === 'p' && (
				<P
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					color={color}
				>
					{children}
				</P>
			)}
			{type.tag === 'small' && (
				<Small
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					color={color}
				>
					{children}
				</Small>
			)}
		</>
	)
}
