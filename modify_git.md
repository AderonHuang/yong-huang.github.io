# Yong Huang 个人网站修改指南

本指南用于完善 `yong-huang.github.io` 网站的 4 个内容板块 + 头像。每次改完后按"提交流程"推送即可上线。

---

## 1. 替换头像

**文件路径：** `assets/img/prof_pic.jpg`

**操作：**
1. 准备一张本人照片（建议 500x500 以上，正方形）
2. 重命名为 `prof_pic.jpg`
3. 放到 `F:\spyder\yong-huang.github.io\assets\img\` 目录下（覆盖原文件）

---

## 2. CV 页面（在线简历）

**文件路径：** `_pages/cv.md`

**说明：** al-folio v1 推荐用 JSON Resume + RenderCV 的方案，但**最简单的方式是直接修改这个 Markdown 文件**。

**修改方法 — 打开 `_pages/cv.md`，把 front matter 改成：**

```markdown
---
layout: cv
title: CV
permalink: /cv/
nav: true
---

## 教育经历

**华中科技大学** — 电子信息与通信学院  
硕士，计算机科学与技术，2024 - 至今  
导师：白翔教授、江涛教授

**本科院校** — 院系  
学士，专业，年份

## 研究兴趣

- 计算机视觉
- 深度学习
- 2D / 3D 目标检测

## 论文

参见 [Publications](/publications/)

## 技能

- **编程语言：** Python, C++, MATLAB
- **框架：** PyTorch, TensorFlow
- **工具：** Git, LaTeX, Linux

## 荣誉奖项

- 奖项 1，年份
- 奖项 2，年份
```

如果想用 PDF 版 CV：把 PDF 放到 `assets/pdf/cv.pdf`，然后在文件顶部加：
```markdown
[CV (PDF)](/assets/pdf/cv.pdf)
```

---

## 3. Publications 页面（论文列表）

**文件路径：** `_bibliography/papers.bib`

**说明：** 用 BibTeX 格式写论文，jekyll-scholar 会自动渲染。

**修改方法 — 用文本编辑器打开 `papers.bib`，按 BibTeX 格式添加论文：**

```bibtex
@inproceedings{yourname2024paper,
  title     = {Your Paper Title},
  author    = {Yong Huang and Others},
  booktitle = {Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},
  year      = {2024},
  pages     = {1--10},
  pdf       = {https://arxiv.org/pdf/xxxx.xxxxx.pdf},
  selected  = {true}
}
```

**字段说明：**
- `title` — 论文标题
- `author` — 作者列表，`Yong Huang` 会被自动加粗
- `booktitle` 或 `journal` — 会议/期刊名
- `year` — 年份
- `pdf` — PDF 链接
- `code` — 代码链接（可选）
- `selected = {true}` — 标记为精选论文

也可以用 Google Scholar 导出 BibTeX，然后粘贴进来。

---

## 4. Blog 页面（博客）

**文件路径：** `_posts/` 目录下新建 `.md` 文件

**新建博客方法：**

1. 在 `F:\spyder\yong-huang.github.io\_posts\` 下新建文件：
   ```
   2026-07-28-my-first-post.md
   ```
   （文件名必须以 `YYYY-MM-DD-` 开头）

2. 文件内容模板：
   ```markdown
   ---
   title: "我的第一篇博客"
   date: 2026-07-28
   categories: [Computer Vision]
   tags: [deep-learning, object-detection]
   ---

   这是博客正文。支持 Markdown 语法。

   ## 二级标题

   - 列表项 1
   - 列表项 2

   ```python
   print("代码块")
   ```
   ```

3. 推送后会自动出现在 `/blog/` 页面。

---

## 5. Misc 页面（杂项）

**文件路径：** `_pages/misc.md`

**修改方法 — 打开 `_pages/misc.md`，修改内容为：**

```markdown
---
layout: page
title: Misc
permalink: /misc/
nav: true
---

## 兴趣爱好

- 摄影、跑步、读书...

## 推荐资源

- [资源名称](https://example.com) — 简介
- [另一个资源](https://example.com) — 简介

## 开源贡献

- [项目名](https://github.com/xxx) — 简介

## 其他

任何想放的内容...
```

---

## 6. 社交链接（可选）

**文件路径：** `_data/socials.yml`

**修改方法 — 打开文件，按 YAML 格式添加：**

```yaml
scholar: https://scholar.google.com/citations?user=YOUR_ID
github: https://github.com/AderonHuang
email: your@email.com
linkedin: https://linkedin.com/in/YOUR_ID
```

---

## 提交流程

每次修改完文件后，按以下步骤提交并部署到 GitHub Pages：

### 步骤 1：检查修改

```bash
cd F:/spyder/yong-huang.github.io
git status
```

会显示修改了哪些文件。

### 步骤 2：添加所有修改

```bash
git add -A
```

### 步骤 3：提交（写清楚改了什么）

```bash
git commit -m "Update CV page"
```

常见 commit 消息：
- `Update profile picture`
- `Add publication: paper title`
- `Update CV and Misc pages`
- `Add new blog post: my first post`

### 步骤 4：推送到 GitHub

```bash
git push origin main
```

### 步骤 5：等待部署

去 https://github.com/AderonHuang/yong-huang.github.io/actions 看 "Deploy site" workflow：
- 黄色圆点 = 正在运行
- 绿色 ✓ = 部署成功
- 红色 ✗ = 失败，查看错误日志

部署成功后（2-3 分钟）访问：
```
https://AderonHuang.github.io/yong-huang.github.io/
```

---

## 一键脚本（可选）

可以把常用命令保存为 `F:\spyder\yong-huang.github.io\deploy.bat`：

```bat
@echo off
cd /d F:\spyder\yong-huang.github.io
git add -A
git commit -m "Update site content"
git push origin main
echo.
echo Done! Check: https://github.com/AderonHuang/yong-huang.github.io/actions
pause
```

以后双击 `deploy.bat` 就能一键提交推送。

---

## 常见问题

**Q: 修改后访问网站看不到变化？**
- 等待 2-3 分钟（GitHub Pages 部署需要时间）
- 强制刷新浏览器：`Ctrl + F5`

**Q: deploy 失败？**
- 去 Actions 页面看错误日志
- 通常是 YAML 格式错误或文件路径不对

**Q: 想要修改网站主题颜色？**
- 改 `_sass/_variables.scss`
- 改完要重新部署

**Q: 如何删除示例内容？**
- `_bibliography/papers.bib` 里的示例论文条目可以直接删
- `_posts/` 里的示例博客可以直接删
- `_news/` 里的示例新闻可以直接删

---

## 推荐修改顺序

1. 改 `_config.yml`（已完成）
2. 改 `_pages/about.md`（已完成）
3. 替换头像 `assets/img/prof_pic.jpg`
4. 修改 `_pages/cv.md`
5. 添加论文到 `_bibliography/papers.bib`
6. 修改 `_pages/misc.md`
7. 写第一篇博客到 `_posts/`
8. 配置社交链接 `_data/socials.yml`
