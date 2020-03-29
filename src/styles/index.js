import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { dark, light } from './config'

export const Image = styled(Img)`
	width: 100%;
	height: 100%;
	@media screen and (min-width: 600px) {
		width: 100%;
		height: 100%;
	}
`

export const BannerContainer = styled.div`
	width: 100%;
	position: relative;
	top: 0;
	left: 0;
	@media screen and (min-width: 768px) {
		& {
			width: 100%;
			position: absolute;
			top: 50px;
			left: 0;
		}
	}

	@media screen and (min-width: 810px) {
		& {
			width: 120%;
			position: absolute;
			top: 60px;
			left: -40px;
		}
	}

	@media screen and (min-width: 1024px) {
		& {
			width: 120%;
			position: absolute;
			top: 60px;
			left: -80px;
		}
	}

	@media screen and (min-width: 1200px) {
		& {
			width: 120%;
			position: absolute;
			top: 70px;
			left: -90px;
		}
	}
	@media screen and (min-width: 1440px) {
		& {
			width: 130%;
			position: absolute;
			top: 70px;
			left: -160px;
		}
	}
`

export const ImageBanner = styled(Img)`
	width: 100%;
`
export const StyledLinkLogo = styled(Link)`
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	font-weight: 400;
	text-decoration: none;
	font-size: 24px;

	@media screen and (min-width: 1440px) {
		font-size: 28px;
		line-height: 28px;
	}

	@media screen and (min-width: 1680px) {
		font-size: 32px;
		line-height: 32px;
	}
`

export const Button = styled(Link)`
	${props =>
		props.buttontype
			? css`
					background: ${props =>
						props.theme.isDark ? dark.secondaryColor : light.secondaryColor};
			  `
			: css`
					background: ${props =>
						props.theme.isDark ? dark.buttonColor : light.buttonColor};
			  `};
	color: white;
	display: block;
	width: 166px;
	text-align: center;
	text-decoration: none;
	border: none;
	border-radius: 25px;
	padding: 12px 24px;
	margin: ${props => props.mm && props.mm};

	@media screen and (min-width: 768px) {
		margin: ${props => props.m && props.m};
	}
`
export const OverContainer = styled.div`
	margin: auto;
	width: 100%;

	@media screen and (min-width: 768px) {
		width: 90%;
	}
`

export const SquareOne = styled.div`
	width: 100%;
	border-radius: 50px;
	background: ${props => (props.theme.isDark ? '#402B38' : '#fde8f4')};
	padding: 40px 30px;
	@media screen and (min-width: 768px) {
		padding: 40px 60px 40px 40px;
	}
`
export const Img2 = styled.div`
	width: 80%;
	margin: auto;
	@media screen and (min-width: 768px) {
		width: 100%;
	}
`
export const SubContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`
//HOLAS
export const CardContainer = styled.div`
	width: 100%;
`
export const ContainerImgContent = styled.div`
	position: relative;
	top: 0;
	left: 0%;
	height: 60%;
	width: 60%;
	min-width: 180px;
	min-height: 180px;
	margin: auto;
	padding: ${props => props.mp && props.mp};

	@media screen and (min-width: 768px) {
		min-width: 230px;
		min-height: 230px;
		padding: ${props => props.p && props.p};
	}
	@media screen and (min-width: 1200px) {
		min-width: 240px;
		min-height: 240px;
	}

	@media screen and (min-width: 1340px) {
		min-width: 260px;
		min-height: 260px;
	}

	@media screen and (min-width: 1370px) {
		position: absolute;
		top: 20%;
		left: -40%;
		height: 60%;
		width: 60%;
		min-height: 60%;
		min-width: 60%;
	}
`
export const ContainerContent = styled.div`
	width: 100%;
	margin: auto;
	padding: 20px 30px;
	padding: ${props => props.mp && props.mp};

	@media screen and (min-width: 1370px) {
		width: 80%;
		margin: 0;
		margin-left: auto;
		padding: ${props => props.p && props.p};
	}
`

export const Card = styled.div`
	position: relative;
	background: ${props => (props.theme.isDark ? props.bg.dark : props.bg.light)};
	width: 100%;
	border-radius: 50px;
	/*clip-path: polygon(19% 0, 100% 0, 100% 100%, 0% 100%); green #dcf5f0*/

	@media screen and (min-width: 1370px) {
		width: 70%;
		margin-left: auto;
		border-radius: 50px;
	}
`

export const BackImage = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: url('/img404_2.jpg');
	background-size: contain;
	filter: blur(2px);
	@media screen and (min-width: 768px) {
		background-size: cover;
		background: url('/img404.jpg');
	}
`

export const Error = styled.section`
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: #000;
	& img {
		max-width: 100%;
		margin: 50px 0 0;
	}
`

export const Light = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	height: 100%;
`
export const SquareTwo = styled.section`
	position: relative;
	width: 100%;
	border-radius: 50px;
	background: ${props =>
		props.theme.isDark ? dark.buttonColor : light.buttonColor};
	padding: 40px 30px;
	/* Slides container */
	& .swiper-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		transition-property: transform;
		box-sizing: content-box;
		padding-bottom: 60px;
	}
	/*Bullets */
	& .swiper-pagination-bullet {
		background-color: ${props => (props.theme.isDark ? '#302734' : '#fff')};
		opacity: 0.7;
	}
	& .swiper-pagination-bullet-active {
		background-color: #f063b8;
		opacity: 1;
	}
	/*Bullets Container */
	& .swiper-container-horizontal > .swiper-pagination-bullets {
		bottom: 0;
		left: 0;
		width: auto;
	}
	@media screen and (min-width: 768px) {
		padding: 40px 60px;
	}
`

export const Separator = styled.div`
	width: 100%;
	height: 1px;
	background: ${props => (props.theme.isDark ? '#352C38' : '#EBE1F9')};
	margin-bottom: ${props => props.mmb && `${props.mmb}px`};
	margin-top: ${props => props.mmt && `${props.mmt}px`};

	@media screen and (min-width: 768px) {
		margin-bottom: ${props => props.mb && `${props.mb}px`};
		margin-top: ${props => props.mt && `${props.mt}px`};
	}
`
