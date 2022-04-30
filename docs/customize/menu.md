# 菜单栏 / Menu

## 示例

![](https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/04-27/04372719c-20220427043542.png)

## 配置

本主题支持多级菜单栏, 遵从[Hugo menus](https://gohugo.io/content-management/menus/)规范


**代码示例**

``` yaml
[menu]
[[menu.main]]
identifier = "about"
name = "关于"
url = "/about/"
weight = 50

[[menu.main]]
parent = "about"
name = "友情链接"
url = "/friends/"
weight = 6

[[menu.main]]
parent = "about"
name = "技术说明"
url = "/about/website/"
weight = 7

[[menu.main]]
parent = "about"
name = "版权声明"
url = "/copyright/"
weight = 8

[[menu.main]]
parent = "about"
name = "隐私条款"
url = "/privacy/"
weight = 9

[[menu.main]]
parent = "about"
name = "关于我"
url = "/about/me/"
weight = 1

[[menu.main]]
parent = "about"
name = "订阅"
url = "/index.xml"
weight = 10

# [[menu.main]]
# identifier = "gallery"
# name = "相册"
# url = "/gallery/"
# weight = 20

[[menu.main]]
identifier = "bb"
name = "小声BB"
url = "/bb/"
weight = 30

[[menu.main]]
identifier = 'archives'
name = "归档"
weight = 40

[[menu.main]]
parent = "archives"
name = "全部"
url = "/archives/"
weight = 1

[[menu.main]]
parent = "archives"
name = "类目"
url = "/categories/"
weight = 2


[[menu.main]]
parent = "archives"
name = "标签"
url = "/tags/"
weight = 3
```

> 在 [`config.toml`](https://gohugo.io/getting-started/configuration/) 文件中设置