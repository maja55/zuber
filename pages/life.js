import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Navigation from '../components/Navigation'

class Biography extends Component {
  static async getInitialProps () {

    const response = await fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts?slug=bio&_embed', { 
      method: 'get',
      mode: 'no-cors',
    })

    const posts = await response.json()

    console.log(response, posts);
    return { posts }
  }


  render() {
    return (
      <Fragment>
        <Navigation/>
        <h1>Our Bio Page!</h1>
        <ul>
          {
            this.props.posts.map((post) => <li key={ post.id }>{ post.title.rendered }{ post.content.rendered }</li>)
          }
        </ul>
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
