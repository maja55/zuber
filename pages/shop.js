import React, { useContext } from 'react'
import { Fade } from 'react-reveal';
import { DataContext } from './_app'
import Section from '../components/Section'
import ProductItem from '../components/ProductItem'

const Shop = () => {
    const { products, labels } = useContext(DataContext)
    const hasProducts = products && products.length

    return (
        <Section baseClass="shop" flexHeight disableFade>
            <div className="product-list">
                { hasProducts ?
                    products.map((product) => <ProductItem product={ product } key={ product.name } />) :
                    <Fade right opposite duration={ 500 } distance="1000px" delay={ 200 }>
                        <h1 className="t-center" style={{ height: '40vh', paddingTop: '20vh' }}>{labels.comingSoon || 'Coming soon'}</h1>
                    </Fade>
                }
            </div>
        </Section>
    )
}

Shop.id = 'shop'

export default Shop
