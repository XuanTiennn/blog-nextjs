import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../Components/Layout/layout.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Item/item.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </Head>{" "}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
