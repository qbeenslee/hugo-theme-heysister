# 暗黑模式 / Darkmode

## 示例

<img src="https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/04-27/041147765-20220427041139.png" width="300px">

<img src="https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/04-27/041448bdf-20220427041441.png" width="300px">

## 全局配置

在 [`config.toml`](https://gohugo.io/getting-started/configuration/) 文件中配置 全局开关

``` yaml
[params.plugins]
darkmode = true
```
> 开启后页面右上角会出现一个"太阳/月亮"的`darkmode切换按钮`
> 
> 该开关可以在 `dark/light` 两种模式下手动切换

## 单页面配置

在markdown文件的前言部分([Front Matter](https://gohugo.io/content-management/front-matter/))中定义

``` yaml
---
themeMode: "dark"
---
```
> 当对单个页面进行设置后, 基于个体优于全局的策略, 这个时候 `darkmode切换按钮` 将被隐藏
> 
> 该配置支持固定为 `dark/light/black` 3种模式中的一种

