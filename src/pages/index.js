import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { Layout } from '../components/Layout'
import SEO from '../components/SEO'
import Button from '../components/button'
import { CustomRow, CustomCol } from '../components/Grid/styles'
import { Icons } from '../components/Footer'
import { Text } from '../components/Text'
import { ImageProfile, OverContainer, Separator } from '../styles'
import styled from 'styled-components'
import { dark, light } from '../styles/config'

const NameCol = styled(CustomCol)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const StyledLink = styled(Link)`
	display: block;
	text-decoration: none;
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	margin: ${props => props.mm && props.mm};
	font-weight: bold;
	@media screen and (min-width: 768px) {
		margin: ${props => props.m && props.m};
	}
`

export default ({ data }) => {
	const {
		title,
		description,
		author,
		siteLanguage,
		siteUrl,
		image
	} = useSiteMetadata()
	console.log(data)
	return (
		<Layout>
			<SEO
				title={title}
				description={description}
				author={author}
				lang={siteLanguage}
				siteUrl={siteUrl}
				image={image}
			/>
			<OverContainer>
				<CustomRow gutter={30} mp={'30px 0'} p={'100px 0 80px'}>
					<NameCol nspan={7} mo={1}>
						<Text type={{ tag: 'h1' }} weight={'bold'}>
							About Yandre
						</Text>
						<Text type={{ tag: 'h4' }} mp={'10px 0'} p={'30px 0'}>
							software engineer, public speaker & community organizer
						</Text>
						<Icons align={'0 auto 0 0'} width={'260px'} />
					</NameCol>
					<CustomCol nspan={5}>
						<ImageProfile fluid={data.profile.childImageSharp.fluid} alt="@yandre" />
					</CustomCol>
				</CustomRow>

				<Text type={{ tag: 'p' }}>
					Hi! I'm passionate about making open-source more accessible and building
					community, online & offline. I enjoy teaching and inspiring other
					technologists through public speaking and writing. I've spoken at events
					organized by ReactJS Girls, CodeNewbie, Columbia University, The Flatiron
					School and more.
				</Text>

				<Text type={{ tag: 'p' }} mp={'20px 0'} p={'40px 0'}>
					Currently, I am a Full Stack Engineer at Meetup and the organizer/founder
					of React Ladies, a community for women and non-binary ReactJS developers. I
					am based in the city that never sleeps (NYC).
				</Text>

				<Separator mb={20} mt={20} mmb={20} mmt={20} />
				<Text type={{ tag: 'h4' }} mp={'10px 0'} p={'5px 0'} weight={'bold'}>
					Latest posts
				</Text>
				<StyledLink to="/#" mm={'15px 0'} m={'10px 0'}>
					Understanding Reduce in JavaScript
				</StyledLink>
				<StyledLink to="/#" mm={'15px 0'} m={'10px 0'}>
					Understanding Reduce in JavaScript
				</StyledLink>
				<Separator mb={20} mt={50} mmb={20} mmt={20} />
				<Text type={{ tag: 'h4' }} mp={'10px 0'} p={'5px 0'} weight={'bold'}>
					Featured Writing
				</Text>
				<StyledLink to="/#" mm={'15px 0'} m={'10px 0'}>
					Understanding Reduce in JavaScript
				</StyledLink>
				<StyledLink to="/#" mm={'15px 0'} m={'10px 0'}>
					Understanding Reduce in JavaScript
				</StyledLink>
				<Link to="/blog/">
					<Button marginTop="35px">Go to Blog</Button>
				</Link>
			</OverContainer>
		</Layout>
	)
}

export const query = graphql`
	query SITE_INDEX_QUERY {
		profile: file(name: { eq: "profile" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
