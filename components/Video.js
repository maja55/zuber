import React, { useContext } from 'react'
import LazyLoad from 'react-lazyload';
import { Fade } from 'react-reveal';
import { DataContext } from '../pages/_app'

const Video = () => {
      const { video } = useContext(DataContext)
      if (!video) return null;
      const { url } = video;
      if (!url) return null;

      return (
        <LazyLoad height={ 400 } offset={ 500 }>
            <section className="video section section--flex">
                <Fade bottom opposite>
                    <iframe width="100%" height="600px" src={ url } />
                </Fade>
            </section>
        </LazyLoad>
    )
}

export default Video
