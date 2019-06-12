import React, { useContext } from 'react'
import { DataContext } from '../pages/_app'
import Image from './Image'
import CountBar from './CountBar'

const data = {
    minutes: 253,
    games: 3,
    goals: 1
}

const Fifa = () => {
    const { labels, fifa } = useContext(DataContext);

    return (
        <section className="fifa">
            <div className="fifa__content">
                <div className="fifa__top t-gold t-3">
                    <div>{ labels.fifaWorldCup } 2019</div>
                    <div>{ labels.statistics }</div>
                </div>
                <Image
                    baseClase="fifa"
                    imageS = { fifa.imageS }
                    imageM = { fifa.imageM }
                    imageL = { fifa.imageL }
                />
                <p className="fifa__copy">{ fifa.copy }</p>
                <CountBar
                    baseClass="fifa"
                    items={[
                        { count: data.minutes, labelTop: labels.minutes, labelBottom: labels.played },
                        { count: data.games, labelTop: labels.games, labelBottom: labels.played },
                        { count: data.goals, labelTop: labels.goal, labelBottom: labels.scored },
                    ]}
                />
            </div>
        </section>
    )
}

export default Fifa;
