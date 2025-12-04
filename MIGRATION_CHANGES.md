# Hugo Stack 到 Hexo Maupassant 迁移修改汇总

本文档记录了从 Hugo Stack 主题迁移到 Hexo Maupassant 主题的所有代码修改。

## 目录
1. [文章模板修改](#1-文章模板修改)
2. [网站图标配置](#2-网站图标配置)
3. [字数统计功能](#3-字数统计功能)
4. [文章目录侧边栏](#4-文章目录侧边栏)

---

## 1. 文章模板修改

### 文件：`scaffolds/post.md`

**修改内容**：添加 Hugo 中使用的 Front Matter 字段

```markdown
---
title: {{ title }}
date: {{ date }}
description:
tags:
categories:
mathjax: true
comments: true
toc: true
---
```

**说明**：
- `description`: 文章描述
- `categories`: 分类
- `mathjax`: 数学公式支持（原 Hugo 中为 `math`）
- `comments`: 评论开关
- `toc`: 目录开关（默认开启）

---

## 2. 网站图标配置

### 操作：复制 favicon 并从头像生成新图标

**步骤**：
1. 将头像 `source/img/avatar.jpg` 转换为 32x32 的 favicon
2. 保存到 `source/favicon.ico`

**使用的转换脚本**（临时文件，已删除）：
```javascript
const sharp = require('sharp');
const fs = require('fs');

async function convertToFavicon() {
  try {
    const buffer = await sharp('source/img/avatar.jpg')
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .toFormat('png')
      .toBuffer();

    fs.writeFileSync('source/favicon.ico', buffer);
    console.log('✓ favicon.ico 已成功生成！');
  } catch (error) {
    console.error('转换失败:', error);
  }
}

convertToFavicon();
```

**依赖**：需要安装 `npm install --save-dev sharp`

---

## 3. 字数统计功能

### 3.1 主题配置

**文件**：`themes/maupassant/_config.yml`

**修改**（第 73 行）：
```yaml
wordcount: true           ## If you want to display the word counter and the reading time expected to spend of each post please set the value to true, and you must have hexo-wordcount installed.
```

### 3.2 主页显示字数统计

**文件**：`themes/maupassant/layout/index.pug`

**修改**（第 18-30 行）：
```pug
      .post-meta= post.date.format(config.date_format)
        if theme.wordcount == true
          span.post-time
            span.post-meta-item-text= ' | '
            span.post-meta-item-icon
              i.fa.fa-keyboard-o
              span.post-count= ' '+wordcount(post.content)
              span.post-meta-item-text= " "+__('word_cnt')
          span.post-time= ' | '
            span.post-meta-item-icon
              i.fa.fa-clock-o
              span.post-count= ' '+min2read(post.content)
              span.post-meta-item-text= ' '+__('read_time')
      if theme.disqus.enable == true
```

**依赖**：需要安装 `npm install hexo-wordcount --save`

---

## 4. 文章目录侧边栏

### 4.1 创建目录 Widget

**文件**：`themes/maupassant/layout/_widget/toc.pug`（新建文件）

```pug
if page.toc !== false && page.content
  .widget.toc-wrapper
    .widget-title
      i.fa.fa-list= ' ' + __('contents')
    #toc-sidebar.toc-article
      != toc(page.content, {list_number: theme.toc_number})
```

**说明**：添加了 `.toc-wrapper` 类名，用于精确控制目录的 sticky 定位。

### 4.2 创建文章专用布局

**文件**：`themes/maupassant/layout/base-post.pug`（新建文件）

```pug
include _partial/helpers.pug

if page.title
  - var current_title = page.title
else
  - var current_title = config.title

if config.feed
  case config.feed.type
    when 'rss2'
      - var feed_type='application/rss+xml'
    when 'atom'
    default
      - var feed_type='application/atom+xml'

doctype html
html(lang=config.language)
  include _partial/head.pug
  body: .body_container
    #header
      .site-name
        h1.hidden= current_title
        a#logo(href=url_for('.'))= config.title
        p.description= config.subtitle
      #nav-menu
        - for (var i in theme.menu)
          +a_with_current(theme.menu[i].directory, __(theme.menu[i].page), theme.menu[i].icon)

    #layout.pure-g
      .pure-u-1.pure-u-md-3-4: .content_container
        block content
      if theme.widgets_on_small_screens
        .pure-u-1.pure-u-md-1-4: #sidebar
          //- 文章页面特殊侧边栏：优先显示目录，无目录则显示常规 widgets
          if page.toc !== false && page.content && toc(page.content)
            != partial('_widget/toc.pug', null, {cache: !config.relative_link})
          else
            each item in theme.widgets
              != partial('_widget/' + item + '.pug', null, {cache: !config.relative_link})
      else
        .pure-u-1-4.hidden_mid_and_down: #sidebar
          //- 文章页面特殊侧边栏：优先显示目录，无目录则显示常规 widgets
          if page.toc !== false && page.content && toc(page.content)
            != partial('_widget/toc.pug', null, {cache: !config.relative_link})
          else
            each item in theme.widgets
              != partial('_widget/' + item + '.pug', null, {cache: !config.relative_link})
      .pure-u-1.pure-u-md-3-4
        != partial('_partial/footer.pug')

    if theme.totop == true
      include _partial/totop.pug

    include _partial/after_footer.pug
```

**说明**：此布局专门用于文章页面，会智能判断是否显示目录：
- 如果文章有目录且 `toc !== false`，显示目录
- 否则显示常规的个人信息、标签等 widgets

### 4.3 修改文章模板使用新布局

**文件**：`themes/maupassant/layout/post.pug`

**修改 1**（第 1 行）：
```pug
extends base-post
```
原来是：`extends base`

**修改 2**（移除第 37-41 行的内容区目录）：
```pug
# 移除以下代码：
    if page.toc
      .clear
        #toc.toc-article
          .toc-title= __('contents')
          != toc(page.content, {list_number: theme.toc_number})
```

修改后第 33-38 行应为：
```pug
    if theme.waline.enable == true
      a.disqus-comment-count(href=url_for(page.path) + '#waline')
        span.waline-comment-count(id=url_for(page.path))
        span= ' ' + __('Comment')
    .post-content
      != page.content
```

### 4.4 添加目录固定定位样式

**文件**：`themes/maupassant/source/css/style.scss`

**在文件末尾添加**（第 2499-2586 行）：
```scss
/* Sidebar TOC sticky positioning */
.widget.toc-wrapper {
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    z-index: 10;

    .widget-title {
        padding-bottom: 0.5em;
        border-bottom: 1px solid #ddd;
        margin-bottom: 0.5em;
        font-size: 16px;
        color: #333;
    }
}

#toc-sidebar {
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 7px;
    padding: 1em;
    background: #fff;

    /* Scrollbar styling */
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 2px;

        &:hover {
            background: #888;
        }
    }

    .toc {
        padding: 0;
        margin: 0;
        font-size: 14px;
        line-height: 1.6;

        li {
            list-style-type: none;
        }

        ol {
            padding-left: 0.8em; /* 减少缩进，从 1.5em 改为 0.8em */
            margin: 0;
        }

        /* 第一级目录不缩进 */
        > ol {
            padding-left: 0;
        }

        a {
            color: #555;
            text-decoration: none;
            display: block;
            padding: 0.3em 0;
            line-height: 1.4;
            white-space: normal;
            word-break: break-word;
            transition: color 0.2s ease-in-out;
            border-left: 2px solid transparent;
            padding-left: 0.5em;

            &:hover {
                color: #4d8aff;
                border-left-color: #4d8aff;
            }
        }

        /* 当前激活的目录项 */
        .active > a {
            color: #4d8aff;
            font-weight: 500;
        }
    }
}
```

**功能说明**：
- **Sticky 定位修复**：将 `position: sticky` 应用到 `.widget.toc-wrapper` 外层容器上（而不是内部的 `#toc-sidebar`），这样才能正确悬停
- **宽度优化**：减少目录层级缩进从 `1.5em` 改为 `0.8em`，让目录不再显得拥挤
- **文字换行**：添加 `white-space: normal` 和 `word-break: break-word`，防止长标题撑破容器
- **滚动优化**：
  - `max-height: calc(100vh - 120px)` - 自适应屏幕高度
  - `overflow-y: auto` - 目录过长时内部可滚动
  - 自定义滚动条样式（更细更美观）
- **交互效果**：
  - 悬停时显示左侧蓝色边框
  - 颜色过渡动画
  - 激活项高亮显示

**关键修复点**：
1. **Sticky 不生效问题**：原因是 `sticky` 被应用在了错误的元素上，现在移到了外层 widget 容器
2. **目录过窄问题**：通过减少 `padding-left` 和允许文字换行来解决

---

## 依赖安装

确保安装以下 npm 包：

```bash
npm install hexo-wordcount --save
npm install sharp --save-dev  # 仅用于生成 favicon，之后可删除
```

---

## 测试和部署

### 本地测试
```bash
hexo clean
hexo generate
hexo server
```

### 部署
```bash
hexo clean
hexo generate
hexo deploy  # 或使用您配置的部署方式
```

---

## 文件清单

### 修改的文件
- `scaffolds/post.md`
- `themes/maupassant/_config.yml`
- `themes/maupassant/layout/index.pug`
- `themes/maupassant/layout/post.pug`
- `themes/maupassant/source/css/style.scss`

### 新建的文件
- `source/favicon.ico`
- `themes/maupassant/layout/_widget/toc.pug`
- `themes/maupassant/layout/base-post.pug`

### 保持不变的文件
- `_config.yml` - 主站配置（已由用户自行配置）
- `source/img/avatar.jpg` - 头像文件

---

## 故障排除

### 问题1：目录显示过窄，层级缩进太多

**症状**：目录在侧边栏中显得非常拥挤，多级标题的缩进过大导致文字被压缩。

**原因**：默认的 `ol` 元素 `padding-left` 值过大（1.5em）。

**解决方案**：
- 在 CSS 中将 `ol` 的 `padding-left` 从 `1.5em` 减少到 `0.8em`
- 添加 `white-space: normal` 和 `word-break: break-word` 允许长标题换行

**相关代码**：见 `style.scss` 第 2552-2560 行

---

### 问题2：滚动时目录不悬停，无法固定在右侧

**症状**：向下滚动文章时，目录随着页面一起滚动消失，没有固定在窗口右侧。

**原因**：`position: sticky` 被错误地应用在了内部的 `#toc-sidebar` 元素上，而不是外层的 widget 容器。Sticky 定位需要应用在有足够滚动空间的父容器上才能生效。

**解决方案**：
1. 给目录 widget 添加专用类名 `.toc-wrapper`
2. 将 `position: sticky` 应用到 `.widget.toc-wrapper` 上（外层容器）
3. 移除 `#toc-sidebar` 上的 sticky 定位

**相关代码**：
- `toc.pug` 第 2 行：`.widget.toc-wrapper`
- `style.scss` 第 2500-2504 行：`.widget.toc-wrapper` 的 sticky 样式

**关键原理**：
- Sticky 元素需要在一个有滚动的容器内
- 应该应用在较外层的元素上，让内部元素作为滚动内容
- `top: 20px` 定义了元素 "粘住" 时距离视口顶部的距离

---

## 特性总结

✅ 默认文章模板包含完整的 Front Matter 字段
✅ 网站图标与头像保持一致
✅ 主页和文章页都显示字数统计和阅读时间
✅ 文章页右侧智能显示目录（有目录时）或个人信息（无目录时）
✅ 目录固定定位，随滚动保持可见（已修复）
✅ 目录宽度合理，层级缩进紧凑美观（已优化）
✅ 新文章默认开启目录功能

---

生成日期：2024-12-04
更新日期：2024-12-04（修复目录 sticky 和宽度问题）
