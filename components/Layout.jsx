import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children})=>(
    <>
    <Head>
        <title>Real Estate</title>
    </Head>
    <div className="">
        <div><Navbar /></div>
        <main className="container mx-auto">
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
    </>
)

export default Layout;