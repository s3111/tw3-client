import Link from "next/link";
import styles from "../styles/A.module.css"
import {asPath} from "next";
import Head from "next/head";
import React from "react";

export default function HeadBlock({description,image,title}){

    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={asPath} />
            <meta property="og:site_name" content="Ukraine Twitter Analytics" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta name="twitter:card" content="summary_large_image"/>

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-5867435-49"/>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-5867435-49', { page_path: window.location.pathname });
            `,
                }}
            />

        </Head>
    )
}