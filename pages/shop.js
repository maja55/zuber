import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

const Shop = ({ data }) => {
    return (
        <Fragment>
            <h1>Zuber Shop!</h1>
        </Fragment>
    )
}

Shop.getInitialProps = async () => {
    // const res = await fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts?slug=shop&_embed', {
    //   method: 'get',
    //   mode: 'no-cors',
    // })
    // const json = await res.json()

    return { data: {} }
};

Shop.propTypes = {
  data: PropTypes.shape({})
}

export default Shop
