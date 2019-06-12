import React, { useContext } from 'react'
import { DataContext } from '../pages/_app';

const Footer = () => {
    const { labels, footer, page } = useContext(DataContext)
    const { socials, email, copyright } = footer

    return (
        <footer className={ page === 'Homepage' ? 't-grey' : '' }>
            <section className='section--flex site-footer'>
                <div className="site-footer__social">
                    <div>{ labels.socialLinks }</div>
                    <ul className="site-footer__social-links">
                        { Object.keys(socials).map((label, index, array) => (
                            <li>
                                <a href={ socials[label] }>{ label }</a>
                                { index !== array.length - 1 && <span className='divider'>|</span> }
                            </li>
                        )) }
                    </ul>
                </div>
                <div className="site-footer__info">
                    <a href={ `mailto:${email}` }>{ email }</a>
                    <div>{ copyright }</div>
                </div>
            </section>
        </footer>
    );
}

export default Footer
