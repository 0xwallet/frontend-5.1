import "../styles/globals.css";
import I18n from "../lib/i18n";
import Layout from "../components/layout";

// 整个项目的入口文件
function MyApp(context) {
  const { Component, pageProps } = context;
  return (
    <Layout>
      <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
        <Component {...pageProps} />
      </I18n>
    </Layout>
  );
}
export default MyApp;
