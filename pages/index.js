import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import data from '../data.json'
import Statistics from '../components/Statistics'
import NationalTeam from '../components/NationalTeam'
import Fifa from '../components/Fifa'
import Clubs from '../components/Clubs'
import Sponsor from '../components/Sponsor'


const Homepage = () => {
    return (
        <div className="bg-dark t-light">
            <section className="intro">
                <img className="intro__image" src="/static/images/zuber-intro@2x.png" alt="Steven Zuber" />
                <img className="intro__logo" src="/static/svgs/lion.svg" alt="Zuber Coat Of Arms" />
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
