import React, { useContext } from 'react'
import { LabelsContext, DataContext } from '../pages/_app'
import Image from './Image'
import Section from './Section'
import CountBar from './CountBar'

const Clubs = () => {
    const labels = useContext(LabelsContext);
    const { clubs } = useContext(DataContext);

    return (
        <Section title={ labels.clubCareer } baseClass="clubs">
            <div className="club__content">
                <div className="club__top">
                    <img src="/static/svgs/swiss-club.svg" alt="Swiss National Team Logo"/>
                    <p>{ clubs.copy }</p>
                </div>
                <Image
                    baseClase="club"
                    imageS = { clubs.imageS }
                    imageM = { clubs.imageM }
                    imageL = { clubs.imageL }
                />
                <div className="club__bottom t-gold">
                    <div className="t-3 t-outline t-gold">{ clubs.startYear }-{ clubs.endYear }</div>
                    <div className="t-3">{ clubs.position } #{ clubs.playerNumber }</div>
                </div>
            </div>
            <CountBar
                baseClass="club"
                items={[
                    { count: clubs.gamesCount, labelTop: labels.games, labelBottom: labels.played },
                    { count: clubs.goalsCount, labelTop: labels.goals, labelBottom: labels.scored },
                    { count: clubs.assistsCount, labelTop: labels.goal, labelBottom: labels.assists },
                ]}
            />
        </Section>
    )
}

export default Clubs;
