import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload';
import { Fade } from 'react-reveal';
import { Parallax } from 'react-scroll-parallax';
import Image from './Image'

const defaulteImgRevealProps = {
    bottom: true,
    opposite: true,
    delay: 100,
    duration: 500,
    distance: "1000px"
}

const LazyImage = (props) => (
    <LazyLoad height={ 200 } offset={ 1000 }>
        <Fade top distance={ '20px' }>
            <Image {...props}/>
        </Fade>
    </LazyLoad>
)

export const LazyParalexImage = ({ y, ...props }) => (
    <LazyLoad height={ 200 } offset={ 1000 }>
        <Parallax y={ y }>
            <Fade top distance={ '20px' }>
                <Image {...props}/>
            </Fade>
        </Parallax>
    </LazyLoad>
)

export const LazyFadeImage = ({ revealProps, ...props }) => (
    <LazyLoad height={ 200 } offset={ 1000 }>
        <Fade {...{ ...defaulteImgRevealProps, ...revealProps }}>
            <Image { ...props }/>
        </Fade>
    </LazyLoad>
)

export const FadeImage = ({ revealProps, ...props }) => (
    <Fade {...{ ...defaulteImgRevealProps, ...revealProps }}>
        <Image { ...props }/>
    </Fade>
)

LazyFadeImage.defaultProps = {
    image: {},
    alt: '',
    baseClass: '',
    revealProps: defaulteImgRevealProps,
}

LazyFadeImage.propTypes = {
    image: PropTypes.shape({
        imageS: PropTypes.string,
        imageM: PropTypes.string,
        imageL: PropTypes.string,
    }),
    alt: PropTypes.string,
    baseClass: PropTypes.string,
    revealProps: PropTypes.shape({
        delay: PropTypes.number,
        bottom: PropTypes.bool,
        left: PropTypes.bool,
        duration: PropTypes.number,
        distance: PropTypes.string,
    }),
}

export default LazyImage;
