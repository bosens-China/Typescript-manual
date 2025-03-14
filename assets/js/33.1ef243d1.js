(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{710:function(t,e,s){"use strict";s.r(e);var a=s(13),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"typescript-1-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript-1-5"}},[t._v("#")]),t._v(" TypeScript 1.5")]),t._v(" "),e("p",[t._v("完整的破坏性改动列表请到这里查看:"),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+milestone%3A%22TypeScript+1.5%22+label%3A%22breaking+change%22",target:"_blank",rel:"noopener noreferrer"}},[t._v("breaking change issues"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"不允许在箭头函数里引用arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不允许在箭头函数里引用arguments"}},[t._v("#")]),t._v(" 不允许在箭头函数里引用 "),e("code",[t._v("arguments")])]),t._v(" "),e("p",[t._v("这是为了遵循 ES6 箭头函数的语义。之前箭头函数里的 "),e("code",[t._v("arguments")]),t._v("  会绑定到箭头函数的参数。参照"),e("a",{attrs:{href:"http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts",target:"_blank",rel:"noopener noreferrer"}},[t._v(" ES6 规范草稿"),e("OutboundLink")],1),t._v(" 9.2.12，箭头函数不存在 "),e("code",[t._v("arguments")]),t._v("  对象。 从 TypeScript 1.5 开始，在箭头函数里使用 "),e("code",[t._v("arguments")]),t._v("  会被标记成错误以确保你的代码转成 ES6 时没语义上的错误。")]),t._v(" "),e("p",[e("strong",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" arguments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error: The 'arguments' object cannot be referenced in an arrow function.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("推荐：")])]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 使用带名字的剩余参数")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 使用函数表达式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    arguments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"内联枚举引用的改动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内联枚举引用的改动"}},[t._v("#")]),t._v(" 内联枚举引用的改动")]),t._v(" "),e("p",[t._v("对于正常的枚举，在 1.5 之前，编译器"),e("em",[t._v("仅会")]),t._v("内联常量成员，且成员仅在使用字面量初始化时才被当做是常量。这在判断检举值是使用字面量初始化还是表达式时会行为不一致。从 TypeScript 1.5 开始，所有非 const 枚举成员都不会被内联。")]),t._v(" "),e("p",[e("strong",[t._v("例子：")])]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// previously inlined as "var x = 1; /*E.a*/"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("推荐：")]),t._v(" 在枚举声明里添加 "),e("code",[t._v("const")]),t._v("  修饰符来确保它总是被内联。 更多信息，查看"),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/2183",target:"_blank",rel:"noopener noreferrer"}},[t._v(" #2183"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"上下文的类型将作用于super和括号表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上下文的类型将作用于super和括号表达式"}},[t._v("#")]),t._v(" 上下文的类型将作用于 "),e("code",[t._v("super")]),t._v("  和括号表达式")]),t._v(" "),e("p",[t._v("在 1.5 之前，上下文的类型不会作用于括号表达式内部。这就要求做显示的类型转换，尤其是在"),e("em",[t._v("必须")]),t._v("使用括号来进行表达式转换的场合。")]),t._v(" "),e("p",[t._v("在下面的例子里， "),e("code",[t._v("m")]),t._v("  具有上下文的类型，它在之前的版本里是没有的。")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("SomeType")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" m "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SomeType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" m "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CBase"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("更多信息，查看"),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/1425",target:"_blank",rel:"noopener noreferrer"}},[t._v(" #1425"),e("OutboundLink")],1),t._v(" 和"),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/920",target:"_blank",rel:"noopener noreferrer"}},[t._v(" #920"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"dom-接口的改动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom-接口的改动"}},[t._v("#")]),t._v(" DOM 接口的改动")]),t._v(" "),e("p",[t._v("TypeScript 1.5 改进了 "),e("code",[t._v("lib.d.ts")]),t._v("  库里的 DOM 类型。这是自 TypeScript 1.0 以来第一次大的改动；为了拥抱标准 DOM 规范，很多特定于 IE 的定义被移除了，同时添加了新的类型如 Web Audio 和触摸事件。")]),t._v(" "),e("p",[e("strong",[t._v("变通方案：")])]),t._v(" "),e("p",[t._v("你可以使用旧的 "),e("code",[t._v("lib.d.ts")]),t._v("  配合新版本的编译器。你需要在你的工程里引入之前版本的一个拷贝。这里是"),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/blob/v1.5.0-alpha/bin/lib.d.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("本次改动之前的 lib.d.ts 文件 (TypeScript 1.5-alpha)"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("变动列表：")])]),t._v(" "),e("ul",[e("li",[t._v("属性 "),e("code",[t._v("selection")]),t._v("  从 "),e("code",[t._v("Document")]),t._v("  类型上移除")]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("clipboardData")]),t._v("  从 "),e("code",[t._v("Window")]),t._v("  类型上移除")]),t._v(" "),e("li",[t._v("删除接口 "),e("code",[t._v("MSEventAttachmentTarget")])]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("onresize")]),t._v(" ， "),e("code",[t._v("disabled")]),t._v(" ， "),e("code",[t._v("uniqueID")]),t._v(" ， "),e("code",[t._v("removeNode")]),t._v(" ， "),e("code",[t._v("fireEvent")]),t._v(" ， "),e("code",[t._v("currentStyle")]),t._v(" ， "),e("code",[t._v("runtimeStyle")]),t._v("  从 "),e("code",[t._v("HTMLElement")]),t._v("  类型上移除")]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("url")]),t._v("  从 "),e("code",[t._v("Event")]),t._v("  类型上移除")]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("execScript")]),t._v(" ， "),e("code",[t._v("navigate")]),t._v(" ， "),e("code",[t._v("item")]),t._v("  从 "),e("code",[t._v("Window")]),t._v("  类型上移除")]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("documentMode")]),t._v(" ， "),e("code",[t._v("parentWindow")]),t._v(" ， "),e("code",[t._v("createEventObject")]),t._v("  从 "),e("code",[t._v("Document")]),t._v("  类型上移除")]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("parentWindow")]),t._v("  从 "),e("code",[t._v("HTMLDocument")]),t._v("  类型上移除")]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("setCapture")]),t._v("  被完全移除")]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("releaseCapture")]),t._v("  被完全移除")]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("setAttribute")]),t._v(" ， "),e("code",[t._v("styleFloat")]),t._v(" ， "),e("code",[t._v("pixelLeft")]),t._v("  从 "),e("code",[t._v("CSSStyleDeclaration")]),t._v("  类型上移除")]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("selectorText")]),t._v("  从 "),e("code",[t._v("CSSRule")]),t._v("  类型上移除")]),t._v(" "),e("li",[e("code",[t._v("CSSStyleSheet.rules")]),t._v("  现在是 "),e("code",[t._v("CSSRuleList")]),t._v("  类型，而非 "),e("code",[t._v("MSCSSRuleList")])]),t._v(" "),e("li",[e("code",[t._v("documentElement")]),t._v("  现在是 "),e("code",[t._v("Element")]),t._v("  类型，而非 "),e("code",[t._v("HTMLElement")])]),t._v(" "),e("li",[e("code",[t._v("Event")]),t._v("  具有一个新的必需属性 "),e("code",[t._v("returnValue")])]),t._v(" "),e("li",[e("code",[t._v("Node")]),t._v("  具有一个新的必需属性 "),e("code",[t._v("baseURI")])]),t._v(" "),e("li",[e("code",[t._v("Element")]),t._v("  具有一个新的必需属性 "),e("code",[t._v("classList")])]),t._v(" "),e("li",[e("code",[t._v("Location")]),t._v("  具有一个新的必需属性 "),e("code",[t._v("origin")])]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("MSPOINTER_TYPE_MOUSE")]),t._v(" ， "),e("code",[t._v("MSPOINTER_TYPE_TOUCH")]),t._v("  从 "),e("code",[t._v("MSPointerEvent")]),t._v("  类型上移除")]),t._v(" "),e("li",[e("code",[t._v("CSSStyleRule")]),t._v("  具有一个新的必需属性 "),e("code",[t._v("readonly")])]),t._v(" "),e("li",[t._v("属性 "),e("code",[t._v("execUnsafeLocalFunction")]),t._v("  从 "),e("code",[t._v("MSApp")]),t._v("  类型上移除")]),t._v(" "),e("li",[t._v("全局方法 "),e("code",[t._v("toStaticHTML")]),t._v("  被移除")]),t._v(" "),e("li",[e("code",[t._v("HTMLCanvasElement.getContext")]),t._v("  现在返回 "),e("code",[t._v("CanvasRenderingContext2D | WebGLRenderingContex")])]),t._v(" "),e("li",[t._v("移除扩展类型 "),e("code",[t._v("Dataview")]),t._v(" ， "),e("code",[t._v("Weakmap")]),t._v(" ， "),e("code",[t._v("Map")]),t._v(" ， "),e("code",[t._v("Set")])]),t._v(" "),e("li",[e("code",[t._v("XMLHttpRequest.send")]),t._v("  具有两个重载 "),e("code",[t._v("send(data?: Document): void;")]),t._v("  和 "),e("code",[t._v("send(data?: String): void;")])]),t._v(" "),e("li",[e("code",[t._v("window.orientation")]),t._v("  现在是 "),e("code",[t._v("string")]),t._v("  类型，而非 "),e("code",[t._v("number")])]),t._v(" "),e("li",[t._v("特定于 IE 的 "),e("code",[t._v("attachEvent")]),t._v("  和 "),e("code",[t._v("detachEvent")]),t._v("  从 "),e("code",[t._v("Window")]),t._v("  上移除")])]),t._v(" "),e("p",[e("strong",[t._v("以下是被新加的 DOM 类型所部分或全部取代的代码库的代表：")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("DefinitelyTyped/auth0/auth0.d.ts")])]),t._v(" "),e("li",[e("code",[t._v("DefinitelyTyped/gamepad/gamepad.d.ts")])]),t._v(" "),e("li",[e("code",[t._v("DefinitelyTyped/interactjs/interact.d.ts")])]),t._v(" "),e("li",[e("code",[t._v("DefinitelyTyped/webaudioapi/waa.d.ts")])]),t._v(" "),e("li",[e("code",[t._v("DefinitelyTyped/webcrypto/WebCrypto.d.ts")])])]),t._v(" "),e("p",[t._v("更多信息，查看"),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/pull/2739",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整改动"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"类代码体将以严格格式解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类代码体将以严格格式解析"}},[t._v("#")]),t._v(" 类代码体将以严格格式解析")]),t._v(" "),e("p",[t._v("按照"),e("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code",target:"_blank",rel:"noopener noreferrer"}},[t._v(" ES6 规范"),e("OutboundLink")],1),t._v("，类代码体现在以严格模式进行解析。行为将相当于在类作用域顶端定义了 "),e("code",[t._v('"use strict"')]),t._v(" ；它包括限制了把 "),e("code",[t._v("arguments")]),t._v("  和 "),e("code",[t._v("eval")]),t._v("  做为变量名或参数名的使用，把未来保留字做为变量或参数使用，八进制数字字面量的使用等。")])])}),[],!1,null,null,null);e.default=n.exports}}]);