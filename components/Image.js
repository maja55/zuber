import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ baseClass, classAddition, image={}, alt }) => (
    <img
        className={ `${baseClass}__image ${classAddition}` }
        srcSet={ `
            ${image.imageS} 768w,
            ${image.imageM} 1200w,
            ${image.imageL} 1440w,
        ` }
        sizes="(max-width: 768px) 700px,
            (max-width: 1200px) 1000px,
            1440px"
        src={ image.imageL }
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
