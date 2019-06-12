import React, { useContext, useState } from 'react'
import { DataContext } from '../pages/_app'
import Image from './Image'
import Section from './Section'
import CountBar from './CountBar'

const Clubs = () => {
    const { labels, clubs } = useContext(DataContext)
    const [activeClub, setActiveClub ] = useState(clubs.length - 1)
    const club = clubs[activeClub]

    return (
        <Section title={ labels.clubCareer } baseClass="clubs">
            <div className="club__top">
                <ul className="clubs__menu t-7 t-grey">
                    { clubs.map(({ name, startYear }, index) => (
                        <li key={ name } className={ `clubs__menu-item cta-hover${index === activeClub ? ' active t-light' : ''}` }>
                            <button onClick={ () => setActiveClub(index) }>
                                { startYear } - { name }
                            </button>
                        </li>
                    )) }
                </ul>
                <Image
                    baseClase="club-bg"
                    alt={ `${club.name} Stadium` }
                    imageS = { club.backgroundImageS }
                    imageM = { club.backgroundImageM }
                    imageL = { club.backgroundImageL }
                />
                <div className="club__copy t-3">
                    <div className="club__name">{ club.name }</div>
                    { club.addition && <div>{ club.addition }</div> }
                    <div>{ club.startYear }-{ club.endYear }</div>
                    <div>{ club.position } #{ club.playerNumber }</div>
                </div>
            </div>
            <div className="club__bottom">
                <img className="club__logo" src={ `/static/svgs/${club.coatOfArmsKey}.svg` } alt={ `${club.name} Coat of Arms` } />
                <CountBar
                    baseClass="club"
                    isVertical
                    items={[
                        { count: club.gamesCount, labelTop: labels.games, labelBottom: labels.played },
                        { count: club.goalsCount, labelTop: labels.goals, labelBottom: labels.scored },
                        { count: club.assistsCount, labelTop: labels.goal, labelBottom: labels.assists },
                    ]}
                />
            </div>
            <Image
                baseClase="club-top"
                alt={ `Steven Zuber in ${club.name}` }
                imageS = { club.playerImageS }
                imageM = { club.playerImageM }
                imageL = { club.playerImageL }
            />
        </Section>
    )
}

export default Clubs;
