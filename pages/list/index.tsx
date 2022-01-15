import React from "react";
import Head from "next/head";
/**
 * 跳转到一个路由页面，一共有两种可能，第一种是直接通过请求后端服务的地址，这个时候List组件会先在后端进行执行，
 * 再次会在浏览器端进行执行，如果只是通过next.js中提供的路由跳转方法，只是一个单页面应用，List组件只会在浏览器端执行
 * @param {*} param0
 */
function List({ name,isDemo }) {
  console.log("list");
  return (
    <div>
      <Head>
        <title>listTitle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <h1 className="underline text-xl">list页面接收到的参数-{name}-{isDemo}</h1>
    </div>
  );
}

// 动态的获取数据，每一次访问这个页面的时候，都会触发这个操作，可以在这里取数据，然后传递在页面上面进行渲染
//  这个操作相当于，服务器处理，得到服务器端的参数
// 在页面build构建的时候为组件注入一些属性信息
// 每一次向当前这个页面请求的时候
// 不能用于子组件，只能用于页面组件
export async function getServerSideProps(context) {
  const req = context.req;
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  console.log(isMobile(userAgent), "userAgent");
  return {
    props: {
      name: Math.random()
    } // will be passed to the page component as props
  };
}

/** 判断userAgent是否是移动端 */
export const isMobile = userAgent =>
  !!userAgent.match(
    /(phone|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
export default List;
