# 搜索 / Search

## 示例

![Search](https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/04-27/04463962a-20220427044634.png)

## 配置

在 [`config.toml`](https://gohugo.io/getting-started/configuration/) 文件中设置

``` yaml
[outputs]
home = ["HTML", "RSS", "JSON"] # 如开启搜索插件, 必不能注释本行配置


[params.plugins]
search = true
```


**检索范围:**

| 字段        | 含义     | 示例                               | 备注                                                                                                         |
|-------------|:---------|------------------------------------|--------------------------------------------------------------------------------------------------------------|
| title       | 标题     | "2015年总结"                       |                                                                                                              |
| description | 网页描述 | "2015年总结的描述呀"               | 一般是在md(markdown)文件的前言部分([Front Matter](https://gohugo.io/content-management/front-matter/))中定义 |
| date        | 时间     | "2015年12月24日",<br/>"2015/12/24" |                                                                                                              |
| tags        | 标签     | "年度总结"                         | 多个可使用","分割                                                                                            |
| categories  | 分类     | "记录"                             |                                                                                                              |


### 交互

**1.点击**

> 点击右上角的放大镜按钮 即会弹出搜索框

**2.键盘**

`Meta键` + `/` : 弹出搜索框;<br/>
`Esc键`: 隐藏搜索框;<br/>
`Down键`: 选择项目;<br/>
`Enter键`: 选中打开相关页面

> meta键, 在Mac平台是 【⌘】, 在Windows平台是【win】（WinKey）
