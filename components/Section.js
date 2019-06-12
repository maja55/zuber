import React from 'react'

const Section = ({ baseClass, title, children, flexHeight }) => (
    <section className={ `${ baseClass }${flexHeight ? 'section--flex' : ''}` }>
        { title &&  <h3 className="section-title t-6 t-grey">{ title }</h3> }
        { children }
    </section>
)

export default Section
