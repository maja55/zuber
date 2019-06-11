import React, { createContext } from 'react';
import App, { Container } from "next/app";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import "../scss/style.scss";
import data from '../data.json'

export const LabelsContext = createContext();
export const DataContext = createContext();
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = await Component.getInitialProps(ctx);
        pageProps.shared = { labels: data.labels, footer: data.footer }
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <LabelsContext.Provider value={ pageProps.shared.labels }>
                    <Head />
                    <Navigation key="navigation" />
                    <DataContext.Provider value={ pageProps.data }>
                        <Component { ...pageProps } />
                    </DataContext.Provider>
                </LabelsContext.Provider>
            </Container>
        );
    }
}

export default MyApp;
