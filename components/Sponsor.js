import React, { useContext } from 'react'
import { Fade } from 'react-reveal';
import { DataContext } from '../pages/_app'
import Image from './Image'

const Sponsor = () => {
    const { sponsor } = useContext(DataContext)
    if (!sponsor) return null;
    const { title, productName, description, ...image } = sponsor;

    return (
        <section className="section sponsor section--flex">
            <Fade bottom opposite delay={ 250 } duration={ 600 }>
                <img className="sponsor__logo" src="/static/svgs/nike.svg" alt="Nike Logo"/>
            </Fade>

            <div className="sponsor__content">
                <Fade bottom opposite cascade delay={ 0 } duration={ 600 }>
                    <div className="sponsor__title t-3 t-gold">
                        <div className="t-outline t-gold">{ title }</div>
                        <div>{ productName }</div>
                    </div>
                </Fade>

                <Fade bottom opposite delay={ 200 } duration={ 600 }>
                    <p className="sponsor__copy-lg">{ description }</p>
                </Fade>
            </div>

            <Fade bottom opposite delay={ 400 } duration={ 600 }>
                <Image baseClass="sponsor" image = { image } />
            </Fade>

            <p className="sponsor__copy">{ description }</p>
        </section>
    )
}

export default Sponsor;
