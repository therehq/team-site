import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { styledTheme } from '../utils/theme'
import { ExampleBoundary } from '../components/Sentry'

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
          <title>There — Clearer, smoother remote work</title>

          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/favicons/favicon.ico"
          />
        </Head>

        <ExampleBoundary>
          <ThemeProvider theme={styledTheme}>
            <>
              <GlobalStyle />
              <Component {...pageProps} />
            </>
          </ThemeProvider>
        </ExampleBoundary>
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
    font-family: ${p => p.theme.fontText}, ${p => p.theme.fontSystem};
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
