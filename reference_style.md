# CV 内容编辑详细教程

风格已自动应用（Inter 字体 + pill/chip 样式）。**现在教你如何自己改 CV 内容。**

---

## 总览：你的 CV 在哪个文件

**唯一要改的文件：** `F:\spyder\yong-huang.github.io\_pages\cv.md`

打开它，里面是这样的结构：

```markdown
---          ← 这部分是"配置头"，不要乱改
layout: page
title: CV
...（配置内容）
---          ← 配置头结束

## Education          ← 以下是"内容区"，全部由你改
## Work Experience
## Service
## Patents
```

**两个区域：**
- `---` 包起来的"配置头"：控制页面标题、导航位置等，**一般不用动**
- `---` 之后的内容：CV 实际显示的内容，**这是你要改的地方**

---

## 步骤 1：先把页面启用

**在配置头里改 1 个值：**

找到这一段：
```yaml
nav: false
```

改成：
```yaml
nav: true
```

并把下面的 `nav_order` 设为 `2`（让 CV 排在 blog 前面）：

```yaml
nav_order: 2
```

---

## 步骤 2：了解 4 种排版格式

参考站用了 4 种排版，**每种对应一个 HTML 块**。我会教你每种怎么写。

### 格式 1：Education / Work Experience（带日期的条目）

**视觉：**
```
Education                                              2024 - Present
华中科技大学 — M.S. in Computer Science
导师：白翔、江涛

B.S. in XXX                                            2018 - 2022
XXX University
```

**写法：**
```markdown
**华中科技大学** — M.S. in Computer Science
*2024 – Present · Advisor: Prof. Xiang Bai, Prof. Tao Jiang*

**XXX 大学** — B.S. in 通信工程
*2018 – 2022*
```

**关键点：**
- 第 1 行：`**...**` 加粗写学校名 + `—` + 专业
- 第 2 行：`*...*` 斜体写时间 + 备注（用 `·` 分隔）

---

### 格式 2：Service (Journal Reviewer 期刊评审)

**视觉：**
```
Service

Journal Reviewer
[T-PAMI] [T-IP] [AI]

Conference Reviewer
[ICME '19] [AAAI '22 '23 '25] [ICIP '23] [ICCV '23] [CVPR '20 '21 '23 '24] [ECCV '24]
```

**写法：**
```markdown
## Service

### Journal Reviewer

<span class="pill">T-PAMI</span>
<span class="pill">T-IP</span>
<span class="pill">T-IPAI</span>
<span class="pill">AI</span>

### Conference Reviewer

<span class="pill">ICME '19</span>
<span class="pill">AAAI '22 '23 '25</span>
<span class="pill">ICIP '23</span>
<span class="pill">ICCV '23</span>
<span class="pill">CVPR '20 '21 '23 '24</span>
<span class="pill">ECCV '24</span>
```

**关键点：**
- 每个 pill 是一个 `<span class="pill">...</span>`
- 中间用换行分开（也可以加空格）
- 想加新期刊/会议？复制一行改名字即可

---

### 格式 3：Patents (带链接的专利)

**视觉：**
```
Patents

Training Methods for Object Detection     [US 20230385648]
图像处理的方法及装置                       [CN 111524150]
```

**写法：**
```markdown
## Patents

- **Training Methods and Apparatuses for Object Detection** —
  <a class="chip" href="https://patents.google.com/patent/US20230385648A1/en">US 20230385648</a>

- **图像处理的方法及装置** —
  <a class="chip" href="https://patents.google.com/patent/CN111524150A/en">CN 111524150</a>
```

**关键点：**
- `**专利名**` 加粗
- `—` 长破折号
- `<a class="chip" href="链接">显示文字</a>` 链接
- 想加新专利？复制一段改名字+链接

---

### 格式 4：可选 — Projects / Skills（普通列表）

如果想加额外板块：

```markdown
## Projects

**项目名 1** — GitHub
- 项目描述第 1 行
- 项目描述第 2 行

**项目名 2** — 链接
- 描述

## Skills

- **编程：** Python, C++, MATLAB
- **框架：** PyTorch, TensorFlow
- **工具：** Git, LaTeX, Linux
```

---

## 步骤 3：完整模板（直接复制用）

把 `cv.md` 整个文件替换为：

```markdown
---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 2
description: Curriculum Vitae of Yong Huang
---

## Education

**Huazhong University of Science and Technology (HUST)** — M.S. in Computer Science
*2024 – Present · Advisor: Prof. Xiang Bai, Prof. Tao Jiang*

**XXX 大学** — B.S. in XXX
*20XX – 20XX*

## Work Experience

**Research Intern** — XXX 公司/实验室
*Summer 20XX*
- 项目描述
- 成果描述

## Service

### Journal Reviewer

<span class="pill">T-PAMI</span>
<span class="pill">T-IP</span>
<span class="pill">T-IPAI</span>
<span class="pill">AI</span>

### Conference Reviewer

<span class="pill">ICME '19</span>
<span class="pill">AAAI '22 '23 '25</span>
<span class="pill">ICIP '23</span>
<span class="pill">ICCV '23</span>
<span class="pill">CVPR '20 '21 '23 '24</span>
<span class="pill">ECCV '24</span>

## Patents

- **Training Methods and Apparatuses for Object Detection** —
  <a class="chip" href="https://patents.google.com/patent/US20230385648A1/en">US 20230385648</a>

- **图像处理的方法及装置** —
  <a class="chip" href="https://patents.google.com/patent/CN111524150A/en">CN 111524150</a>
```

---

## 步骤 4：保存并查看效果

**方法 A：VSCode 等编辑器**

1. 打开 `F:\spyder\yong-huang.github.io\_pages\cv.md`
2. 按上面模板修改内容
3. 保存

**方法 B：纯文本编辑器（记事本）**

1. 记事本打开 `cv.md`
2. 修改内容
3. 保存（注意编码选 UTF-8）

---

## 步骤 5：提交到 GitHub

打开终端（PowerShell 或 Git Bash）：

```bash
cd F:/spyder/yong-huang.github.io

# 看修改了哪些
git status

# 添加修改
git add _pages/cv.md

# ⚠️ 检查 Gemfile.lock 有没有变化（如果有就回退）
git diff Gemfile.lock
git checkout Gemfile.lock    # 如果有变化就执行

# 提交
git commit -m "Update CV content"

# 推送
git push origin main
```

等 2-3 分钟，访问 https://AderonHuang.github.io/yong-huang.github.io/cv/ 看效果。

---

## 常见修改操作

### 加一个 Section（如 Awards）

在 Education 后加：

```markdown
## Awards

**第一名，XXX 比赛** — CVPR 2024
*2024*

[证书 PDF](/assets/pdf/certificate.pdf)
```

### 加一个 Journal/Conference

复制现有 pill，**改名字**：

```markdown
<span class="pill">NeurIPS '24</span>    ← 新加的
<span class="pill">ICML '24</span>      ← 新加的
```

### 加一个 Patent

复制现有专利条目，**改名字+链接**：

```markdown
- **新专利名** —
  <a class="chip" href="https://patents.google.com/patent/XXX">专利号</a>
```

### 改时间/导师信息

找到对应条目，改第 2 行：

```markdown
原：*2024 – Present · Advisor: Prof. XXX*
改：*2024 – Present · Advisor: Prof. New Name*
```

---

## Markdown 速查

| 符号 | 作用 |
|------|------|
| `**文字**` | **加粗** |
| `*文字*` | *斜体* |
| `## 标题` | 二级标题（大标题） |
| `### 标题` | 三级标题（小标题） |
| `- 列表项` | 无序列表 |
| `[文字](URL)` | 链接 |
| `<br>` | 换行 |
| `&nbsp;` | 空格 |

---

## 调试

**pill/chip 没显示效果？**

1. 强制刷新浏览器：`Ctrl + F5`
2. 检查文件：`<span class="pill">` 不是 `(pill)`
3. 看 `assets/css/custom.css` 是不是上传了（GitHub 仓库里能看到）

**页面 404？**

- 检查 `_pages/cv.md` 的 `permalink: /cv/`
- 检查 `nav: true`

**deploy 失败？**

- 看 `build-debug` 分支的日志
- 提交时**不要**提交 `Gemfile.lock`

---

## 练习题

试着做以下修改练手：

1. 把 `XXX 大学` 改成你的真实本科学校
2. 在 Service 里加一个 NeurIPS '24 的 pill
3. 在 Patents 里加一个你（如果有）的专利

完成后跑 `git add -A && git commit -m "Update CV" && git push origin main` 看看效果。
