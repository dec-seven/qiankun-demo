import { registerMicroApps } from 'qiankun'

const DEV = import.meta.env.DEV

/**
 * 要注册的微应用
 * 路由模式 - 主应用hash，子应用hash
 */
const microApps = [
  {
    name: 'foo', // 微应用名称，具有唯一性，可理解为微应用的唯一id
    entry: DEV ? '//localhost:8081' : '/main/microApps/foo', // 微应用入口，通过该地址加载微应用
    container:'#container', // 微应用挂载节点，微应用加载完成后将挂载在该节点上
    activeRule:'#/micro/foo', // 微应用触发的路由规则，触发路由规则后将加载该微应用
    props:{} // 主应用需要传递给微应用的数据
  },
   {
    name: 'bar', // 微应用名称，具有唯一性，可理解为微应用的唯一id
    entry: DEV ? '//localhost:8082' : '/main/microApps/bar', // 微应用入口，通过该地址加载微应用
    container:'#container', // 微应用挂载节点，微应用加载完成后将挂载在该节点上
    activeRule:'#/micro/bar', // 微应用触发的路由规则，触发路由规则后将加载该微应用
    props:{} // 主应用需要传递给微应用的数据
  }
]


/**
 * 在主应用中注册微应用
 */
  registerMicroApps(microApps,{
     beforeLoad:(app) => {
       console.log('before load',app.name)
     }
  })

 // 启动qiankun 推荐在页面中开启qiankun
//  start()
