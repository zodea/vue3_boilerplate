<div align="center">
  <h1>vue3_boilerplate</h1>
  <a href="https://github.com/zodea/vue3_boilerplate">
  <img alt="GitHub" src="https://img.shields.io/github/license/zodea/vue3_boilerplate?style=flat-square">
  </a>
</div>

## 简介

vue3_boilerplate 是基于 vite vue-ts 模版搭建的项目，使用了 vue3,vite2,TypeScript 等主流技术开发。

## 特性

- **Vue3**: 最前沿前端开发框架
- **Vite2**： 下一代前端开发与构建工具
- **TypeScript**: 应用程序级 JavaScript 的语言
- **WindiCSS**: 下一代实用优先的 CSS 框架
  - **daisyui**: Tailwind CSS Components
- PostCSS 8 + postcss-pxtorem: 自适应不同分辨率
- EsLint
- Prettier
- Alias @ to <project_root>/src
- Using new script setup syntax (see [Vue rfc #227](https://github.com/vuejs/rfcs/pull/227))

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

- 现结合 commitizen 使用，使用 git cz 规范化提交代码

首先安装 commitizen 工具

```bash
npm install commitizen -g
```

接下来，初始化你的项目以使用 cz-conventional-changelog 适配器，方法是键入:

```bash
commitizen init cz-conventional-changelog --save-dev --save-exact
```

如果你正在使用 Yarn:

```bash
commitizen init cz-conventional-changelog --yarn --dev --exact
```

## 安装使用

- 获取项目代码

```bash
git clone https://github.com/zodea/vue3_boilerplate.git
```

- 安装依赖

```bash
cd vue3_boilerplate

yarn install
```

- 运行 Ò

```bash
yarn dev
```

- 打包

```bash
yarn build
```

## 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                             not support                                                                                              |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## License

[MIT © zodea-2021](./LICENSE)
