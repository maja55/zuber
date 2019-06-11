import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

const Biography = ({ data }) => {
    return (
        <Fragment>
            <h1>Zuber's life</h1>
        </Fragment>
    )
}

Biography.getInitialProps = async () => {
    // const res = await fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts?slug=bio&_embed', {
    //   method: 'get',
    //   mode: 'no-cors',
    // })
    // const json = await res.json()

    return { data: {} }
};

Biography.propTypes = {
  data: PropTypes.shape({})
}

export default Biography
