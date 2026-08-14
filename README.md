# 学术个人网站

一个纯 HTML/CSS/JS 的学术个人主页，无需任何构建工具，直接可部署到 GitHub Pages。

## 文件结构

```
academic-website/
├── index.html      # 主页（关于、研究、论文、教学、简历、联系）
├── css/style.css   # 样式（支持深浅色主题）
├── js/main.js      # 交互（导航、主题切换、滚动高亮）
└── README.md       # 本说明文件
```

## 自定义步骤

1. **基本信息**：打开 `index.html`，替换所有的"张三"、"XX大学"、研究方向等占位内容
2. **头像**：把 `<img src="...">` 替换为你的照片路径（建议放在网站根目录，如 `photo.jpg`）
3. **论文列表**：在"发表论文"区块添加你的论文，按需增删 `[PDF]` `[代码]` 链接
4. **简历 PDF**：把你的简历命名为 `cv.pdf` 放在本文件夹，"简历"区块的下载链接即可生效
5. **页脚**：更新年份和你的名字

## 本地预览

直接用浏览器打开 `index.html` 即可预览；也可以使用本地服务器：

```bash
# 如果有 Python
cd academic-website
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 部署到 GitHub Pages（免费）

1. 在 GitHub 上新建仓库，命名为 `<你的用户名>.github.io`
2. 把本文件夹的**内容物**（index.html、css、js 等）推送到该仓库：
   ```bash
   git init
   git add .
   git commit -m "Initial academic website"
   git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
   git push -u origin main
   ```
3. 稍等片刻，访问 `https://<你的用户名>.github.io`

## 绑定自定义域名（可选）

1. 在域名服务商处（腾讯云/Namecheap 等）把域名 CNAME 解析到 `<你的用户名>.github.io`
2. 在仓库根目录新建文件 `CNAME`，内容为 `yourdomain.com`
3. 在 GitHub 仓库 Settings → Pages 中勾选 "Enforce HTTPS"

## 修改配色

打开 `css/style.css`，修改 `:root` 里的 `--color-accent`（主题色）等变量即可。
