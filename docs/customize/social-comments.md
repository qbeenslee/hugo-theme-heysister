# 评论 / Comments

<img src="https://raw.githubusercontent.com/qbeenslee/CDN/master/screenshot/2022/04-27/050840738-20220427050832.png" width="500px">

本主题支持6款不同评论插件, 可选择喜欢的使用. 推荐[valine](https://valine.js.org)

## 配置

在[`config.toml`](https://gohugo.io/getting-started/configuration/) 中进行配置

### valine

官方主页: [valine.js.org](https://valine.js.org)

配置项:

``` toml
[params.comments.valine]
appId = ''
appKey = ''
```

### livere

官方主页: [livere.com](https://livere.com)

配置项:

``` toml
[params.comments.livere]
Key= ''
```

### gitalk

官方主页: [github.com/gitalk/gitalk](https://github.com/gitalk/gitalk)

配置项:

``` toml
owner=''
repo = ''
clientId =''
clientSecret = ''
```

### gitment

官方主页: [github.com/imsun/gitment](https://github.com/imsun/gitment)

配置项:

``` toml
owner=''
repo=''
clientId=''
clientSecret = ''
```

### utterances

官方主页: [utteranc.es](https://utteranc.es)

配置项:

``` toml
owner = ''
repo = ''
```

### disqus

官方主页: [disqus.com](https://disqus.com)

配置项:

``` toml
disqusShortname = ''
```