import A from "./A";
import Head from "next/head";
import NavbarElement from "./Navbar";

const MainContainer = ({children,keywords}) => {
    const title = 'title'
    return (
        <>
            <Head>
                <meta keywords={keywords} />
                <title>{title}</title>
            </Head>
            <NavbarElement/>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;