# 高阶 <Badge type="danger" text="12" vertical="top" />

## 搭建 <Badge type="warning" text="4" vertical="top" />

### 搭建标准 <Badge type="tip" text="3" vertical="top" />

#### 模块研发规范

- Webpack Module Fedoration

#### 模块依赖关系描述规范

- import-maps

#### 模块数据描述规范

- JSON Schema 规范

### 搭建过程 <Badge type="tip" text="3" vertical="top" />

- 模块化搭建
- 数据投放
- 页面主题
- 页面插件
- 区块搭建

### 终端渲染 <Badge type="tip" text="3" vertical="top" />

#### SSR

#### 数据接口网关

#### 国际化

- 跨国文件同步
- 多语言/多地区/多货币

#### 多端渲染

- 终端识别

#### CDN + 源栈缓存架构

### 搭建物料 <Badge type="tip" text="3" vertical="top" />

- 模块
- 区块
- 源码页面
- 页面容器

## Node.js <Badge type="warning" text="4" vertical="top" />

### Serverless <Badge type="tip" text="3" vertical="top" />

#### Serverless 框架

- Midway Serverless、Dapr

#### 应用

- 云端一体化研发
- 在线服务编排
- App Serverless

#### 云平台

- 公有云平台：AWS Lambda、阿里云 FC、腾讯云 SCF
- 私有化平台：K8s + KNative + ServiceMesh

### Devops <Badge type="tip" text="7" vertical="top" />

- 进程管理
  - PM2
  - Docker
- 日志
- 负载均衡
- shell 命令
- Docker
- 性能监控
  - Open Telemetry
  - Alinode
  - Easy Monitor
- web 服务器
  - Nginx
  - Tengine

### 数据库 <Badge type="tip" text="9" vertical="top" />

- MySQL
- PostgreSQL
- MongoDB
- Redis
- LiteDB
- Oracle
- MS SQL Server
- PolarDB-云原生
- OceanBase-云数据库

### API Clients <Badge type="tip" text="2" vertical="top" />

- REST
- GraphQL

### 分布式服务 <Badge type="tip" text="4" vertical="top" />

#### RPC

- gRPC
- Dubbo
- Dnode

#### 任务调度

- Agenda

#### 实时通信

- Socket.io

#### 消息

- RabbitMQ
- Kafka
- mqtt

### Web Frameworks <Badge type="tip" text="8" vertical="top" />

- Express.js
- Koa.js
- Sails.js
- Egg.js
- Midway.js
- Meteor.js
- Fastify.js
- Next.js

## IDE <Badge type="warning" text="4" vertical="top" />

### 底层能力 <Badge type="tip" text="4" vertical="top" />

- Command
  - IDE 基础功能模块之间一种解耦方式，同时提供部分内置命令供插件调用
- File Service
  - 文件服务抽象，提供 FS Provider 接口，可给予 Node fs 实现本地文件读写，或基于 BrowserFS、MemoryFS 等实现纯前短多文件系统
- Storage
  - IDE 存储服务，管理 IDE 如用户设置及插件设置等缓存内容
- Theme/Syntax highlighting
  - Css variables、Textmate、vscode-oniguruma

### 支撑服务 <Badge type="tip" text="4" vertical="top" />

- 插件市场
  - Egg、OSS、权限管控、Group、Client 分组
- 日志服务
  - spdlog
- 更新服务
  - electron-updater、差量更新
- 容器服务
  - K8S、Docker、Pounch

### 核心能力 <Badge type="tip" text="4" vertical="top" />

- 通信服务
  - 遵循基于 JSONRPC 2.0 协议，使用 vscode-jsonrpc
- 插件体系
  - 兼容 VS Code 插件协议，自由 KAITIAN
- 编辑器（LSP）
  - Monaco Editor、Language Server Protocol
- 调试服务
  - Debug Adapter Protocol

### 功能模块 <Badge type="tip" text="4" vertical="top" />

- 资源管理
  - 文件树虚拟列表
- Terminal
  - node-pty、xterm、断连恢复
- SCM 源代码管理
  - 源代码管理抽象接口，通过 git 等插件实现
- Layout
  - 可扩展、高自由度、配置化插槽

### 场景 <Badge type="tip" text="2" vertical="top" />

#### Local

- 小程序开发者工具
- ProCode 开发

#### Cloud

- 模块搭建
- D2C
- LowCode 开发

## 中后台 <Badge type="warning" text="4" vertical="top" />

### 规范和标准 <Badge type="tip" text="5" vertical="top" />

- 中后台物料规范
  - 文件目录、API、国际化、无障碍
- 中后台低代码搭建协议规范
  - 协议结构、低代码物料描述、应用描述
- 微前端规范
  - 主应用、子应用、微模块、生命周期函数
- 模型驱动协议规范
  - 协议元信息、业务模型、API 实例描述
- 中后台领域名次定义
  - 前端物料（组件/区块/模板）、低代码引擎（入料/编排/渲染/出码）、模型驱动（DO/BO/VO/UI）

### 基础设施 <Badge type="tip" text="4" vertical="top" />

- 基础 UI 组件库
  - Fusion、AntD、Material UI
- 物料脚手架
  - 统一脚手架 Build-Scripts、组件开发、模板开发
- 物料中心/资产中心
  - 物料大包/资产包
- Lowcode 引擎
  - 入料模块、编排模块、渲染模块、出码模块、大纲面板、编辑面板、属性面板、属性设置器

### 开箱即用的解决方案 <Badge type="tip" text="8" vertical="top" />

- 表单组件
  - 动态表单、表单解决方案 FormilyJS
- 列表组件
- 图表组件库
  - ECharts、AntV、BizCharts
- WebExcel SDK
  - SpreadJS
- 低代码场景设计器 SDK
  - 页面设计器、表单设计器、流程设计器、图表设计器
- UIPaaS
  - 中后台搭建、小程序搭建、BPMS
- 微前端
  - IceStark、qiankun、single-spa
- 模型驱动 SDK

### 研发平台 <Badge type="tip" text="3" vertical="top" />

- 在线设计
  - D-One
- 在线研发（Web IDE）
  - 阿里云在线研发平台 SpaceX
- No-Code/Low-Code 研发平台
  - 宜搭、乐高、CONE、云凤蝶、Power Apps、outsystems、salesforce lightning

## 体验管理 <Badge type="warning" text="5" vertical="top" />

### 体验模型设计 <Badge type="tip" text="2" vertical="top" />

- 体验指标
  - PV、转化率、跳失率
- 体验模型
  - HEART 模型、蜂窝模型、5E 模型等

### 体验数据采集 <Badge type="tip" text="3" vertical="top" />

- 行为数据采集
- 稳定性数据采集
- 性能数据采集

### 体验分析方法 <Badge type="tip" text="7" vertical="top" />

- 任务分析
  - 任务耗时、任务转化率、任务完成树等
- 表单分析
  - 表单提交耗时
  - 表单提交成功率
  - 表单出错率等
- 主观分析
  - 满意度（PSAT、CSAT）、净推荐值（NPS）、客户费力度（CES）等
- 用户反馈
  - 工单、评价、反馈等
- 行为分析
  - 行为流、热力图、网站旅程
- 可用性测试
- 用户验收

### 数据洞察方法 <Badge type="tip" text="3" vertical="top" />

- 多维分析
  - 指标、维度、筛选项概念；数据立方（cube）的旋转（rotation）、切片与切块（slice and dice）、钻取（drill-down）等操作
- 驱动因子分析（归因分析）
  - 启发式归因、算法归因（logistics 回归、生存模型、probabilistic 模型等）
- 行为预测
  - FM 模型、FNN 模型、PNN 模型等

### 体验工具、平台 <Badge type="tip" text="3" vertical="top" />

- APM 平台
  - Sentry、ARMS、Fundebug 等
- 体验数据平台
  - hotjar、fullstory、mixpanel 等
- 综合数据平台
  - GrowingIO、友盟、Google Analytics 等

## 数据可视化 <Badge type="warning" text="7" vertical="top" />

### 技术标准 <Badge type="tip" text="5" vertical="top" />

- Canvas
- SVG
- WebGL/2
- WebGPU
- OpenGL

### 数理统计 <Badge type="tip" text="4" vertical="top" />

- 统计学
- 平面几何
- 线性代数
- 离散数学

### 图形美学 <Badge type="tip" text="4" vertical="top" />

- 色彩
- 图形
- 动画
- 格式塔理论

### 可视化基础概念 <Badge type="tip" text="6" vertical="top" />

- 数据类型
- 视觉通道与映射
- 信息密度
- 可视化隐喻
- 图形符号学与图形语法
- 基础图表类型
  - 折线图
  - 柱形图（条形图）
  - 饼状图（环形图）
  - 散点图（气泡图）
  - 雷达图
  - 地图
  - 多维表格
  - 其他

### 绘图引擎 <Badge type="tip" text="2" vertical="top" />

- 2D
- 3D

### 图表类库/可视化框架 <Badge type="tip" text="4" vertical="top" />

- 基础可视化框架
  - D3
  - G2
  - F2
  - Vega
- 常用统计图表
  - Chartjs
  - Echarts
  - Highcharts
  - G2Plot
- 图分析与编排
  - Cytoscape
  - G6
  - mxGraph
  - Sigma.js
  - X6
- 地图空间可视化
  - Leaflet
  - L7
  - Mapbox
  - PolyMaps

### 领域方案 <Badge type="tip" text="2" vertical="top" />

- 监控可视化
  - Grafana
- 关系可视分析
  - Graphin

## 工程体系 <Badge type="warning" text="6" vertical="top" />

### 初始化 <Badge type="tip" text="3" vertical="top" />

- 工程模版
- 物料
- 最佳实践

### 开发 <Badge type="tip" text="5" vertical="top" />

- Code Lint
- Mock
- Debug/Preview
- Code Review
- web IDE

### 构建 <Badge type="tip" text="4" vertical="top" />

- 本地构建
- 云端构建
- 多语言构建
- sourcemap

### 测试 <Badge type="tip" text="3" vertical="top" />

- 单测/E2E
- 安全扫描
- CI

### 发布 <Badge type="tip" text="6" vertical="top" />

- 卡口
- 权限控制
- 灰度放量
- 流量监控
- 回滚
- CD

### 监控 <Badge type="tip" text="2" vertical="top" />

#### 监控

- 上报标准
- 监控平台
- 告警诊断

#### 安全生产

- 前端安全环境
- 攻防演练
- 变更管控

## 国际化 <Badge type="warning" text="4" vertical="top" />

### 多语言 <Badge type="tip" text="6" vertical="top" />

- 标准文案
- 翻译术语库
- 文案本地化测试
- 自动文案溯源
- 多语言 banner
- RTL

### 本地化 <Badge type="tip" text="5" vertical="top" />

- 本地化通用组件
- Locale Data
- CLDR-SDK
- 全球化数字地图
- 本地化开发规约

### 体验度量 <Badge type="tip" text="3  " vertical="top" />

- 标准设计规范
- 体验度量
- 用研工具

### 极致性能 <Badge type="tip" text="6" vertical="top" />

- CDN&网络链路
- 资源域名
- 海外性能监控
- 地区化实验环境
- 端性能
- 差异化投放

## 跨端技术 <Badge type="warning" text="6" vertical="top" />

### 跨端解决方案 <Badge type="tip" text="2" vertical="top" />

#### 跨平台

- Web
- Electron

#### 移动端

- Hybrid
- ReactNative/Weex
- Flutter

### 一码多端 <Badge type="tip" text="2" vertical="top" />

#### 规范

- W3C/WHATWG
- 小程序
- 其他（XML、Dart）

#### 框架

- 增强型
- 编译时
- 运行时

### 跨端 API <Badge type="tip" text="3" vertical="top" />

#### 桥接与通信

- JSBridge

#### 跨端 API 规范

#### 平台配套

- BridgeSDK
- 自动化测试
- Can I Use

### 跨端搭建 <Badge type="tip" text="4" vertical="top" />

#### 标准与规范

- 物料规范
- 搭建协议

#### 一码多搭

- Web
- 小程序
- 原生 Native

#### 跨端调试

- DevTools
- 模拟器调试
- 真机调试

#### 统一发布

### 跨端组件 <Badge type="tip" text="3" vertical="top" />

#### 标准与规范

- 脚手架
- 文件结构
- 属性与 API
- 发布与引用

#### 视觉交互

- 自适应
- 平台特性

#### 跨端组件

- 跨容器（H5/小程序）
- 跨平台（PC/无线）

### 跨端性能 <Badge type="tip" text="4" vertical="top" />

#### 性能优化最佳实践

- CSR
- NSR
- SSR
- 渲染容器优化

#### 性能指标

- FCP
- LCP
- TTI
- TBT

#### 性能采集

- 性能埋点
- SDK
- 采样与分析

#### 性能大盘

- OLAP
- 数据可视化

## 互动技术 <Badge type="warning" text="7" vertical="top" />

### 技术标准 <Badge type="tip" text="10" vertical="top" />

### 基础概念 <Badge type="tip" text="2" vertical="top" />

### 互动引擎 <Badge type="tip" text="6" vertical="top" />

### 基础知识 <Badge type="tip" text="3" vertical="top" />

### 工程体系 <Badge type="tip" text="5" vertical="top" />

### 基础组件 <Badge type="tip" text="3" vertical="top" />

### 核心能力输出 <Badge type="tip" text="6" vertical="top" />

## 智能化 <Badge type="warning" text="5" vertical="top" />

### 总结展望 <Badge type="tip" text="3" vertical="top" />

- 理论
- 技术
- 工程体系

### 前端算法框架 <Badge type="tip" text="3" vertical="top" />

- Tensorflow.js
- datacook
- Pipcook

### 商业化能力 <Badge type="tip" text="2" vertical="top" />

- 数据
- 模型

### 研发能力 <Badge type="tip" text="5" vertical="top" />

- D2C 视觉稿转编码
- P2C PRD 转编码
- S2C 服务转编码
- C2C 编码转编码
- 鲸幂智能 UI

### 业务能力 <Badge type="tip" text="3" vertical="top" />

#### C 端研发解决方案

- 自定义 DSL
- 自定义组件
- 自定义 Model
- 自定义编辑器插件
- 接口服务调用

#### B 端研发解决方案

- 多场景组件识别样本制造
- 目标检测与图片分类模型训练
- 代码转换器

#### 端智能解决方案

- 模型运算框架
- 常见业务模型能力
- 端智能工程能力

## 多媒体 <Badge type="warning" text="5" vertical="top" />

### 音视频基础 <Badge type="tip" text="3" vertical="top" />

- 基础概念
- 容器格式
- 编码格式

### 直播技术 <Badge type="tip" text="3" vertical="top" />

- 推流
- 流媒体协议
- 流媒体服务

### 播放器技术 <Badge type="tip" text="5" vertical="top" />

- 拉流
- Demux
- 解码
- Remux
- 渲染

### Web 媒体技术 <Badge type="tip" text="6" vertical="top" />

- 流操作基础
- WebRTC
- MSE
- WebAssembly
- WebXR
- WebGL

### 开源产品和框架 <Badge type="tip" text="6" vertical="top" />

- flv.js
- hls.js
- video.js
- FFmpeg
- OBS
- MLT
