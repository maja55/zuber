import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { Fade } from 'react-reveal';
import { DataContext } from '../pages/_app'
import Image from './Image'

const navLinks = [
    { href: '/#home', labelKey: 'home' },
    { href: '/#statistics', labelKey: 'statistics' },
    { href: '/#career', labelKey: 'career' },
    { href: '/about', labelKey: 'life' },
    { href: '/shop', labelKey: 'shop' }
]

export const disableScrolling = () => {
    window.onscroll = () => window.scrollTo(0, 0)
}

export const enableScrolling = () => {
    window.onscroll = () => {}
}

const Navigation = () => {
    const [isOpen, toggleMenu] = useState(false)
    const { labels, heroimage, page, lang, changeLanguage } = useContext(DataContext)
    const isShop = page === 'shop'

    const onClick = () => {
        if (isOpen) { 
            enableScrolling()
        } else {
            disableScrolling()
        }

        toggleMenu(!isOpen)
    }

    const onLanguageChange = (e, lang) => {
        e.stopPropagation()
        changeLanguage(lang)
    }

    if (!labels) return null;

    return (
        <React.Fragment>
            <header className="header">
                <div className={ `menu-btn${isOpen ? ' open' : ''}${isShop ? ' dark' : ''}` }>
                    <div onClick={ onClick }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
            <nav className={ `menu${isOpen ? ' open' : ''}` } onClick={ onClick }>
                <section className="section section--menu">
                    <Image image={ heroimage } baseClass="menu" alt="Stefan Zuber" />
                    <ul className="t-6">
                        { navLinks.map(({ href, labelKey }) => (
                            <li key={ labelKey } className="cta-hover">
                                <Link href={ href }><a href={ href }>{ labels[labelKey] }</a></Link>
                            </li>
                        )) }
                        <li className="t-8 toggle-lang">
                            <button onClick={(e) => onLanguageChange(e, 'en')} className={ lang === 'en' ? 'active' : ''}>EN</button>
                            <span> | </span>
                            <button onClick={(e) => onLanguageChange(e, 'de')} className={ lang === 'de' ? 'active' : ''}>DE</button>
                        </li>
                    </ul>
                </section>
            </nav>
            <div className="page-heading">
                { 
                    isShop ?
                        <h3 className="t-6 t-grey">{ labels.shop }</h3>
                    :
                        <Link href="/">
                            <img src="/static/svgs/steven_zuber.svg" alt="Stefan Zuber logo" />
                        </Link>
                }
            </div>
        </React.Fragment>
    );
}

export default Navigation
