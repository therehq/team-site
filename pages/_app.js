import React from 'react'
import App, { Container } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { styledTheme } from '../utils/theme'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={styledTheme}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FEFEFE;
    padding: 0;
    margin: 0;
    background: white;
  }
  a{
    text-decoration: none;
  }
`
