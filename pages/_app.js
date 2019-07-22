import React, { createContext } from 'react';
import App, { Container } from 'next/app';
import config from 'react-reveal/globals';
import { ParallaxProvider } from 'react-scroll-parallax';

import Head from '../components/Head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../scss/style.scss';
import data from '../data.json'

config({ ssrFadeout: true, forever: true, fraction: 1, distance: '400px', duration: 300 });

export const DataContext = createContext();
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        // const pageProps = await Component.getInitialProps(ctx);
        // return { pageProps };

        // const res = await fetch('http://localhost:8888/wordpress/wp-json/wp/v2/posts?category=home', {
        //   method: 'get',
        //   mode: 'no-cors',
        // })
        // const json = await res.json()

        return { data, page: Component.name.toLowerCase() }
    }

    render() {
        const { Component, page, data } = this.props;

        return (
            <Container>
                <DataContext.Provider value={ { ...data, page } }>
                    <ParallaxProvider>
                        <div className={ `page page--${page}` }>
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


// unirest.get('https://api-football-v1.p.rapidapi.com/v2/players/team/172')
// .header('X-RapidAPI-Host', 'api-football-v1.p.rapidapi.com')
// .header('X-RapidAPI-Key', 'd828e39e4fmsh455212f83b68e3fp10010fjsnb96876cf0453')
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });