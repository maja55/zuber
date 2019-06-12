import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { DataContext } from '../pages/_app';

const navLinks = [
    { href: '/#statistics', labelKey: 'statistics' },
    { href: '/#career', labelKey: 'career' },
    { href: '/life', labelKey: 'life' },
    { href: '/shop', labelKey: 'shop' }
]

const disableScrolling = () => {
    window.onscroll = () => window.scrollTo(0, 0)
}

const enableScrolling = () => {
    window.onscroll = () => {}
}

const Navigation = () => {
    const [isOpen, toggleMenu] = useState(false)
    const { labels } = useContext(DataContext)

    const onClick = () => {
        if (isOpen) { 
            enableScrolling()
        } else {
            disableScrolling()
        }

        toggleMenu(!isOpen)
    }

    return (
        <React.Fragment>
            <header className="header">
                <img src="/static/svgs/steven_zuber.svg" alt="Stefan Zuber logo" />

                <div
                    className={ `menu-btn${isOpen ? ' open' : ''}` }
                    onClick={ onClick }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
            <nav className={ `menu${isOpen ? ' open' : ''}` } onClick={ onClick }>
                <section className="section--menu">
                    <img src="/static/images/zuber-hero-page@2x.png" alt="Stefan Zuber" />
                    <ul className="t-6">
                        {
                            navLinks.map(({ href, labelKey }) => (
                                <li key={ labelKey }>
                                    <Link href={ href }>
                                        <a className="cta-hover" href={ href }>{ labels[labelKey] }</a>
                                    </Link>
                                </li>
                            ))
                        }
                        <li className="t-8">
                            <button onClick={() => {}}>EN</button>
                            <span> | </span>
                            <button onClick={() => {}}>DE</button>
                        </li>
                    </ul>
                </section>
            </nav>
        </React.Fragment>
    );
}

export default Navigation
