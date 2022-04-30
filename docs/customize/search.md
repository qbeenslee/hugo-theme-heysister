# 搜索 / Search

## 示例

![](https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/04-27/04463962a-20220427044634.png)

## 配置

在 [`config.toml`](https://gohugo.io/getting-started/configuration/) 文件中设置

``` yaml
[outputs]
home = ["HTML", "RSS", "JSON"] # 如开启搜索插件, 必不能注释本行配置


[params.plugins]
search = true
```

> 点击右上角的放大镜按钮 即会弹出搜索框