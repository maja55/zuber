import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import data from '../data.json'

class Homepage extends Component {
  static getInitialProps () {
    // fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts?category=home', {
    //   method: 'get',
    //   mode: 'no-cors',
    // }).then((response) => {
    //   response.json().then((r) => ({ posts: r }))
    // }).catch(() => {
    //   return { posts: data.homepage }
    // })

    return { posts: data.homepage }
  }


  render() {
    const { statistics } = this.props.posts;

    return (
      <div className="bg-dark">
        <section className="intro">
          <img className="intro__image" src="/static/images/zuber-intro@2x.png" alt="Steven Zuber" />
        </section>
      </div>
    )
  }
}

Homepage.propTypes = {
  posts: PropTypes.shape({})
}

export default Homepage


// unirest.get("https://api-football-v1.p.rapidapi.com/v2/players/team/172")
// .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "d828e39e4fmsh455212f83b68e3fp10010fjsnb96876cf0453")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });