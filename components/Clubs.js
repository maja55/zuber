import React, { useContext, useState } from 'react'
import LazyLoad from 'react-lazyload';
import { Fade } from 'react-reveal';
import { DataContext } from '../pages/_app'
import Section from './Section'
import CountBar from './CountBar'
import Image from './Image';

const Clubs = () => {
    const { labels, clubs } = useContext(DataContext)

    if (!clubs || !clubs.length) return null;

    const sortedClubs = clubs.sort((a, b) => (!a.endYear || a.startYear > b.startYear || a.endYear > b.endYear) ? 1 : -1)
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
        name, logo, startYear, endYear, position,
        playerNumber, gamesCount, goalsCount, assistsCount,
    } = sortedClubs[activeClub]

    return (
        <Section title={ labels.clubCareer } baseClass="clubs" name="clubs" flexHeight observeIntersection threshold={0.4}>
            { ({ reveal }) => (
                <LazyLoad height={ 500 } offset={ 1000 }>
                    <>
                        <div className="club__top">
                            <ul className="clubs__menu t-7 t-grey">
                                { sortedClubs.map(({ name, startYear }, index) => (
                                    <Fade key={ `${name}-${index}` } bottom opposite delay={ index * 200 } duration={ 200 }>
                                        <li className={ `clubs__menu-item cta-hover${index === activeClub ? ' active t-light' : ''}` }>
                                            <button onClick={ () => onClick(index) }>
                                                { startYear } - { name }
                                            </button>
                                        </li>
                                    </Fade>
                                )) }
                            </ul>
                            <div className="club-bg__wrapper d-flex">
                                { sortedClubs.map(({ name, imageBgS, imageBgM, imageBgL }, index) => (
                                    <div key={ `${name}-${index} Stadium` } className={ `club-bg${(reveal || !fade) && index === activeClub ? ' active' : ''}` }>
                                        <Image
                                            baseClass='club-bg'
                                            alt={ `${name} Stadium` }
                                            image={ { imageS: imageBgS, imageM: imageBgM, imageL: imageBgL } }
                                        />
                                    </div>
                                )) }
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
                            <Fade bottom opposite delay={ 500 } onReveal={ () => setFade(false) }>
                                <img className="club__logo" src={ logo } alt={ `${name} Coat of Arms` } />
                            </Fade>
                            <CountBar
                                key={ `${name}-${endYear}` }
                                baseClass="club"
                                revealProps={{ delay: 500 }}
                                isVertical
                                items={[
                                    { count: gamesCount, labelTop: labels.games, labelBottom: labels.played },
                                    { count: goalsCount, labelTop: labels.goals, labelBottom: labels.scored },
                                    { count: assistsCount, labelTop: labels.goal, labelBottom: labels.assists },
                                ]}
                            />
                        </div>
                        { sortedClubs.map(({ name, imageS, imageM, imageL }, index) => (
                            <div key={ `${name}-${index} player` } className={`club-player ${(reveal || !fade) && index === activeClub ? ' active' : ''}`}>
                                <Image
                                    baseClass='club-top'
                                    alt={ `Steven Zuber in ${name}` }
                                    image={ { imageS, imageM, imageL } }
                                />
                            </div>
                        )) }
                    </>
                </LazyLoad>
            )}
        </Section>
    )
}

export default Clubs;
