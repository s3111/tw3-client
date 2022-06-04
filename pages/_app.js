import '../styles/global.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
    // --- ga ---
    const router = useRouter();
    const handleRouteChange = (url) => {
        window.gtag('config', 'UA-5867435-49', {
            page_path: url,
        });
    };
    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    // --- ga ---
    return <Component {...pageProps} />
}

export default MyApp
