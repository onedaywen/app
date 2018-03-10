## 在搭建过程中遇到的问题点以及解决
> 1.问题：在.vue文件中引入了public.less, public.less中又引入了reset.less。那么reset.less无法被less-loader编译。
> 1.解决：针对.vue对引入多重嵌套的less文件无法编译问题，只能直接引入less文件了。

## 采用less + rem + js结合实现终端适配
> 1. 首先设计稿宽度为750.
> 2. [variable.less](https://github.com/onedaywen/app/blob/master/src/common/less/variable.less)封装了less语句，在设计稿上测量的px值，传入less语句即可。如一个div在设计稿上说宽100，高60。在样式文件中这样写即可。
```
div {
  .width(100);
  .height(60);
}
```