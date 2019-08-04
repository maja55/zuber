import React, { useContext } from 'react'
import { Fade } from 'react-reveal';
import { DataContext } from '../pages/_app'
import Image from '../components/Image'

const Intro = () => {
    const { introimage } = useContext(DataContext)

    return (
        <section className="section intro">
            <img className="intro__bg-desktop" src="/static/svgs/zuber_desktop.svg" />
            <img className="intro__bg-mobile" src="/static/svgs/zuber_mobile.svg" />
            <Image baseClass="intro" image={ introimage } />
            <Fade bottom delay={ 2000 }>
                <img className="intro__logo" src="/static/svgs/lion.svg" alt="Zuber Coat Of Arms" />
            </Fade>
        </section>
    )
}

export default Intro
