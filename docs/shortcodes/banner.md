# banner

## 说明

`banner` shortcode是作为横幅配置的扩展使用的, 可以在已设置的Front Matter定义之外, 添加更加复杂的html内容

## 配置

> 当使用`banner`shortcode后, md文件的Front Matter中关于bannerde的配置仅剩`bannerHeight`有效

### 参数

#### mode

**定义**: string, 控制文字的颜色模式<br/>
**取值**: light/dark/black, 默认为light


> light, 文字为黑色; dark/black, 文字为白色

#### style

**定义**: string, 使用html style设置banner的背景样式<br/>
**取值**: text, 默认为空

#### wrap-content

**定义**: boolean, 如使用[`<--->`](shortcodes/fragment.md)语法对内容进行分割时, 各个部分的对齐方式<br/>
**取值**: true, 默认为false

> true, **按照内容**大小对各个分割部分进行横向排版; <br/>false, 对各个分割部分横向**均等排版**

### 格式

**1.NamedParams模式**
```
{{<banner mode="light" style="#000" wrap-content=false >}}
//内容
{{/<banner>}}
```

**2.单参数模式**

> 需要单个参数为: mode<br/>
> 默认, style为空, wrap-content为false
```
{{<banner light>}}
    // 内容
{{/<banner>}}
```


**3.两参数模式**

> 按位次, 两个参数依次为: style, wrap-content<br/>
> 默认: mode为light

```
{{<banner "#000" false >}}
    // 内容
{{/<banner>}}
```


**4.三参数模式**

> 按位次, 三个参数依次为: mode, style, wrap-content

```
{{<banner light "#000" false >}}
    // 内容
{{/<banner>}}
```

## 示例

![](https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/04-27/034430e20-20220427032935.png)

**代码如下**

``` md
{{< banner black "background-color: #017040;color: rgba(166,220,169,.89);background-image: url(https://www.keka.io/css/img/overlay.png),url(https://www.keka.io/css/img/circles.svg);background-position: top left,center center;background-attachment: scroll,scroll;background-size: auto, cover;">}}

{{< right >}}
# Keka

## 微仿[<b>keka.io</b>](https://www.keka.io/zh-cn/)主页<br/>

可点击链接进行对比, 所有内容只通过编写markdown完成

[下载 v1.2.53](https://d.keka.io/ "button")

<small>36.8 MB | 需要 Mac OS X 10.10 或更高版本<br/>MD5: d300759a0707b66e6dd5c3e4c29e98bd</small>

{{< /right >}}

<--->

<img src="https://www.keka.io/img/Keka-Square-512x512.png"  width="320px" height="320px">

{{< /banner >}}
```

## 扩展

> `banner` shortcode是简单版本的 [`fragment`](shortcodes/fragment.md)


