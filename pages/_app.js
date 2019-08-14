import React, { createContext } from 'react';
import App, { Container } from 'next/app';
import fetch from 'node-fetch';
import config from 'react-reveal/globals';
import { ParallaxProvider } from 'react-scroll-parallax';

import Head from '../components/Head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../scss/style.scss';

config({ ssrFadeout: true, forever: true, fraction: 1, distance: '400px', duration: 300 });

const MULTIPOST_CATEGORIES = ['clubs', 'life', 'love', 'passion', 'hobby', 'products']

export const DataContext = createContext();

const fetchContent = async (lang, categoriesMap) => {
    const res = await fetch(`http://35.228.27.202/index.php/wp-json/wp/v2/posts?per_page=50&lang=${lang}`)
    const jsonResponse = await res.json()
    const data = {}

    if (jsonResponse && jsonResponse.length) {
        jsonResponse.map(({ slug, acf, categories }) => {
            if (!categories || !categories.length) return data[slug] = acf

            const categoryId = categories[0]
            const categoryName = categoriesMap[categoryId]

            if (!MULTIPOST_CATEGORIES.includes(categoryName)) return data[slug] = acf

            const prevArray = data[categoryName] || []
            const orderNumber = slug.split('-')[1]
            acf.order = orderNumber ? orderNumber : 0

            return data[categoryName] = [ ...prevArray, acf ]
        })
    }

    return { [lang]: data }
} 

class MyApp extends App {
    static async getInitialProps({ Component }) {
        const cat = await fetch('http://35.228.27.202/index.php/wp-json/wp/v2/categories')
        const jsonCategories = await cat.json()
        const categories = {}
    
        if (jsonCategories && jsonCategories.length) {
            jsonCategories.map(({ id, name }) => categories[id] = name)
        }
    
        return { data: await fetchContent('en', categories), categories, page: Component.id }
    }

    constructor(props) {
        super(props)

        this.state = {
            lang: 'en',
            data: this.props.data,
            loaded: this.props.page !== 'home',
        }
    }

    componentDidMount() {
        if (!this.state.loaded) {
            if (window.location.hash) {
                this.setState({ loaded: true })
            } else {
                setTimeout(() => this.setState({ loaded: true }), 9000)
            }
        }
    }

    changeLanguage = async (lang) => {
        if (lang !== this.state.lang) {
            const localizedData = this.state.data[lang]

            if (!!localizedData) {
                this.setState({ lang })
            } else {
                this.setState({
                    lang,
                    data: {
                        ...this.state.data,
                        ...await fetchContent(lang, this.props.categories)
                    }
                })
            }
        }
    }

    render() {
        const { Component, page, } = this.props;
        const { data, lang, loaded } = this.state;

        if (!data || !data[lang] || !data[lang].labels) return null;

        return (
            <Container>
                <DataContext.Provider value={ { ...data[lang], lang, changeLanguage: this.changeLanguage, page, loaded } }>
                    <ParallaxProvider>
                        <div className={ `page page--${page} ${loaded ? 'loaded' : 'loading'}` }>
                            <Head />
                            <Navigation />
                            <Component />
                            <Footer />
                        </div>
                    </ParallaxProvider>
                </DataContext.Provider>
            </Container>
        );
    }
}

export default MyApp;


// https://api-football-v1.p.rapidapi.com/v2/players/team/172
