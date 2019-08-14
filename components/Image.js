import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ baseClass, classAddition, image={}, alt }) => (
    <img
        className={ `${baseClass}__image ${classAddition ? classAddition : ''}` }
        src={ image.imageS }
        sizes="(max-width: 768px) 100vw, 75vw"
        srcSet={ `${image.imageS} 960w, ${image.imageM} 1536w, ${image.imageL} 2400w` }
        alt={ alt }
    />
)

Image.defaultProps = {
    image: {},
    alt: '',
    baseClass: '',
}

Image.propTypes = {
    image: PropTypes.shape({}),
    alt: PropTypes.string,
    baseClass: PropTypes.string,
}

export default Image;
