import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { Layout } from '../components/Layout'
import SEO from '../components/SEO'
import Button from '../components/button'

export default () => {
	const {
		title,
		description,
		author,
		siteLanguage,
		siteUrl,
		image
	} = useSiteMetadata()

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
			<h1>
				Hey people{' '}
				<span role="img" aria-label="wave emoji">
					👋
				</span>
			</h1>
			<p>Welcome to your new Gatsby website. You are on your home page.</p>
			<p>
				This starter comes out of the box with styled components and Gatsby's
				default starter blog running on Netlify CMS.
			</p>
			<p>Now go build something great!</p>
			<Link to="/blog/">
				<Button marginTop="35px">Go to Blog</Button>
			</Link>
		</Layout>
	)
}
