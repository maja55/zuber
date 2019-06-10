import React, { useState } from 'react'
import Link from 'next/link'

export default () => {
    const [isOpen, toggleMenu] = useState(false);

    return (
        <React.Fragment>
            <header className="header">
                <img src="/static/svgs/steven_zuber.svg" alt="Stefan Zuber logo" />

                <div
                    className={ `menu-btn${isOpen ? ' open' : ''}` }
                    onClick={ () => toggleMenu(!isOpen) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
            <nav className={ `nav-list${isOpen ? ' open' : ''}` }>
                <section>
                    <img src="/static/images/zuber-hero-page@2x.png" alt="Stefan Zuber" />
                    <ul className="t-6">
                        <li><Link href="/#statistics"><a href="/#statistics">Statistics</a></Link></li>
                        <li><Link href="/#career"><a href="/life">Career</a></Link></li>
                        <li><Link href="/life"><a href="/life">Life</a></Link></li>
                        <li><Link href="/shop"><a href="/shop">Shop</a></Link></li>
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
