# Gallipoli Wiki 复刻站设计规格

日期：2026-08-24  
状态：已完成对话设计审批，等待用户复核书面规格

## 1. 项目目标

在现有 `Gallipoli` 项目目录中建立一个 Gallipoli 游戏攻略站。视觉布局和信息层级参照 `https://vvultimatum.net/`，但不复制对标站的文案、图片、Logo 或品牌资产。网站使用 Gallipoli 官方媒体和项目内已经核验的研究材料。

第一阶段必须实现首页、16 个英语关键词内页、MDX 内容系统、响应式布局、深浅色主题和完整 SEO 基础设施。英语源内容通过复核后，再生成土耳其语、德语和法语版本。

## 2. 页面范围

### 2.1 路由

- `/`：进入默认英语版本 `/en`
- `/[locale]`：Gallipoli 首页
- `/[locale]/maps`：地图列表／导航页，同时对应关键词 `gallipoli maps`
- `/[locale]/guides/trenches`：`gallipoli trenches`
- `/[locale]/history/campaign-map`：`gallipoli campaign map`
- `/[locale]/history/landing`：`gallipoli landing`
- `/[locale]/platforms/steam`：`gallipoli steam`
- `/[locale]/platforms/ps5`：`gallipoli ps5`
- `/[locale]/release-date`：`gallipoli release date`
- `/[locale]/history/ww1`：`gallipoli ww1`
- `/[locale]/history/campaign`：`gallipoli campaign`，并覆盖已合并的同义表达 `gallipoli war`
- `/[locale]/history/battles`：`gallipoli battle`
- `/[locale]/history/peninsula`：`gallipoli peninsula`
- `/[locale]/history/turkey`：`gallipoli turkey`
- `/[locale]/history/australia`：`gallipoli australia`
- `/[locale]/game`：`gallipoli ww1 game`
- `/[locale]/series`：`gallipoli series`
- `/[locale]/developer/blackmill-games`：`gallipoli blackmill games`
- `locale` 首期固定为 `en`、`tr`、`de`、`fr`

第一阶段只发布上述路由的英语版本。非英语路由基础设施同时建立，但土耳其语、德语和法语正文在英语源内容审核通过后生成；生成前不得发布空白或机器占位页面。

### 2.2 首页模块顺序

1. 顶部导航：Logo、Maps、Guides、Platforms、Release、History、语言选择、主题切换
2. Hero：Gallipoli 标题、粉丝站标语、官方预告视频、简介、真实数据标签、三个行动按钮
3. Latest Updates：仅显示可核验更新；缺失时显示“待确认”
4. Start Here：新手指南、地图、Expedition 模式、职业与武器四张步骤卡
5. Popular Pages：横向卡片轮播
6. What is Gallipoli：游戏介绍、官方媒体、事实数据
7. Explore the Wiki：分类入口卡片
8. Final CTA：新手指南入口和官方商店入口
9. 页脚：站点介绍、官方链接、法律页、多语言入口和非官方声明

### 2.3 地图列表页

- 面包屑、官方媒体头图、标题与简介
- 明确区分游戏地图与真实历史地图
- 地图卡片网格
- 桌面端采用主内容区加 Wiki 侧栏；移动端改为单列
- 侧栏包含分类导航、兑换码状态和官方购买入口
- 页脚与首页共用

### 2.4 关键词文章详情页

- 面包屑、标题、直接回答搜索问题的摘要和更新时间
- 与关键词意图匹配的官方媒体图或有明确授权的历史资料图
- 约 1200 个英文单词的 MDX 正文，以 H2 分节，每个普通段落 3–4 句并适合扫读
- 文章目录、事实／待确认提示框、相关页面和来源区
- 与地图列表页共用 Wiki 侧栏和页脚
- 每个 `keywords.json` 关键词只能映射到一个可索引页面；不得为同一意图创建重复页面

## 3. 技术架构

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next-intl` 管理四种语言
- `next-mdx-remote/rsc` 渲染按语言和 slug 动态加载的 MDX 文章内容
- 页面默认静态生成
- 每种语言生成独立 metadata、canonical 和 hreflang
- 主题支持亮色、暗色与跟随系统，默认跟随系统主题

建议目录：

```text
Gallipoli/
├─ app/[locale]/
│  ├─ page.tsx
│  ├─ maps/page.tsx
│  └─ [...segments]/page.tsx
├─ components/
├─ content/
│  └─ en/
│     ├─ guides/trenches.mdx
│     ├─ history/*.mdx
│     ├─ platforms/*.mdx
│     └─ 其余关键词页面 MDX
├─ messages/
├─ data/
│  ├─ site.ts
│  ├─ navigation.ts
│  └─ maps.ts
└─ public/
```

## 4. 组件边界

- `SiteHeader`：主导航、语言切换、主题切换、移动端菜单
- `HeroSection`：首页首屏、行动按钮和事实标签
- `VideoModal`：YouTube 弹窗、键盘关闭、焦点管理和备用外链
- `StatsChips`：统一显示已核验数据
- `GuideSteps`：四步新手引导
- `PageCarousel`：热门页面横向浏览
- `CategoryGrid`：Wiki 分类入口
- `WikiSidebar`：分类导航、兑换码状态和官方购买入口
- `MapCard`：地图列表卡片
- `KeywordArticlePage`：按路由载入关键词页面元数据和 MDX 正文
- `Breadcrumbs`：本地化面包屑
- `TableOfContents`：MDX 标题导航
- `MdxRenderer`：标题、列表、表格、提示框、图片和来源引用
- `SiteFooter`：官方链接、法律入口和非官方声明

每个组件只有单一职责。品牌数据、事实和翻译不得散落在组件内部。

## 5. 内容与数据来源

`data/site.ts` 是品牌、官方链接、主题和首页事实的唯一结构化来源。`data/maps.ts` 保存地图索引。`data/keyword-pages.ts` 保存 16 个关键词与路由、MDX 文件、页面分类的一对一映射。`messages/*.json` 保存界面翻译。`content/<locale>/**/*.mdx` 保存文章正文。

允许使用的事实来源是现有 `关键词素材.md` 中已经核验的 Steam、PlayStation、BlackMill Games、WW1 Game Series 官方资料，以及其中列出的权威历史机构资料。缺少可靠来源的字段显示“待确认”，不存在的兑换码显示“暂无”。

首页已核验事实：

- 游戏名：Gallipoli
- 发售日：2026-08-20
- 开发商／发行商：BlackMill Games
- 系列：WW1 Game Series
- 战斗规模：50-player objective-based battles
- 职业：10 historic classes
- 首发地图：5
- 平台：Steam、Epic Games Store、Microsoft PC、PS5、Xbox Series X|S
- 兑换码：暂无

官方链接：

- 官网：`https://www.ww1gameseries.com/gallipoli/`
- Discord：`https://discord.com/invite/ww1gameseries`
- YouTube：`https://www.youtube.com/@WW1GameSeries`
- Steam：`https://store.steampowered.com/app/3065940/Gallipoli/`
- 首页视频：`https://youtu.be/GEAVtcS4KMI`

## 6. 视频设计

首页使用 Gallipoli Official Launch Trailer。Hero 中展示视频封面、播放按钮和 “Official Launch Trailer” 标签。点击后在站内模态框播放 YouTube 视频；播放器懒加载，打开前不加载 iframe。加载失败时显示普通 YouTube 外链。模态框支持 Escape、关闭按钮、背景点击和正确的焦点返回。

## 7. 视觉设计

布局、栅格、留白、卡片层级、内容与侧栏比例、移动端折叠逻辑参照对标站。品牌图像、文案和标识使用 Gallipoli 独立资产。

主题使用军红、沙土色、炭黑和米白：

```css
/* 亮色主题 */
--nav-theme: 4 62% 39%;
--nav-theme-light: 4 68% 51%;

/* 暗色主题 */
--nav-theme: 4 68% 48%;
--nav-theme-light: 4 72% 60%;
```

桌面端使用宽内容容器、圆角卡片、细边框和双栏文章布局。移动端导航折叠，正文和 Wiki 侧栏改为单列，卡片保持可触控尺寸。

## 8. 多语言

- 英语是内容源语言，第一阶段先完成并审核 16 个英语关键词页面
- 土耳其语、德语、法语在后续阶段从已审核英语源生成，不从未经审核的草稿直接翻译
- 第一阶段提供四种语言的公共界面翻译，但仅英语关键词正文可索引；缺少正文的语言版本不进入 sitemap
- 游戏名、开发商名、平台名和地图专名保留官方拼写
- 不允许因缺少翻译而静默混入错误语言；关键翻译缺失应使构建或测试失败
- “待确认”与“暂无”必须按语言明确翻译并保持不同语义

## 9. SEO

首页核心搜索意图为 `Gallipoli game guide`。16 个内页分别使用 `keywords.json` 中的一项作为唯一主关键词。

每个英语关键词页必须满足：

- Title 包含完整关键词，总长度 40–60 个字符
- Meta description 包含完整关键词，总长度 140–160 个字符
- 开场首段直接回答玩家搜索问题
- 正文目标约 1200 个英文单词；真实素材不足时允许短于目标，禁止为凑字数编造
- 使用 H2 划分主题；普通正文段落每段 3–4 句
- 来源区不计入正文目标字数

每页生成 title、description、keywords、Open Graph 数据和 canonical。后续语言正文完成后再生成对应 hreflang。页面不得使用 Gallipoli 旅游、电影或纯历史意图冒充游戏攻略内容。

## 9.1 内容整合规则

1. 以 `keywords.json` 为页面清单，以 `关键词素材.md` 为事实边界。
2. 删除与当前搜索问题无关的旅游、电影、同名地点及宽泛历史信息。
3. 同一事实由多源验证后合并表述，不重复堆叠。
4. 官方游戏事实与真实历史背景分开说明，禁止把游戏地图写成历史地点的一比一复原。
5. 缺少可靠依据的细节写 `To be confirmed`；确认不存在的兑换码写 `None available`。
6. 不编造数值、地图机制、角色名、兑换码或更新日期。
7. 正文使用独立表述，来源链接集中列在文末，不复制来源大段原文。

## 9.2 MDX 文章结构

```mdx
---
keyword: "gallipoli trenches"
title: "A 40–60 character title containing the keyword"
description: "A 140–160 character description containing the keyword"
updatedAt: "2026-08-24"
status: "verified"
sources: ["G1", "G5", "H1", "H3"]
---

直接回答搜索问题的开场段。

## 核心答案

## 玩法或背景

## 玩家需要注意的内容

## 常见问题

## Sources
```

## 10. 旧品牌清理

全项目必须扫描并阻止以下旧站品牌或内容词残留：

- `VV Ultimatum`
- `VV: ULTIMATUM`
- `Midnight Continent`
- `Roblox`
- `Shinigami`
- `Quincy`
- `Hollow`

首页、页脚、Wiki 侧栏、导航、404、法律页、metadata、测试夹具和图片替代文本都在扫描范围内。扫描脚本检查 `app`、`components`、`content`、`data`、`messages`、`public` 和测试目录；设计规格自身作为迁移要求记录，不纳入残留扫描。

## 11. 异常处理

- 不支持的语言返回本地化 404 或受控重定向到英语首页
- 缺少 MDX 文章时返回本地化 404
- YouTube 嵌入失败时提供外链
- 图片失败时保留带说明的占位区域，避免布局坍塌
- 未核验数据使用“待确认”；确认不存在的兑换码使用“暂无”
- 外部链接使用安全属性并在新标签打开

## 12. 验证标准

- 英语首页和 16 个关键词页面均可访问
- `keywords.json` 的 16 个关键词各有且只有一个页面
- 第一阶段语言切换不得导向尚未生成的空白正文；后续翻译完成后保持当前页面语义
- 首页视频弹窗支持鼠标和键盘操作
- 亮色、暗色、桌面端和移动端均通过视觉检查
- metadata、canonical 与 hreflang 正确
- 不存在旧游戏名或对标站内容残留
- 每个 Title 都包含完整关键词且为 40–60 字符
- 每个 description 都包含完整关键词且为 140–160 字符
- 输出正文词数、H2 空章节、段落句数、重复内容和 `To be confirmed` 报告
- 所有官方链接在实施时检查可访问性
- 通过构建、TypeScript、Lint 和关键组件测试
- 对首页、地图列表页和通用关键词详情模板分别进行渲染和基本交互测试

## 13. 首期不做

- 不建立后台管理系统或数据库
- 不实现用户账户、评论或投稿
- 不复制对标站的图片、Logo、文案或代码
- 不伪造玩家数、评价数、更新日期、兑换码或地图机制
- 第一阶段不生成土耳其语、德语和法语关键词正文；这些语言在英语源审核后单独生成
- 不新增 `keywords.json` 之外的可索引关键词内页；导航中的未实现入口必须禁用或不输出链接

## 14. 完成定义

项目在本地可安装、运行和构建；英语首页与 16 个关键词内页完整；页面视觉结构与对标站一致，Gallipoli 品牌和内容无旧站残留；所有事实可追溯，未知项明确标记；MDX、语言基础设施、主题切换、视频弹窗、SEO 和响应式布局全部通过验证。英语源内容审核通过后，土耳其语、德语和法语版本进入下一阶段。
