import React from "react";
import {Header} from "../components/header/header";
import Head from "next/head";

const Home = () => {
    return (
        <div className="container">
            <Header/>
            <Head>
                <title>index-page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1 className="text-center">Hellow world</h1>
        </div>
    )
}


export default Home;