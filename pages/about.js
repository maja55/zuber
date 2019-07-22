import React, { useContext } from 'react'
import { DataContext } from './_app'
import Section from '../components/Section'
import Post from '../components/Post'

const About = () => {
    const content = useContext(DataContext).about
    const sectionKeys = Object.keys(content)

    return (
        <div className="about">
            {
                sectionKeys.map((sectionKey) => {
                    const { title, posts } = content[sectionKey]
                    const bgColor = sectionKey === 'passion' ? ' bg-light' : '';
                    const textColor = sectionKey === 'passion' ? ' t-dark' : sectionKey === 'love' ? ' t-gold' : ''

                    return (
                        <Section
                            key={ sectionKey }
                            title={ title }
                            baseClass={ `${sectionKey}${bgColor}${textColor} mb-0` }
                            titleClass={ sectionKey === 'passion' && 't-dark' }
                            flexHeight
                            disableFade
                        >
                            <div className="post-list">
                                { posts.map((post, i) => 
                                    <Post
                                        { ...post }
                                        key={ `${sectionKey}-${i}` }
                                        type={ sectionKey }
                                        textColor={ textColor }
                                    />
                                ) }
                            </div>
                        </Section>
                    )
                })
            }
        </div>
    )
}

export default About
