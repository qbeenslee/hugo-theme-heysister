# 版权

## 示例

<img src="https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/05-01/084223128-0B961B72-8A07-4501-B978-AE316DF29E93.jpg" height="120px" width="315px">

> 完成配置后文章底部右侧会显示展示如上样式, <br/>并且点击会跳转版权相关说明页面

## 配置

### 添加版权页

**1.创建**, 在项目根目录下执行如下命令:

```
hugo new copyright.md
```

**2.编写**, 在新建的`copyright.md`中编写全站可用的版权文案

> 可参考 [`qbeenslee.com/copyright`](https://qbeenslee.com/copyright/)

### 全局配置

在 [`config.toml`](https://gohugo.io/getting-started/configuration/) 文件中设置

``` toml
[params.layout]
copyrightURL = "/copyright/"
```

### 页面配置

在markdown文件的前言部分([Front Matter](https://gohugo.io/content-management/front-matter/))中定义, 即表示该篇文章为原创, 且会展示原创版权说明

``` md
---
original: true
---
```
