# 快速搭建

阅读本文档时, 确保已经阅读过 [Hugo Doc](https://gohugo.io/documentation/)


##  config.toml 配置文件

<details>
<summary>示例config.toml (点击展开)</summary>

``` yaml
baseURL = "http://localhost:1313/"
title = "Hey sister"
languageCode = "zh-Hans"
defaultContentLanguage= "zh-cn"
enableEmoji = true
theme = "heysister"

Paginate = 10 # Number of posts per page
enableRobotsTXT = true
asCJKLanguage = true
disableHugoGeneratorInject = true
ignoreErrors = ["error-remote-getjson", "error-missing-instagram-accesstoken"]

[author]
name = "qbeenslee"

[outputs]
home = ["HTML", "RSS", "JSON"] #如开启搜索插件, 必不能注释本行配置

[markup]
defaultMarkdownHandler = "goldmark"

[markup.goldmark]
[markup.goldmark.extensions]
definitionList = true
footnote = true
linkify = true
strikethrough = true
table = true
taskList = true
typographer = true

[markup.goldmark.parser]
autoHeadingID = true
autoHeadingIDType = "github"


[markup.goldmark.renderer]
hardWraps = true
unsafe = true
xHTML = true

[markup.highlight]
anchorLineNos = false
codeFences = true
guessSyntax = false
hl_Lines = ""
lineNoStart = 1
lineNos = false
lineAnchors = ""
lineNumbersInTable = false
noClasses = false
style = "friendly"
tabWidth = 4

[markup.tableOfContents]
endLevel = 3
ordered = false
startLevel = 2

[taxonomies]
tag = "tags"
category = "categories"
archive = "archives"

[permalinks]
post = "/:title/"

[params]
description = ""
Keywords = [""]


[params.rss] # Adding this tag enables RSS feed
fullContent = true # Includes whole content in rss
authorName = "" # Author full name
authorEmail = "" # Author email

[params.assets]
assetDir = "static"
inlineCSS = false


[params.plugins]
photoPopup = true # Show image with dialog
search = true # Enable content search
darkmode = true # Switch to dark mode theme
capture = false # Capture web page save as picture. Testing

[params.plugins.related]
enable = true # Show more related articles
limited = 5 # The number limited to display


[params.layout]
excludeSections = ["bb", "gallery"] # Homepage excludes some sections
copyrightURL = "/copyright/" # Site copyright url
summaryLength = 100 # Length of acticle summary
protectImage = true # Protect image download
listStyle = "list" # card, list, list-thumbnail

[params.layout.title]
uppercase = true # Converts all characters in title to uppercase
uppercaseScope = "index" # options "all", "index", "page", "pageTitle"

[params.layout.color]
anchor = "#1abc9c" # Anchor color default is '#1abc9c'

[params.social]
rss = "index.xml" # Add this to show RSS button in social.

```
</details>

## 写点...

## 发布