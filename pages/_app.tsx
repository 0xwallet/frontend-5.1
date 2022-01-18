import "../styles/globals.css";
import I18n from "../lib/i18n";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import store from "../store";

// 整个项目的入口文件
function MyApp(context) {
  const { Component, pageProps } = context;
  return (
    <Provider store={store}>
      <Layout>
        <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
          <Component {...pageProps} />
        </I18n>
      </Layout>
    </Provider>
  );
}
export default MyApp;
