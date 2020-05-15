const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === 'MarkdownRemark') {
		const basename = path.basename(node.fileAbsolutePath, '.md')
		let slug = basename.substring(11)
		if (!slug) {
			slug = basename
		}

		createNodeField({
			node,
			name: 'slug',
			value: slug
		})
	}
}

module.exports.createPages = async ({ graphql, actions }) => {
	const {createPage } = actions

	// Get path to template
	const blogTemplate = path.resolve('./src/templates/blog.js')
	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	if (res.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.')
		return
	}

	res.data.allMarkdownRemark.edges.forEach((edge) => {
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug
			}
		})
	})
}