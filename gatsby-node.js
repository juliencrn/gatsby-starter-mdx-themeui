const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // We only want to operate on `Mdx` nodes.
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({ name: 'slug', node, value: `${value}` })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Filter posts only
  const postsRegex = RegExp(/(blog)\/.*\.md$/)
  const posts = result.data.allMdx.edges.filter(({ node }) =>
    postsRegex.test(node.fileAbsolutePath)
  )

  // We'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.jsx`),
      // We can use the values in this context in
      context: { id: node.id, layout: 'post' }
    })
  })
}
