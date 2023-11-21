# Datax Web UI

## 说明

[后端项目github地址](https://github.com/Galaxy-ht/datax-new-web/tree/master/datax-web)

该项目由 [datax-web-ui](https://github.com/WeiYe-Jing/datax-web-ui) 修改而来


## Build Setup

运行

```
npm install [ 慢的话用  npm install --registry https://registry.npm.taobao.org]
```

修改配置

找到 `vue.config.js` 修改 `proxy` 里的属性即可

```
[process.env.VUE_APP_API]: {
        target: `http://localhost:${apiPort}/api`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_API]: ''
        }
```

启动 

```
 npm run dev
```

打包

```
npm run build:prod
```
