import React from 'react'

const Section = ({ baseClass, title, children }) => (
    <section className={ baseClass }>
        { title &&  <h3 className="section-title t-6 t-grey">{ title }</h3> }
        { children }
    </section>
)

export default Section
