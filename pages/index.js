import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Navigation from '../components/Navigation'

class Homepage extends Component {
  static async getInitialProps () {

    const response = await fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts?category=home', { 
      method: 'get',
      mode: 'no-cors',
    })

    const posts = await response.json()

    console.log(response, posts);
    return { posts }
  }


  render() {
    const { line1, line2, line3, line4, bgImage, topImage } = this.props.posts[0].acf;

    return (
      <Fragment>
        <Navigation/>
        <header>
          <h3>{ line1 }</h3>
          <h3>{ line2 }</h3>
          <h3>{ line3 }</h3>
          <h3>{ line4 }</h3>
        </header>
        <img src={ bgImage } alt='football' />
        <img src={ topImage } alt='Zuber' />
      </Fragment>
    )
  }
}

Homepage.defaultProps = {
  posts: []
}

Homepage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    acf: PropTypes.shape({})
  }))
}

export default Homepage


// unirest.get("https://api-football-v1.p.rapidapi.com/v2/players/team/172")
// .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "d828e39e4fmsh455212f83b68e3fp10010fjsnb96876cf0453")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });