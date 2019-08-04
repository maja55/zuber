import React, { useContext } from 'react';
import { DataContext } from '../pages/_app';
import { Fade } from 'react-reveal';
import Section from './Section';

const Statistics = () => {
    const { labels, statistics } = useContext(DataContext);

    if (!statistics) return null;

    const { totalGamesCount, totalGoalsCount, totalAssistsCount, totalTrophiesCount, ...image } = statistics

    return (
        <Section title={ labels.statistics } baseClass="statistics" name="statistics" flexHeight observeIntersection>
            { ({ reveal, scrollUp }) => (
                <>
                    <Fade left opposite when={ reveal } mirror={ scrollUp } duration={ 500 } distance="1000px" delay={ 0 }>
                        <img
                            className="statistics__image"
                            srcSet={ `
                                ${image.imageS} 768w,
                                ${image.imageM} 1200w,
                                ${image.imageL} 1440w,
                            ` }
                            sizes="(max-width: 768px) 700px,
                                (max-width: 1200px) 1000px,
                                1440px"
                            src={ image.imageS }
                        />
                    </Fade>
                    <div className="statistics__content">
                        <div className="stat-left t-center">
                            <Fade bottom opposite delay={ 50 } duration={ 600 }>
                                <div className="stat-left__top t-6 t-outline t-light">{ labels.played }</div>
                            </Fade>
                            <div className="stat-left__bottom">
                                <Fade bottom opposite delay={ 100 } duration={ 600 }>
                                    <div className="t-1">{ totalGamesCount }</div>
                                </Fade>
                                <Fade bottom opposite delay={ 300 } duration={ 600 }>
                                    <div className="t-2">{ labels.games }</div>
                                </Fade>
                            </div>
                        </div>
                        <div className="stat-right t-gold">
                            <Fade bottom opposite cascade delay={ reveal ? 500 : 200 } duration={ 600 }>
                                <div className="stat-right__row">
                                    <div className="t-6 t-outline t-gold">{ labels.scored }</div>
                                    <div className="t-3">
                                        <span>{ totalGoalsCount }</span>
                                        <span> { labels.goals }</span>
                                    </div>
                                </div>
                                <div className="stat-right__row">
                                    <div className="t-6 t-outline t-gold">{ labels.won }</div>
                                    <div className="t-3">
                                        <span>{ totalTrophiesCount }</span>
                                        <span> { labels.trophies }</span>
                                    </div>
                                </div>
                                <div className="stat-right__row">
                                    <div className="t-6 t-outline t-gold">{ labels.made }</div>
                                    <div className="t-3">
                                        <span>{ totalAssistsCount }</span>
                                        <span> { labels.assists }</span>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </>
            ) }
        </Section>
    )
}

export default Statistics;
