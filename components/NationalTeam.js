import React, { useContext } from 'react'
import { Fade } from 'react-reveal';
import LazyLoad from 'react-lazyload';
import { DataContext } from '../pages/_app'
import Image from './Image';
import Section from './Section'
import CountBar from './CountBar'

const NationalTeam = () => {
    const { nationalteam, labels } = useContext(DataContext)
    const { copy, assistsCount, gamesCount, goalsCount, startYear, endYear, playerNumber, position, logo, imageBwS, imageBwM, imageBwL, ...image } = nationalteam

    return (
        <Section title={ labels.internationalCareer } baseClass="national-team" name="career" flexHeight observeIntersection>
            { ({ reveal }) => (
                <>
                    <Fade bottom opposite cascade delay={ 0 }>
                        <div className="national-team__content">
                            <div className="national-team__top">
                                <img src={ logo } alt="Swiss National Team Logo"/>
                                <p>{ copy }</p>
                            </div>
                            <div className="national-team__image-wrapper">
                                <LazyLoad height={ 200 } offset={ 500 }>
                                    <Image baseClass="national-team" image={ image } />
                                    <Image
                                      baseClass="national-team"
                                      classAddition={ `national-team__bw${reveal ? ' fadeOut' : ''}` }
                                      image={ { imageS: imageBwS, imageM: imageBwM, imageL: imageBwL } }
                                    />
                                </LazyLoad>
                            </div>
                            <div className="national-team__bottom t-gold">
                                <div className="t-3 t-outline t-gold">{ startYear }-{ endYear }</div>
                                <div className="t-3">{ position } #{ playerNumber }</div>
                            </div>
                        </div>
                    </Fade>
                    <CountBar
                        baseClass="national-team"
                        items={[
                            { count: gamesCount, labelTop: labels.games, labelBottom: labels.played },
                            { count: goalsCount, labelTop: labels.goals, labelBottom: labels.scored },
                            { count: assistsCount, labelTop: labels.goal, labelBottom: labels.assists },
                        ]}
                    />
                </>
            )}
        </Section>
    )
}

export default NationalTeam;
