import React, { useContext } from 'react'
import { DataContext } from '../pages/_app'
import Image from './Image'

const ProductItem = ({ product }) => {
    const { labels } = useContext(DataContext)
    const { image, name, description, price, payPalLink } = product

    return (
        <div className="product-item">
            <Image baseClass="product-item" image={ image } />
            <div className="product-item__text">
                <h3 className="t-6">{ name }</h3>
                <p className="t-8 t-dark">{ description }</p>
                <div className="t-6">{ price }</div>
                <a className="product-item__button" href={ payPalLink} target="_blank">
                    { labels.shopNow }
                </a>
            </div>
        </div>
    )
}

export default ProductItem;
