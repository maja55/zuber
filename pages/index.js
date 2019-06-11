import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import data from '../data.json'
import Section from '../components/Section'
import Statistics from '../components/Statistics'
import NationalTeam from '../components/NationalTeam'
import Fifa from '../components/Fifa'
import Clubs from '../components/Clubs'

const Homepage = ({ data, labels }) => {
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

            {/* video */}

            {/* sponsor */}

            {/* footer */}
        </div>
    )
}

Homepage.getInitialProps = async () => {
    // const res = await fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts?category=home', {
    //   method: 'get',
    //   mode: 'no-cors',
    // })
    // const json = await res.json()

    return { data: data.homepage, labels: data.labels }
};

Homepage.propTypes = {
    data: PropTypes.shape({})
}

export default Homepage


// unirest.get("https://api-football-v1.p.rapidapi.com/v2/players/team/172")
// .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "d828e39e4fmsh455212f83b68e3fp10010fjsnb96876cf0453")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });