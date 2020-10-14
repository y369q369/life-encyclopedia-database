阳光活泼的同学，你好啊(*^▽^*)

我是本次课程的讲师，草君，你可以称呼我为大草。

接下来的时间里由我带着你学习——【vue的接口请求，vue-router与transition过渡】



# 导学篇

页面的图形表格需要数据，数据分析需要数据，快递物流也需要数据。那么，数据从哪来呢？静态数据不能满足实时显示，像银行卡余额，支付宝余额宝在你收到一笔钱时，心里都想即刻显示出来，这时就需要异步动态请求数据，实时显示余额。到此处，点出本次课程的第一个要点——vue异步接口请求。

咱们本次课程的异步请求将采用三种方式：axios, ajax, vue-resource。基于三种方式全部学习完，咱们再进一步分析每种方式的优缺点。

第二个要点：vue-router，Vue.js官方的路由插件。传统的页面通过超链接实现跳转，如a标签，javascript中的window对象；然而vue构建的是单页面应用，只有一个页面，咱们看到的页面跳转实际上是组件之间的跳转，此时必须使用vue-router来管理组件，继而进行“页面跳转”。

第三点，vue的页面过渡效果。原先页面标签的过渡使用css动画完成，但vue中的标签实际是虚拟的dom元素，此时最好使用vue官方封装的transition组件。

最后，咱们会基于前三点逐步完成一个简易的项目——**《我的生活小百科资料库》**。



为了保证学习本课程的效果，你需要一些简单的知识储备：

> - 了解 html，css，js 的基本知识及vue的基本语法
> - node环境配置
> - vue项目的搭建
> - 熟悉IDE工具的基本使用
> - 聚合数据账号



# 第一关——vue官方推荐接口：axios

### 1.1 学习目标

通过axios请求聚合数据的成语词典api， 根据成语查询成语释义，最终页面效果图如下

![](README.assets/example-chengyu.jpg)

### 1.2 搭建环境

1. 创建vue项目  **life-encyclopedia-database**， 并用IDE(Hbuilder 或 VSS 或 webstorm等)工具打开，老师后面将以webstorm作为演示

2. 引入axios依赖

   ```
   npm install axios
   ```

   ![](README.assets/installAxios.png)

1. 创建使用axios接口的组件： src/views/Idiom.vue

2.  