import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Navigation from '../components/Navigation'

class Biography extends Component {
  static async getInitialProps () {

    // const response = await fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts?slug=bio&_embed', { 
    //   method: 'get',
    //   mode: 'no-cors',
    // })

    // if (response) return { posts: await response.json() }

    return { posts: [] }
  }


  render() {
    return (
      <Fragment>
        <h1>Our Bio Page!</h1>
      </Fragment>
    )
  }
}

Biography.defaultProps = {
  posts: []
}

Biography.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Biography
