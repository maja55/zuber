import React, { useContext } from 'react'
import { DataContext } from '../pages/_app'
import Image from './Image'
import Loader from './Loader'

const Intro = () => {
    const { introimage } = useContext(DataContext)

    if (!introimage) return null;

    return (
        <section className="section intro" id="home">
            <img className="intro__bg-desktop" src="/static/svgs/zuber_desktop.svg" />
            <img className="intro__bg-mobile" src="/static/svgs/zuber_mobile.svg" />
            <Image baseClass="intro" image={ introimage } />
            <Loader classAdditions="intro__logo" />
        </section>
    )
}

export default Intro
