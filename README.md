## 在搭建过程中遇到的问题点以及解决
> 1.问题：在.vue文件中引入了public.less, public.less中又引入了reset.less。那么reset.less无法被less-loader编译。
> 1.解决：针对.vue对引入多重嵌套的less文件无法编译问题，只能直接引入less文件了。