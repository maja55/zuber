import React, { useContext } from 'react'
import { LabelsContext, DataContext } from '../pages/_app'
import Image from './Image'
import Section from './Section'
import CountBar from './CountBar'

const NationalTeam = () => {
    const labels = useContext(LabelsContext);
    const { nationalTeam } = useContext(DataContext);

    return (
        <Section title={ labels.internationalCareer } baseClass="national-team">
            <div className="national-team__content">
                <div className="national-team__top">
                    <img src="/static/svgs/swiss-national-team.svg" alt="Swiss National Team Logo"/>
                    <p>{ nationalTeam.copy }</p>
                </div>
                <Image
                    baseClase="national-team"
                    imageS = { nationalTeam.imageS }
                    imageM = { nationalTeam.imageM }
                    imageL = { nationalTeam.imageL }
                />
                <div className="national-team__bottom t-gold">
                    <div className="t-3 t-outline t-gold">{ nationalTeam.startYear }-{ nationalTeam.endYear }</div>
                    <div className="t-3">{ nationalTeam.position } #{ nationalTeam.playerNumber }</div>
                </div>
            </div>
            <CountBar
                baseClass="national-team"
                items={[
                    { count: nationalTeam.gamesCount, labelTop: labels.games, labelBottom: labels.played },
                    { count: nationalTeam.goalsCount, labelTop: labels.goals, labelBottom: labels.scored },
                    { count: nationalTeam.assistsCount, labelTop: labels.goal, labelBottom: labels.assists },
                ]}
            />
        </Section>
    )
}

export default NationalTeam;
