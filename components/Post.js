import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { DataContext } from '../pages/_app'
import { Parallax } from 'react-scroll-parallax';
import { LazyParalexImage, FadeImage } from './LazyImage';

const splitStringOnSlash = (string) => string ? string.split('/') : []

const Post = ({ type, textColor, heading, description, quotes, footnote, vectorImage, ...image }) => {
    const { heroimage } = useContext(DataContext)
    const headings = splitStringOnSlash(heading)
    const descriptions = splitStringOnSlash(description)
    const quotesArray = splitStringOnSlash(quotes)

    const renderHeadings = () => headings.map((h, i) =>
        <Parallax y={[10, -10]} key={ `post-h-${type}-${i}` }>
            <h3 className={ `t-6 ${textColor || 't-gold'}` }>{ h }</h3>
        </Parallax>
    )
    const renderDescriptions = () => descriptions.map((d, i) =>
        <p key={ `post-p-${type}-${i}` } className="t-8">{ d }</p>
    )

    return (
        <div className={`post post--${type}`}>
            <div className={`post__heading${type === 'hobby' ? '' : ' d-md-none'}` }>
                { renderHeadings() }
            </div>

            <div className='post__content'>
                    <div className="post__text">
                        { type !== 'hobby' && renderHeadings() }
                        { renderDescriptions() }
                        { quotesArray.map((q, i) => 
                            <p key={ `post-q-${type}-${i}` } className="t-9">{ q }</p>
                        )}
                    </div>

                    { 
                        vectorImage ?
                            <Parallax y={[-5, 10]}>
                                <img className="post__image" src={ vectorImage } />
                            </Parallax>
                        : type === 'passion' ?
                            <div className="hero-wrapper"><FadeImage image={ heroimage } baseClass="post" /></div>
                        : image && image.imageS ?
                            <LazyParalexImage 
                                y={[-5, 12]}
                                image={ image }
                                baseClass="post" />
                        : null
                    }
            </div>

            { footnote && <div className='post__footnote t-6'>{ footnote }</div> }
        </div>
    )
}

Post.defaultProps = {
    headings: '',
    description: '',
    quotes: '',
}

Post.propTypes = {
    headings: PropTypes.string,
    description: PropTypes.string,
    quotes: PropTypes.string,
}

export default Post
