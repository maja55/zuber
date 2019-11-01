import React from 'react'
import { Fade } from 'react-reveal';

const CountBar = ({ baseClass, items, isVertical, revealProps }) => (
    <div className={ `count-bar ${baseClass}__count-bar${isVertical ? ' count-bar--vertical' : ''}` }>
        { items.map(({ count, labelTop, labelBottom}, index) => {
            if (!count) return null;

            return (
                <span className="count-bar__item" key={ count }>
                    { revealProps.disabled ?
                        <>
                            <span className="count-bar__count t-5">{ count }</span>
                            <span className="count-bar__label">
                                <span>{ labelTop }</span>
                                <span>{ labelBottom }</span>
                            </span>
                        </>
                    :
                        <>
                            <Fade bottom opposite { ...revealProps } delay={ revealProps.delay +  (index * 100) } duration={ 200 }>
                                <span className="count-bar__count t-5">{ count }</span>
                            </Fade>
                            <Fade bottom cascade opposite { ...revealProps } delay={ revealProps.delay + (index * 100) } duration={ 200 }>
                                <span className="count-bar__label">
                                    <span>{ labelTop }</span>
                                    <span>{ labelBottom }</span>
                                </span>
                            </Fade>
                        </>
                    } 
                </span>
            )
        }) }
    </div>
)

CountBar.defaultProps = {
    revealProps: {
        delay: 50,
    },
}

export default CountBar
