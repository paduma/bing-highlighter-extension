# Bing 高亮 Chrome 扩展演示

一个使用 **Vite** 和 **TypeScript** 构建的轻量级 Chrome 扩展，用于在 Bing 搜索结果中高亮用户定义的关键字，支持可拖拽的设置面板和流畅的 UI 过渡。此项目作为作品集演示，展示现代 Web 扩展开发技能。

---

## 目录
- [项目概述](#项目概述)
- [功能](#功能)
- [技术栈](#技术栈)
- [安装指南](#安装指南)
- [开发流程](#开发流程)
- [未来改进](#未来改进)
- [贡献指南](#贡献指南)
- [联系方式](#联系方式)
- [许可证](#许可证)

---

## 项目概述
此 Chrome 扩展允许用户在 Bing 搜索页面上高亮特定关键字。设置面板在点击时触发流畅的高度过渡（从悬停触发改为点击以优化用户体验），并支持拖拽定位。该项目展示了 **Vite**、**TypeScript**、**CRXJS Vite Plugin** 和 Chrome Manifest V3 API 的熟练应用。

此演示是我作品集的一部分，旨在展示前端开发、浏览器扩展架构和以用户为中心的设计能力。代码已在 [GitHub](https://github.com/paduma/bing-highlighter-extension) 上开源。

---

## 功能
### 当前功能（MVP）
- **交互式设置面板**：点击面板触发使用 CSS 动画的平滑高度过渡。
- **可拖拽面板**：用户可在页面上拖拽和重新定位设置面板。
- **关键字高亮**：用户输入关键字以在 Bing 搜索结果中高亮显示。
- **持久化存储**：使用 Chrome 的 `storage` API 本地保存关键字。
- **数据库集成（计划中）**：扩展初始化时从数据库加载保存的关键字。

### 优先功能
1. 点击触发的平滑面板过渡。
2. 可拖拽面板功能。
3. 关键字输入和高亮。

---

## 技术栈
- **Vite**：现代化快速构建工具。
- **TypeScript**：确保代码类型安全和可维护性。
- **CRXJS Vite Plugin**：简化 Chrome 扩展开发，支持 HMR 和 Manifest V3。
- **Chrome 扩展 API**：使用 Manifest V3 实现安全扩展功能。
- **后端（未来计划）**：使用 Node.js/Express 和 Firebase 或 MongoDB 进行关键字存储。

---

## 安装指南
### 前提条件
- Node.js（v16 或更高版本）
- npm 或 yarn
- Google Chrome 浏览器

### 安装步骤
1. **创建项目**：
   ```bash
   mkdir bing-highlighter-extension
   cd bing-highlighter-extension
   npm init -y
   npm install --save-dev typescript vite @types/chrome @crxjs/vite-plugin
   ```

2. **配置 Vite**：
   - 创建 `vite.config.ts` 文件：
     ```ts
     import { defineConfig } from 'vite';
     import { crx } from '@crxjs/vite-plugin';
     import manifest from './manifest.json';

     export default defineConfig({
       plugins: [crx({ manifest })],
     });
     ```

3. **运行开发服务器**：
   ```bash
   npm run dev
   ```

4. **构建生产版本**：
   ```bash
   npm run build
   ```

5. **在 Chrome 中加载扩展**：
   - 打开 Chrome，导航到 `chrome://extensions/`。
   - 启用“开发者模式”，点击“加载未打包扩展”。
   - 选择 Vite 生成的 `dist` 文件夹。

---

## 开发流程
### 步骤 1：项目初始化
- 使用 `npm init -y` 初始化 Node.js 项目。
- 安装依赖：TypeScript、Vite、`@types/chrome` 和 `@crxjs/vite-plugin`。
- 配置 `tsconfig.json` 和 `manifest.json`，支持 TypeScript 和 Chrome 扩展。

### 步骤 2：核心功能开发
- **设置面板**：实现点击触发的 CSS 过渡以获得平滑高度动画。
- **拖拽功能**：使用 `mousedown`、`mousemove` 和 `mouseup` 事件监听器实现面板拖拽。
- **关键字高亮**：开发内容脚本，通过 DOM 操作解析和高亮关键字。

### 步骤 3：CRXJS 集成
- 使用 CRXJS Vite Plugin 实现：
  - 自动解析 manifest 和管理入口点。
  - 热模块替换（HMR），提升开发效率。
  - 处理图片和样式等静态资源。

### 步骤 4：未来数据库集成
- 计划集成后端（如 Firebase）以实现云端关键字存储。
- 当前使用 Chrome 的 `storage.sync` API 进行本地存储。

---

## 未来改进
- **云同步**：将关键字存储在数据库中，支持跨设备访问。
- **自定义高亮**：允许用户自定义高亮颜色或样式。
- **多浏览器支持**：扩展到 Firefox 和 Edge。
- **分析功能**：跟踪关键字使用情况，提供用户洞察。
- **可访问性**：添加 ARIA 标签和键盘导航支持。

---

## 变现思路
- **免费增值模式**：免费提供基础功能，高级功能（如云同步、主题）通过订阅收费。
- **Chrome 网上商店**：发布扩展，支持一次性购买或应用内购买。
- **赞助**：与搜索相关工具合作，在扩展中展示推广内容。
- **众筹**：通过 Patreon 或 Buy Me a Coffee 获得社区支持。
- **捐款**：在 GitHub 上添加 Sponsors 链接，支持开源贡献。

---

## 贡献指南
欢迎贡献！请按照以下步骤：
1. Fork 本仓库。
2. 创建功能分支（`git checkout -b feature/YourFeature`）。
3. 提交更改（`git commit -m 'Add YourFeature'`）。
4. 推送到分支（`git push origin feature/YourFeature`）。
5. 提交 Pull Request。

---

## 联系方式
- **GitHub**: [paduma](https://github.com/paduma/)
- **LinkedIn**: [AlexAcademy](https://www.linkedin.com/in/alexacademy/)

关注我以获取项目更新、直播编码和更多 Web 开发内容！

---

## 许可证
本项目采用 [MIT 许可证](LICENSE)。