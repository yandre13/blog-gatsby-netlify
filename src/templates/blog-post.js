import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout } from '../components/Layout'
import SEO from '../components/SEO'

const BlogPostTemplate = ({ data, pageContext }) => {
	const post = data.mdx
	const { previous, next } = pageContext
	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description}
			/>
			<h1>{post.frontmatter.title}</h1>
			<p
				style={{
					display: `block`
				}}
			>
				{post.frontmatter.date}
			</p>
			<MDXRenderer>{post.body}</MDXRenderer>
			<hr />

			<ul
				style={{
					display: `flex`,
					flexWrap: `wrap`,
					justifyContent: `space-between`,
					listStyle: `none`,
					padding: 0
				}}
			>
				<li>
					{previous && (
						<Link to={`blog${previous.fields.slug}`} rel="prev">
							← {previous.frontmatter.title}
						</Link>
					)}
				</li>
				<li>
					{next && (
						<Link to={`blog${next.fields.slug}`} rel="next">
							{next.frontmatter.title} →
						</Link>
					)}
				</li>
			</ul>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			body
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`
