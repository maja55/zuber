import React, { useState, useEffect, useRef } from 'react'
import { Fade } from 'react-reveal';

const createObserver = (el, handleIntersect) => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    };
    const observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(el);
}

const Section = ({ baseClass, titleClass, title, children, flexHeight, name, observeIntersection, disableFade }) => {
    const [state, setState] = useState({ reveal: false, y: null, scrollUp: false })
    const sectionRef = useRef()

    useEffect(() => {
        if (sectionRef.current && observeIntersection) {
            createObserver(sectionRef.current, (entries) => {
                const { isIntersecting, boundingClientRect } = entries[0]
                const { y } = boundingClientRect

                setState(prevState => ({
                    y,
                    reveal: isIntersecting,
                    scrollUp: prevState.y && y !== prevState.y ? y > prevState.y : prevState.scrollUp
                }))
            })
        }
    }, [])

    if (name === 'statistics') {}

    return (
        <section className={ `${ baseClass } section${flexHeight ? ' section--flex' : ''}` } id={ name }>
            { disableFade && title ?
                <h3 className={ `section-title t-6 t-grey ${titleClass}` }>{ title }</h3>
            :
                <Fade bottom opposite delay={ 0 }>
                    { title &&  <h3 className={ `section-title t-6 t-grey ${titleClass}` }>{ title }</h3> }
                </Fade>
            }
            <div ref={ sectionRef }>
                { typeof children === 'function' ? children(state) : children }
            </div>
        </section>
    )
}

export default Section
