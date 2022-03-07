import FstNavbar from "../components/header/FstNavbar";
import SecNavbar from "../components/header/SecNavbar";
import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../Store/index";
import Footer from "../components/footer/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Amazone Store </title>
          <meta
            name="description"
            content="Amazone Store For Selling everythings"
          />
          <link rel="icon" href="/amazon.ico" />
        </Head>
        <header>
          <FstNavbar />
          {/* <SecNavbar /> */}
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          <Footer />
        </footer>
      </Provider>
    </>
  );
}

export default MyApp;
