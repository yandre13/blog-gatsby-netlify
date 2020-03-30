import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import SEO from '../components/SEO'
import Button from '../components/button'

const Blog = ({ data }) => {
	const posts = data.allMdx.edges
	console.log(data)
	return (
		<Layout>
			<SEO
				title="All posts"
				description={`My blog for coronavirus`}
				siteUrl={`${data.site.siteMetadata.siteUrl}/blog`}
			/>
			<div style={{ margin: '20px 0 40px' }}>
				{posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					return (
						<div key={node.fields.slug}>
							<h3>
								<Link style={{ boxShadow: `none` }} to={`blog${node.fields.slug}`}>
									{title}
								</Link>
							</h3>
							<small>{node.frontmatter.date}</small>
							<p
								dangerouslySetInnerHTML={{
									__html: node.frontmatter.description || node.excerpt
								}}
							/>
						</div>
					)
				})}
			</div>
			<Link to="/">
				<Button marginTop="85px">Go Home</Button>
			</Link>
		</Layout>
	)
}

export default Blog

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				siteUrl
			}
		}
		allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`
