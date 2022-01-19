import "../styles/globals.css";
import I18n from "../lib/i18n";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import store from "../store";
import { useSelector, connect } from "react-redux";
import { useEffect, useState } from "react";
import enJson from "../locales/en.json";

let preLocal = "";
// 整个项目的入口文件
function MyApp(context) {
  const { Component, pageProps } = context;
  const [lngInit, setLng] = useState("en");
  const [lngDictInit, setLngDictInit] = useState(enJson);
  const lngChangeBack = () => {
    const {
      lng: { lngDict, locale }
    } = store.getState();
    setLng(locale);
    setLngDictInit(lngDict);
  };
  useEffect(() => {
    lngChangeBack();
    store.subscribe(() => {
      lngChangeBack();
    });
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <div
          onClick={() => {
            store.dispatch({
              type: "CHANGELNG",
              value: "de"
            });
          }}
        >
          布局中切换语言
        </div>
        <I18n lngDict={lngDictInit} locale={lngInit}>
          <Component {...pageProps} />
        </I18n>
      </Layout>
    </Provider>
  );
}
export default MyApp;
