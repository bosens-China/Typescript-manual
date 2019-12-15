(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{255:function(t,e,n){"use strict";n.r(e);var s=n(2),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"typescript-3-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript-3-0"}},[t._v("#")]),t._v(" TypeScript 3.0")]),t._v(" "),n("h2",{attrs:{id:"保留关键字-unknown"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#保留关键字-unknown"}},[t._v("#")]),t._v(" 保留关键字 "),n("code",[t._v("unknown")])]),t._v(" "),n("p",[n("code",[t._v("unknown")]),t._v(" 现在是一个保留类型名称，因为它现在是一个内置类型。为了支持新引入的 "),n("code",[t._v("unknown")]),t._v(" 类型，取决于你对 "),n("code",[t._v("unknown")]),t._v(" 的使用方式，你可能需要完全移除变量申明，或者将其重命名。")]),t._v(" "),n("h2",{attrs:{id:"未开启-strictnullchecks-时，与-null-undefined-交叉的类型会简化到-null-undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#未开启-strictnullchecks-时，与-null-undefined-交叉的类型会简化到-null-undefined"}},[t._v("#")]),t._v(" 未开启 "),n("code",[t._v("strictNullChecks")]),t._v(" 时，与 "),n("code",[t._v("null")]),t._v("/"),n("code",[t._v("undefined")]),t._v(" 交叉的类型会简化到 "),n("code",[t._v("null")]),t._v("/"),n("code",[t._v("undefined")])]),t._v(" "),n("p",[t._v("关闭 "),n("code",[t._v("strictNullChecks")]),t._v(" 时，下例中 "),n("code",[t._v("A")]),t._v(" 的类型为 "),n("code",[t._v("null")]),t._v("，而 "),n("code",[t._v("B")]),t._v(" 的类型为 "),n("code",[t._v("undefined")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" undefined"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),n("p",[t._v("这是因为 TypeScript 3.0 更适合分别简化交叉类型和联合类型中的子类型和超类型。但是，因为当 "),n("code",[t._v("strictNullChecks")]),t._v(" 关闭时，"),n("code",[t._v("null")]),t._v(" 和 "),n("code",[t._v("undefined")]),t._v(" 都被认为是所有其他类型的子类型，与某种对象类型的交集将始终简化为 "),n("code",[t._v("null")]),t._v(" 或 "),n("code",[t._v("undefined")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"建议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建议"}},[t._v("#")]),t._v(" 建议")]),t._v(" "),n("p",[t._v("如果你在类型交叉的情况下依赖 "),n("code",[t._v("null")]),t._v(" 和 "),n("code",[t._v("undefined")]),t._v(" 作为"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8D%95%E4%BD%8D%E5%85%83",target:"_blank",rel:"noopener noreferrer"}},[t._v("单位元"),n("OutboundLink")],1),t._v("，你应该寻找一种方法来使用 "),n("code",[t._v("unknown")]),t._v(" 而不是无论它们在哪里都是 "),n("code",[t._v("null")]),t._v(" 或 "),n("code",[t._v("undefined")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#typescript-30",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);