import React from 'react'
import App, { Container } from 'next/app'
import Head from '../components/Head'
import Navigation from '../components/Navigation'
import "../scss/style.scss"

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
        <Head />
        <Navigation key="navigation" />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
