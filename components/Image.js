import React from 'react'

const Image = ({ baseClase, imageS, imageM, imageL, alt }) => (
    <img
        className={ `${baseClase}__image` }
        srcSet={ `
            ${imageS} 768w,
            ${imageM} 1200w,
            ${imageL} 1440w,
        ` }
        sizes="(max-width: 768px) 700px,
            (max-width: 1200px) 1000px,
            1440px"
        src={ imageL }
        alt={ alt }
    />
);

export default Image;
