import React, { useContext } from 'react'
import { DataContext } from '../pages/_app'
import Image from './Image'

const Sponsor = () => {
    const { sponsor } = useContext(DataContext);

    return (
        <section className="sponsor section--flex">
            <img className="sponsor__logo" src="/static/svgs/nike.svg" alt="Nike Logo"/>

            <div className="sponsor__content">
                <div className="sponsor__title t-3 t-gold">
                    <div className="t-outline t-gold">{ sponsor.title }</div>
                    <div>{ sponsor.productName }</div>
                </div>

                <p className="sponsor__copy-lg">{ sponsor.description }</p>
            </div>

            <Image
                baseClase="sponsor"
                imageS = { sponsor.productImageS }
                imageM = { sponsor.productImageM }
                imageL = { sponsor.productImageL }
            />

            <p className="sponsor__copy">{ sponsor.description }</p>
        </section>
    )
}

export default Sponsor;
