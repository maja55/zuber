import React, { useContext, useState } from 'react'
import { Fade } from 'react-reveal';
import { DataContext } from '../pages/_app'
import Section from './Section'
import CountBar from './CountBar'
import { LazyFadeImage } from './LazyImage';

const Clubs = () => {
    const { labels, clubs } = useContext(DataContext)

    if (!clubs || !clubs.length) return null;

    const sortedClubs = clubs.sort((a, b) => (a.startYear > b.startYear) ? 1 : -1)
    const [activeClub, setActiveClub ] = useState(sortedClubs.length - 1)
    const [fade, setFade ] = useState(true)
    const [transitionClass, setTransitionClass ] = useState('')
    const onClick = (index) => {
        if (fade) setFade(false)
        setTransitionClass('slide')
        setTimeout(() => setTransitionClass(''), 500)
        setActiveClub(index)
    }
    const { 
        name, coatOfArmsKey, startYear, endYear, position,
        playerNumber, gamesCount, goalsCount, assistsCount,
        backgroundImage, imageBgS, imageBgM, imageBgL, ...image
    } = sortedClubs[activeClub]

    return (
        <Section title={ labels.clubCareer } baseClass="clubs" flexHeight>
            <div className="club__top">
                <ul className="clubs__menu t-7 t-grey">
                    { sortedClubs.map(({ name, startYear }, index) => (
                        <Fade key={ name } bottom opposite delay={ index * 200 } duration={ 200 }>
                            <li className={ `clubs__menu-item cta-hover${index === activeClub ? ' active t-light' : ''}` }>
                                <button onClick={ () => onClick(index) }>
                                    { startYear } - { name }
                                </button>
                            </li>
                        </Fade>
                    )) }
                </ul>
                <div className={ `club-bg ${transitionClass}${fade ? '' : ' hide'}` }>
                    <LazyFadeImage
                        baseClass='club-bg'
                        alt={ `${name} Stadium` }
                        image={ { imageS: imageBgS, imageM: imageBgM, imageL: imageBgL } }
                        revealProps={{ delay: 1000 }}
                    />
                </div>
                <Fade bottom opposite cascade delay={ 500 }>
                    <div className={`club__copy t-3 ${transitionClass}`}>
                        <div className="club__name">{ name }</div>
                        <div>{ startYear }-{ endYear }</div>
                        <div>{ position } #{ playerNumber }</div>
                    </div>
                </Fade>
            </div>
            <div className={`club__bottom ${transitionClass}`}>
                <Fade bottom opposite delay={ 700 }>
                    <img className="club__logo" src={ `/static/svgs/${coatOfArmsKey}.svg` } alt={ `${name} Coat of Arms` } />
                </Fade>
                <CountBar
                    baseClass="club"
                    revealProps={{ delay: 700, disabled: !fade }}
                    isVertical
                    items={[
                        { count: gamesCount, labelTop: labels.games, labelBottom: labels.played },
                        { count: goalsCount, labelTop: labels.goals, labelBottom: labels.scored },
                        { count: assistsCount, labelTop: labels.goal, labelBottom: labels.assists },
                    ]}
                />
            </div>
            <div className={`club-player ${transitionClass}`}>
                <LazyFadeImage
                    baseClass='club-top'
                    alt={ `Steven Zuber in ${name}` }
                    image={ image }
                    revealProps={{ delay: 700 }}
                />
            </div>
        </Section>
    )
}

export default Clubs;
