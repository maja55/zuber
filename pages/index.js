import React from 'react'
import Statistics from '../components/Statistics'
import NationalTeam from '../components/NationalTeam'
import Fifa from '../components/Fifa'
import Clubs from '../components/Clubs'
import Sponsor from '../components/Sponsor'
import Video from '../components/Video'
import Intro from '../components/Intro'

const Homepage = () => (
    <div className="bg-dark t-light">
        <Intro />
        <Statistics />
        <NationalTeam />
        <Fifa />
        <Clubs />
        <Video />
        <Sponsor />
    </div>
)

Homepage.id = 'home'

export default Homepage
