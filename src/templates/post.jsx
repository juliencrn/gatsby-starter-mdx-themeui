/** @jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Styled, Flex, Box, jsx } from 'theme-ui'

import Layout from '../components/layout'
import Container from '../components/container'

export default function PostTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Container>
        <Flex sx={{ mx: -3 }}>
          <Box
            sx={{
              width: ['100%', '50%'],
              backgroundColor: 'saumon',
              p: 3,
              m: 3
            }}
          >
            Box
          </Box>
          <Box
            sx={{
              width: ['100%', '50%'],
              backgroundColor: 'saumon',
              p: 3,
              m: 3
            }}
          >
            Box
          </Box>
        </Flex>

        <Styled.h2 sx={{ fontFamily: 'makina' }}>Makina</Styled.h2>

        <Styled.h1>{mdx.frontmatter.title}</Styled.h1>

        <Styled.h2>MDX is following</Styled.h2>
        <div
          sx={{
            borderColor: 'saumon',
            borderStyle: 'solid',
            borderWidth: 4,
            p: 3
          }}
        >
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </Container>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
