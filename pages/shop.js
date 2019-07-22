import React, { useContext } from 'react'
import { DataContext } from './_app'
import Section from '../components/Section'
import ProductItem from '../components/ProductItem'

const Shop = () => {
    const { products } = useContext(DataContext)

    return (
        <Section baseClass="shop" flexHeight disableFade>
            <div className="product-list">
                { products.map((product) => <ProductItem product={ product } key={ product.name } />) }
            </div>
        </Section>
    )
}

export default Shop
