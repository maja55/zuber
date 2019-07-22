import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { DataContext } from '../pages/_app'
import { Parallax } from 'react-scroll-parallax';
import LazyImage, { LazyParalexImage } from './LazyImage';

const Post = ({ type, textColor, headings, description, quotes, footnote, vectorImage, image }) => {
    const { heroImage } = useContext(DataContext)
    const renderHeadings = () => headings.map((h, i) =>
        <Parallax y={[10, -10]} key={ `post-h-${type}-${i}` }>
            <h3 className={ `t-6 ${textColor || 't-gold'}` }>{ h }</h3>
        </Parallax>
    )
    const renderDescriptions = () => description.map((d, i) =>
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
                        { quotes.map((q, i) => 
                            <p key={ `post-q-${type}-${i}` } className="t-9">{ q }</p>
                        )}
                    </div>

                    { 
                        vectorImage ?
                            <Parallax y={[-5, 10]}>
                                <img className="post__image" src={ vectorImage } />
                            </Parallax>
                        : type === 'passion' ?
                            <LazyImage image={ heroImage } baseClass="post" />
                        : image && image.imageS ?
                            <LazyParalexImage 
                                y={[-5, 10]}
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
    headings: [],
    description: [],
    quotes: [],
}

Post.propTypes = {
    headings: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.arrayOf(PropTypes.string),
    quotes: PropTypes.arrayOf(PropTypes.string),
}

export default Post
