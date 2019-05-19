import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
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
        <Head>
          <title>There — Remote teams' home.</title>
        </Head>
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
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #FEFEFE;
    padding: 0;
    margin: 0;
    background: white;
  }
  a{
    text-decoration: none;
  }
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { 
    *{
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`
