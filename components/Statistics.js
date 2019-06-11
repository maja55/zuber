import React, { useContext } from 'react';
import { LabelsContext, DataContext } from '../pages/_app';
import Section from './Section';
import Image from './Image';

const Statistics = () => {
    const labels = useContext(LabelsContext);
    const { statistics } = useContext(DataContext);

    return (
        <Section title={ labels.statistics } baseClass="statistics">
            <Image
                baseClase="statistics"
                imageS={ statistics.imageS }
                imageM={ statistics.imageM }
                imageL={ statistics.imageL }
            />
            <div className="statistics__content">
                <div className="stat-left t-center">
                    <div className="stat-left__top t-6 t-outline t-light">{ labels.played }</div>
                    <div className="stat-left__bottom">
                        <div className="t-1">{ statistics.totalGamesCount }</div>
                        <div className="t-2">{ labels.games }</div>
                    </div>
                </div>
                <div className="stat-right t-gold">
                    <div className="stat-right__row">
                        <div className="t-6 t-outline t-gold">{ labels.scored }</div>
                        <div className="t-3">
                            <span>{ statistics.totalGoalsCount }</span>
                            <span> { labels.goals }</span>
                        </div>
                    </div>
                    <div className="stat-right__row">
                        <div className="t-6 t-outline t-gold">{ labels.won }</div>
                        <div className="t-3">
                            <span>{ statistics.totalTrophiesCount }</span>
                            <span> { labels.trophies }</span>
                        </div>
                    </div>
                    <div className="stat-right__row">
                        <div className="t-6 t-outline t-gold">{ labels.made }</div>
                        <div className="t-3">
                            <span>{ statistics.totalAssistsCount }</span>
                            <span> { labels.assists }</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Statistics;
