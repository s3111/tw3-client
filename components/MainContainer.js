import A from "./A";
import Head from "next/head";

const MainContainer = ({children,keywords}) => {
    const title = 'title'
    return (
        <>
            <Head>
                <meta keywords={keywords}/>
                <title>{title}</title>
            </Head>
            <div className={"navbar"}>
                <A href={'/'} text="main" />
                <A href={'/users'} text="users" />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;