import React from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { ThemeProvider, jsx, Styled } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'
import Header from './header'
import components from '../gatsby-plugin-theme-ui/components'

import 'normalize.css'
import '../utils/font-face.css'

const isDev = process.env.NODE_ENV === 'development'
if (isDev) {
  import('tachyons-debug')
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme} compoments={components}>
    <Styled.root>
      <Header siteTitle="Gatsby theme starter" />
      <main>{children}</main>
    </Styled.root>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
