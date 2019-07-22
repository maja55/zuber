import React, { useContext, useState } from 'react'
import { Fade } from 'react-reveal';
import { DataContext } from '../pages/_app'
import Section from './Section';
import CountBar from './CountBar'
import { LazyFadeImage } from './LazyImage';

const Fifa = () => {
    const { labels, fifa } = useContext(DataContext);
    const { copy, image, minutesCount, gamesCount, goalsCount } = fifa

    return (
        <Section baseClass="fifa" name="fifa" flexHeight>
            <div className="fifa__content">
                <Fade bottom opposite cascade delay={ 50 }>
                    <div className="fifa__top t-gold t-3">
                        <div>{ labels.fifaWorldCup } 2019</div>
                        <div>{ labels.statistics }</div>
                    </div>
                </Fade>
                <LazyFadeImage baseClass="fifa" image={ image } />
                <Fade bottom opposite delay={ 100 }>
                    <p className="fifa__copy">{ copy }</p>
                </Fade>
                <CountBar
                    baseClass="fifa"
                    items={[
                        { count: minutesCount, labelTop: labels.minutes, labelBottom: labels.played },
                        { count: gamesCount, labelTop: labels.games, labelBottom: labels.played },
                        { count: goalsCount, labelTop: labels.goal, labelBottom: labels.scored },
                    ]}
                />
            </div>
        </Section>
    )
}

export default Fifa;
