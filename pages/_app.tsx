import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>Adetola Ogunsanya || @zoeyth</title>
                <meta name="title" content="Adetola Ogunsanya || @zoeyth" />
                <meta
                    name="description"
                    content="Talking about the Web3 space, I knew I found a fit for myself the moment I started exploring. Now, with my hands on the plow, I can not look back."
                />

                {/* Favicon */}
                <link rel="icon" type="image/png" href="/favicon.ico" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://zoey-portfolio.vercel.app/"
                />
                <meta
                    property="og:title"
                    content="Adetola Ogunsanya || @zoeyth"
                />
                <meta
                    property="og:description"
                    content="Talking about the Web3 space, I knew I found a fit for myself the moment I started exploring. Now, with my hands on the plow, I can not look back."
                />
                <meta
                    property="og:image"
                    content="https://zoey-portfolio.vercel.app/assets/site-preview.png"
                />
                <meta
                    property="og:updated_time"
                    content="2022-12-16T15:44:30.494Z"
                />
                {/* <meta property="og:updated_time" content={new Date().toISOString()} /> */}

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://zoey-portfolio.vercel.app/"
                />
                <meta
                    property="twitter:title"
                    content="Adetola Ogunsanya || @zoeyth"
                />
                <meta
                    property="twitter:description"
                    content="Talking about the Web3 space, I knew I found a fit for myself the moment I started exploring. Now, with my hands on the plow, I can not look back."
                />
                <meta
                    property="twitter:image"
                    content="https://zoey-portfolio.vercel.app/assets/site-preview.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
