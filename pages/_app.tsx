import "../styles/globals.css";
import Layout from "../components/layout";

// 整个项目的入口文件
function MyApp(context) {
  const { Component, pageProps, isMobile } = context;
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}
export default MyApp;
