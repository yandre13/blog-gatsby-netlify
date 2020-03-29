import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 -webkit-tap-highlight-color: rgba(0,0,0,0);
 -moz-tap-highlight-color: rgba(0, 0, 0, 0);
}
body{
 height: 100vh;
 overflow-x: hidden;
 font-family: 'Ubuntu', sans-serif;
 font-size: 16px;
 line-height: 24px;
 color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
  background: ${props =>
			props.theme.isDark ? dark.backgroundColor : light.backgroundColor};
  transition: background-color .7s ease;

	@media screen and (min-width: 1680px) {
		font-size: 18px;
		line-height: 26px;
	}
}
`

export const dark = {
	backgroundColor: '#000',
	primaryColor: '#f2f2f2',
	secondaryColor: '#CB589D',
	fontColor: '#b5c2c9',
	buttonColor: '#5E4B78'
}

export const light = {
	backgroundColor: '#F7FBFE',
	primaryColor: '#212353',
	secondaryColor: '#F063B8',
	fontColor: '#4B5D68',
	buttonColor: '#9C69E2'
}
