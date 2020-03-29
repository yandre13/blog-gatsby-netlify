import styled from 'styled-components'
import { dark, light } from '../../styles/config'

export const H1 = styled.h1`
	font-size: 28px;
	line-height: 34px;
	font-weight: ${props => (props.weight ? props.weight : 'normal')};
	text-align: ${props => props.ma && props.ma};
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	color: ${props => props.color && props.color};
	padding: ${props => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		text-align: ${props => (props.align ? props.align : 'left')};
		padding: ${props => props.p && props.p};
	}
`
export const H2 = styled.h2`
	font-size: 38px;
	line-height: 44px;
	font-weight: ${props => (props.weight ? props.weight : 'normal')};
	text-align: ${props => props.ma && props.ma};
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	color: ${props => props.color && props.color};
	padding: ${props => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		font-size: 48px;
		line-height: 54px;
		text-align: ${props => (props.align ? props.align : 'left')};
		padding: ${props => props.p && props.p};
	}
	@media screen and (min-width: 960px) {
		font-size: 54px;
		line-height: 60px;
	}
	@media screen and (min-width: 1200px) {
		font-size: 60px;
		line-height: 66px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 66px;
		line-height: 72px;
	}
`

export const H3 = styled.h3`
	font-size: 32px;
	line-height: 40px;
	font-weight: ${props => (props.weight ? props.weight : 'normal')};
	text-align: ${props => props.ma && props.ma};
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	color: ${props => props.color && props.color};
	padding: ${props => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		font-size: 40px;
		line-height: 48px;
		text-align: ${props => (props.align ? props.align : 'left')};
		padding: ${props => props.p && props.p};
	}
`

export const H4 = styled.h4`
	font-size: 24px;
	line-height: 32px;
	font-weight: ${props => (props.weight ? props.weight : 'normal')};
	text-align: ${props => props.ma && props.ma};
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	color: ${props => props.color && props.color};
	padding: ${props => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		font-size: 28px;
		line-height: 36px;
		text-align: ${props => (props.align ? props.align : 'left')};
		padding: ${props => props.p && props.p};
	}
`
export const H5 = styled.h5`
	font-size: 20px;
	font-weight: ${props => (props.weight ? props.weight : 'normal')};
	text-align: ${props => props.ma && props.ma};
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	color: ${props => props.color && props.color};
	padding: ${props => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		text-align: ${props => (props.align ? props.align : 'left')};
		padding: ${props => props.p && props.p};
	}
`

export const P = styled.p`
	font-weight: ${props => (props.weight ? props.weight : 'normal')};
	text-align: ${props => props.ma && props.ma};
	color: ${props => (props.theme.isDark ? dark.fontColor : light.fontColor)};
	color: ${props => props.color && props.color};
	padding: ${props => props.mp && props.mp};
	& br {
		display: none;
	}
	@media screen and (min-width: 768px) {
		text-align: ${props => (props.align ? props.align : 'left')};
		padding: ${props => props.p && props.p};
		& br {
			display: block;
		}
	}
`

export const Small = styled.small`
	font-size: 14px;
	font-weight: ${props => (props.weight ? props.weight : 'normal')};
	text-align: ${props => props.ma && props.ma};
	color: ${props => (props.theme.isDark ? dark.fontColor : light.fontColor)};
	color: ${props => (props.theme.isDark ? dark.fontColor : props.color)};
	padding: ${props => props.mp && props.mp};
	& br {
		display: none;
	}
	@media screen and (min-width: 768px) {
		text-align: ${props => (props.align ? props.align : 'left')};
		padding: ${props => props.p && props.p};
		& br {
			display: block;
		}
	}
`
