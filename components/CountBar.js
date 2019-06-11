import React from 'react'

const CountBar = ({ baseClass, items }) => (
    <div className={ `count-bar ${baseClass}__count-bar` }>
        { items.map(({ count, labelTop, labelBottom}) => (
            <span className="count-bar__item" key={ count }>
                <span className="count-bar__count t-5">{ count }</span>
                <span className="count-bar__label">
                    <span>{ labelTop }</span>
                    <span>{ labelBottom }</span>
                </span>
            </span>
        )) }
    </div>
)

export default CountBar
