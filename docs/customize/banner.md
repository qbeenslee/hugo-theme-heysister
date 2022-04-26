# 横幅 / Banner

Banner在本主题代码中占了很大篇幅去编写, 使用好banner会为你的文章锦上添花.

## 示例

![](https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/04-27/03451266e-20220427032855.png)
**代码**
``` yaml
---
banner: "https://qbeenslee-1259354687.cos.ap-shanghai.myqcloud.com/202204/img6416sf.png"
bannerTitle:  "KASHI"
bannerHeight: "huge"
bannerSubtitle: "克孜勒苏"
bannerTitleColor: "#FFFFFF"
bannerTitleReference: ""
---
```

----

![](https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/04-27/034810136-20220427034748.png)

**代码**
``` yaml
---
banner: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"
bannerHeight: "small"
bannerTitle: "技术说明"
---
```
## 配置

### 使用

在md(markdown)文件的前言部分([Front Matter](https://gohugo.io/content-management/front-matter/))中定义, 只要是受markdown文件控制页面都可以使用
 
| 范围     | 首页(home)  | 文章列表(section) | 文章(page)                | 标签(taxonomy)   | 标签列表(term)           |
|----------|-------------|-------------------|---------------------------|------------------|--------------------------|
| 示例路径 | /_index.md | /posts/_index.md | /posts/my-post.md | /tags/_index.md | /tags/awesome/_index.md |

>  [`_index.md`](https://gohugo.io/content-management/organization/#index-pages-_indexmd) 在hugo中扮演着特殊的用处, 可以为[列表(list templates)](https://gohugo.io/templates/lists/)模板添加内容和参数定义 

### 参数

### banner

```
类型: string
定义: banner的背景
默认: 空
```

`banner` 取值支持3种类型:
1. 图片, 图片地址
2. 颜色, 包括单色和渐变色
3. random, 随机渐变色 

**示例**

1. `https://qbeenslee.com/cdn /yanchenhu-flower.jpg`
2. `#ace0f9`
3. `linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)`
4. `random`



### bannerHeight

```
类型: string
定义: banner的高度
取值: tiny/small/normal/huge/full
默认: normal
```

### bannerTitle

```
类型: string
定义: 正标题, 显示在banner中间
取值: -
默认: 空
```

### bannerTitleColor

```
类型: string
定义: bannerTitle的颜色
取值: 颜色
默认: "#FFFFFF"
```


**示例**

1. `#FFF`

### bannerSubtitle

```
类型: string
定义: 副标题, 显示在banner右下角
取值: -
默认: 空
```

### bannerSubtitleColor

```
类型: string
定义: bannerSubtitle的颜色
取值: 颜色
默认: "#FFFFFF"
```

**示例**

1. `#FFF`

### bannerTitleReference

```
类型: string
定义: 脚引
取值: 链接
默认: 空
```
**示例**

1. `https://www.baidu.com`


## 扩展


可以使用 `shortcode` 中的 [banner](shortcodes/banner.md) 标签高度自定义banner样式
