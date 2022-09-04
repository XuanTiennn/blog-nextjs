import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../Components/Layout/layout.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Item/item.css";
import "../Components/Tags/tag.css";
import "../Components/Header/header.css";
import "./blog/post.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />
        <script
          src="https://unpkg.com/react@16/umd/react.development.js"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
          crossOrigin="anonymous"
        ></script>
        <script src="https://unpkg.com/react-quill@1.3.3/dist/react-quill.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      </Head>{" "}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
