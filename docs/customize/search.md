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


**检索范围:**

"title", "description", "tip", "date", "tags", "categories"

| 字段        | 含义     | 示例                               | 备注                                                                                                         |
|-------------|:---------|------------------------------------|--------------------------------------------------------------------------------------------------------------|
| title       | 标题     | "2015年总结"                       |                                                                                                              |
| description | 网页描述 | "2015年总结的描述呀"               | 一般是在md(markdown)文件的前言部分([Front Matter](https://gohugo.io/content-management/front-matter/))中定义 |
| date        | 时间     | "2015年12月24日",<br/>"2015/12/24" |                                                                                                              |
| tags        | 标签     | "年度总结"                         | 多个可使用","分割                                                                                            |
| categories  | 分类     | "记录"                             |                                                                                                              |


