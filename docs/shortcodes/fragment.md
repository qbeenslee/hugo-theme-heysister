# fragment

## 说明

`fragment`shortcode是本主题排版的核心组件, 通过对内容的横向排版控制可增加更多的自由度

## 配置

### 参数

#### mode

**定义**: string, 控制文字的颜色模式<br/>
**取值**: light/dark/black, 默认为则为取前页面的 `themeMode`

> light, 文字为黑色; dark/black, 文字为白色

#### type

**定义**: string, 用于控制控件整体布局<br/>
**取值**: wrap/align-left/align-right/match/normal/safe-full/full, 默认为normal


#### style

**定义**: string, 使用html style设置控件的背景样式<br/>
**取值**: text, 默认为空

#### wrap-content

**定义**: boolean, 对各个部分的对齐方式是否为`wrap-content`<br/>
**取值**: true, 默认为false

> true, **按照内容**大小对各个分割部分进行横向排版; <br/>false, 对各个分割部分横向**均等排版**

### 格式 

**1.NamedParams模式**
```
{{<fragment mode="light" type="normal" style="#000" wrap-content=false >}}
    // 内容1
    <--->
    // 内容2
{{/<fragment>}}
```

**2.单参数模式**

> 需要单个参数为: mode<br/>
```
{{<fragment light>}}
    // 内容1
    <--->
    // 内容2
{{/<fragment>}}
```

**3.四参数模式**

> 按位次, 三个参数依次为: mode,type, style, wrap-content

```
{{<fragment light full "#000" false >}}
    // 内容
{{/<fragment>}}
```

## 示例

### type="full"

![](https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/05-01/101240b29-83FAB748C86A.jpg)

**代码如下**

``` md
{{< fragment full >}}
<img width="100%" class="nozoom" src="https://www.apple.com.cn/v/iphone-13-pro/a/images/overview/camera/low-light/night_mode_photography_1__benvdg76737m_large_2x.jpg"/>

<--->

{{< center >}}
# 黑夜， <br/>放马过来。

哪怕是昏暗的地方，也照样是 iPhone 13 Pro 的舞台。它的广角摄像头采用更大光圈，以及 iPhone 迄今最大的感光元件，在拍摄夜间模式人像时，还有激光雷达扫描仪这个得力帮手。超广角摄像头也加大了光圈，配备更快的感光元件，并拥有全新的自动对焦功能。此外，长焦摄像头现在也支持夜间模式。
{{< /center >}}

{{< /fragment >}}
```

----

### type="normal", type="match"

![](https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/05-01/101901696-74B3CC5FCAA5.jpg)

> 参数`type`在取值为`normal`或者`match`, 效果一致

**代码如下**
``` md
{{< fragment >}}
{{< right >}}
广角摄像头最高提升至
# 2.2 倍<br/>光线捕捉能力
拍照、拍视频更出色
{{< /right >}}
<--->
<img width="100%" src="https://www.apple.com.cn/v/iphone-13-pro/a/images/overview/camera/low-light/night_mode_photography_2__ehwbgu52pjiq_large_2x.jpg"/>

{{< /fragment >}}

```

----

### type="align-left"

![](https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/05-01/102656e0b-000BBBD8B6CE.jpg)

**代码如下**
``` md
{{< fragment align-left >}}
## Left Content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.

<--->

## Mid Content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!

<--->

## Right Content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /fragment >}}
```
----
