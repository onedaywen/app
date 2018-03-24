## 在搭建过程中遇到的问题点以及解决
> 1.问题：在.vue文件中引入了public.less, public.less中又引入了reset.less。那么reset.less无法被less-loader编译。
> 1.解决：针对.vue对引入多重嵌套的less文件无法编译问题，只能直接引入less文件了。
> 2.问题：关于图片打包问题，在html、css、js中引入的本地图片如何打包？打包到dist/images文件夹下
> 2.答案：
> 3.问题：场景实现：实现在开发环境、测试环境、线上环境pc端跳转到h5端？技术上就是要在不同环境下生成不一样的域名前缀，与路径、资源名称配合。
> 3.解决:
> 4.问题: 下列extract-text-webpack-plugin配置分离css在vue-loader中不生效，在app.js入口文件中测试可以生效。
```
{ 
	test: /\.less$/, 
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: ['css-loader', 'less-loader']
	})
},
```

## 采用less + rem + js结合实现终端适配
> 1. 首先设计稿宽度为750.
> 2. [variable.less](https://github.com/onedaywen/app/blob/master/src/common/less/variable.less)封装了less语句，在设计稿上测量的px值，传入less语句即可。如一个div在设计稿上说宽100，高60。在样式文件中这样写即可。
```
div {
  .width(100);
  .height(60);
}
```
## 项目目录结构
![项目目录结构](https://github.com/onedaywen/app/blob/master/src/common/images/folder.png)