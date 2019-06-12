import React, { createContext } from 'react';
import App, { Container } from "next/app";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../scss/style.scss";
import data from '../data.json'

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

        return { data }
    }

    render() {
        const { Component, data } = this.props;
        const bgClass = Component.name === 'Homepage' ? 'bg-dark' : 'bg-light'

        return (
            <Container>
                <DataContext.Provider value={ { ...data, page: Component.name } }>
                    <div className={ `page page--${ Component.name } ${bgClass}`}>
                        <Head />
                        <Navigation />
                        <Component />
                        <Footer />
                    </div>
                </DataContext.Provider>
            </Container>
        );
    }
}

export default MyApp;


// unirest.get("https://api-football-v1.p.rapidapi.com/v2/players/team/172")
// .header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "d828e39e4fmsh455212f83b68e3fp10010fjsnb96876cf0453")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });