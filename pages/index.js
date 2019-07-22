import React from 'react'
import fetch from 'isomorphic-unfetch'
import { Fade } from 'react-reveal';
import Statistics from '../components/Statistics'
import NationalTeam from '../components/NationalTeam'
import Fifa from '../components/Fifa'
import Clubs from '../components/Clubs'
import Sponsor from '../components/Sponsor'


const Homepage = () => {
    return (
        <div className="bg-dark t-light">
            <section className="section intro">
                <img className="intro__bg-desktop" src="/static/svgs/zuber_desktop.svg" />
                <img className="intro__bg-mobile" src="/static/svgs/zuber_mobile.svg" />
                <img className="intro__image" src="/static/images/zuber-intro@2x.png" alt="Steven Zuber" />
                <Fade bottom delay={ 2000 }>
                    <img className="intro__logo" src="/static/svgs/lion.svg" alt="Zuber Coat Of Arms" />
                </Fade>
            </section>
            <Statistics />
            <NationalTeam />
            <Fifa />
            <Clubs />
            {/* <section className="video section--flex">
                <iframe width="100%" height="600px" src={ `https://www.youtube.com/embed/${data.videoId}?autoplay=1?controls=0` } />
            </section> */}
            <Sponsor />
        </div>
    )
}

export default Homepage
