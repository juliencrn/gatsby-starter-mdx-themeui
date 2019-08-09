import React from 'react'
// import { graphql } from 'gatsby'
import { Styled } from 'theme-ui'
// import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

// export const query = graphql`
//   query IndexPage {
//     allMdx {
//       edges {
//         node {
//           fileAbsolutePath
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Styled.h1>Hi people :)</Styled.h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Container>
    </Layout>
  )
}

export default IndexPage
