(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{765:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"深入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入"}},[t._v("#")]),t._v(" 深入")]),t._v(" "),a("p",[t._v("组织模块以提供你想要的 API 结构是比较难的。\n比如，你可能想要这样一个模块，可以用或不用 "),a("code",[t._v("new")]),t._v("  来创建不同的类型，在不同层级上暴露出不同的命名类型，且模块对象上还带有一些属性。")]),t._v(" "),a("p",[t._v("阅读这篇指南后，你就会了解如何编写复杂的声明文件来提供友好的 API 。\n这篇指南针对于模块（或 UMD）代码库，因为它们的选择具有更高的可变性。")]),t._v(" "),a("h2",{attrs:{id:"核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),a("p",[t._v("如果你理解了一些关于 TypeScript 是如何工作的核心概念， 那么你就能够为任何结构书写声明文件。")]),t._v(" "),a("h3",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),a("p",[t._v("如果你正在阅读这篇指南，你可能已经大概了解 TypeScript 里的类型指是什么。 明确一下，"),a("em",[t._v("类型")]),t._v("通过以下方式引入：")]),t._v(" "),a("ul",[a("li",[t._v("类型别名声明（ "),a("code",[t._v("type sn = number | string;")]),t._v(" ）")]),t._v(" "),a("li",[t._v("接口声明（ "),a("code",[t._v("interface I { x: number[]; }")]),t._v(" ）")]),t._v(" "),a("li",[t._v("类声明（ "),a("code",[t._v("class C { }")]),t._v(" ）")]),t._v(" "),a("li",[t._v("枚举声明（ "),a("code",[t._v("enum E { A, B, C }")]),t._v(" ）")]),t._v(" "),a("li",[t._v("指向某个类型的 "),a("code",[t._v("import")]),t._v("  声明")])]),t._v(" "),a("p",[t._v("以上每种声明形式都会创建一个新的类型名称。")]),t._v(" "),a("h3",{attrs:{id:"值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#值"}},[t._v("#")]),t._v(" 值")]),t._v(" "),a("p",[t._v("与类型相比，你可能已经理解了什么是值。\n值是运行时的名字，它可以在表达式里引用。\n比如 "),a("code",[t._v("let x = 5;")]),t._v("  创建了一个名为 "),a("code",[t._v("x")]),t._v("  的值。")]),t._v(" "),a("p",[t._v("同样地，以下方式能够创建值：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("let")]),t._v(" ， "),a("code",[t._v("const")]),t._v(" ，和 "),a("code",[t._v("var")]),t._v("  声明")]),t._v(" "),a("li",[t._v("包含值的 "),a("code",[t._v("namespace")]),t._v("  或 "),a("code",[t._v("module")]),t._v("  声明")]),t._v(" "),a("li",[a("code",[t._v("enum")]),t._v("  声明")]),t._v(" "),a("li",[a("code",[t._v("class")]),t._v("  声明")]),t._v(" "),a("li",[t._v("指向值的 "),a("code",[t._v("import")]),t._v("  声明")]),t._v(" "),a("li",[a("code",[t._v("function")]),t._v("  声明")])]),t._v(" "),a("h3",{attrs:{id:"命名空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名空间"}},[t._v("#")]),t._v(" 命名空间")]),t._v(" "),a("p",[t._v("类型可以存在于"),a("em",[t._v("命名空间")]),t._v("里。 比如，有这样的声明 "),a("code",[t._v("let x: A.B.C")]),t._v(" ， 我们就认为 "),a("code",[t._v("C")]),t._v("  类型来自于 "),a("code",[t._v("A.B")]),t._v("  命名空间。")]),t._v(" "),a("p",[t._v("这个区别虽细微但很重要 -- 这里， "),a("code",[t._v("A.B")]),t._v("  不是必需的类型或值。")]),t._v(" "),a("h2",{attrs:{id:"简单的组合-一个名字-多种意义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的组合-一个名字-多种意义"}},[t._v("#")]),t._v(" 简单的组合：一个名字，多种意义")]),t._v(" "),a("p",[t._v("一个给定的名字 "),a("code",[t._v("A")]),t._v(" ，我们可以找出三种不同的意义：一个类型，一个值或一个命名空间。 要如何去解析这个名字要看它所在的上下文是怎样的。\n比如，在声明 "),a("code",[t._v("let m: A.A = A;")]),t._v("  中， "),a("code",[t._v("A")]),t._v("  首先被当做命名空间，然后做为类型名，最后是值。\n这些意义最终可能会指向完全不同的声明！")]),t._v(" "),a("p",[t._v("这看上去让人迷惑，但是只要我们不过度的重载这还是很方便的。\n下面让我们来看看一些有用的组合行为。")]),t._v(" "),a("h3",{attrs:{id:"内置组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置组合"}},[t._v("#")]),t._v(" 内置组合")]),t._v(" "),a("p",[t._v("眼尖的读者可能会注意到，比如， "),a("code",[t._v("class")]),t._v("  同时出现在"),a("em",[t._v("类型")]),t._v("和"),a("em",[t._v("值")]),t._v("列表里。\n "),a("code",[t._v("class C { }")]),t._v("  声明创建了两个东西： "),a("em",[t._v("类型")]),t._v(" "),a("code",[t._v("C")]),t._v("  指向类的实例结构， "),a("em",[t._v("值")]),t._v(" "),a("code",[t._v("C")]),t._v("  指向类构造函数。\n枚举声明拥有相似的行为。")]),t._v(" "),a("h3",{attrs:{id:"用户定义组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户定义组合"}},[t._v("#")]),t._v(" 用户定义组合")]),t._v(" "),a("p",[t._v("假设我们写了模块文件 "),a("code",[t._v("foo.d.ts")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" SomeVar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SomeType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样使用它：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SomeType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SomeVar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这可以很好地工作，但是我们知道 "),a("code",[t._v("SomeType")]),t._v("  和 "),a("code",[t._v("SomeVar")]),t._v("  密切相关 因此我们想让它们有相同的名字。\n我们可以使用组合通过相同的名字 "),a("code",[t._v("Bar")]),t._v("  表示这两种不同的对象（值和对象）：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这提供了使用解构的机会：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("再次地，这里我们使用 "),a("code",[t._v("Bar")]),t._v("  做为类型和值。\n注意我们没有声明 "),a("code",[t._v("Bar")]),t._v("  值为 "),a("code",[t._v("Bar")]),t._v("  类型 -- 它们是独立的。")]),t._v(" "),a("h2",{attrs:{id:"高级组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级组合"}},[t._v("#")]),t._v(" 高级组合")]),t._v(" "),a("p",[t._v("有一些声明能够通过多个声明组合。\n比如， "),a("code",[t._v("class C { }")]),t._v("  和 "),a("code",[t._v("interface C { }")]),t._v("  可以同时存在并且都可以做为 "),a("code",[t._v("C")]),t._v("  类型的属性。")]),t._v(" "),a("p",[t._v("只要不产生冲突就是合法的。\n一个普通的规则是值总是会和同名的其它值产生冲突，除非它们在不同命名空间里，类型冲突则发生在使用类型别名声明的情况下（ "),a("code",[t._v("type s = string")]),t._v(" ），命名空间永远不会发生冲突。")]),t._v(" "),a("p",[t._v("让我们看看如何使用。")]),t._v(" "),a("h3",{attrs:{id:"通过interface添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过interface添加"}},[t._v("#")]),t._v(" 通过 "),a("code",[t._v("interface")]),t._v("  添加")]),t._v(" "),a("p",[t._v("我们可以使用一个 "),a("code",[t._v("interface")]),t._v("  向另一个 "),a("code",[t._v("interface")]),t._v("  声明里添加额外成员：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... elsewhere ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OK")]),t._v("\n")])])]),a("p",[t._v("这同样作用于类：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... elsewhere ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OK")]),t._v("\n")])])]),a("p",[t._v("注意我们不能使用接口往类型别名里添加成员（ "),a("code",[t._v("type s = string;")]),t._v(" ）")]),t._v(" "),a("h3",{attrs:{id:"通过namespace添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过namespace添加"}},[t._v("#")]),t._v(" 通过 "),a("code",[t._v("namespace")]),t._v("  添加")]),t._v(" "),a("p",[a("code",[t._v("namespace")]),t._v("  声明可以用来添加新类型，值和命名空间，只要不出现冲突即可。")]),t._v(" "),a("p",[t._v("比如，我们可以添加静态成员到一个类：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... elsewhere ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OK")]),t._v("\n")])])]),a("p",[t._v("注意在这个例子里，我们添加一个值到 "),a("code",[t._v("C")]),t._v("  的"),a("em",[t._v("静态")]),t._v("部分（它的构造函数）。\n这里因为我们添加了一个"),a("em",[t._v("值")]),t._v("，且其它值的容器是另一个值（类型包含于命名空间，命名空间包含于另外的命名空间）。")]),t._v(" "),a("p",[t._v("我们还可以给类添加一个命名空间类型：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... elsewhere ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OK")]),t._v("\n")])])]),a("p",[t._v("在这个例子里，直到我们写了 "),a("code",[t._v("namespace")]),t._v("  声明才有了命名空间 "),a("code",[t._v("C")]),t._v(" 。\n做为命名空间的 "),a("code",[t._v("C")]),t._v("  不会与类创建的值 "),a("code",[t._v("C")]),t._v("  或类型 "),a("code",[t._v("C")]),t._v("  相互冲突。")]),t._v(" "),a("p",[t._v("最后，我们可以进行不同的合并通过 "),a("code",[t._v("namespace")]),t._v("  声明。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Y")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... elsewhere ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Y")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在这个例子里，第一个代码块创建了以下名字与含义：")]),t._v(" "),a("ul",[a("li",[t._v("一个值 "),a("code",[t._v("X")]),t._v(" （因为 "),a("code",[t._v("namespace")]),t._v("  声明包含一个值， "),a("code",[t._v("Z")]),t._v(" ）")]),t._v(" "),a("li",[t._v("一个命名空间 "),a("code",[t._v("X")]),t._v(" （因为 "),a("code",[t._v("namespace")]),t._v("  声明包含一个类型， "),a("code",[t._v("Y")]),t._v(" ）")]),t._v(" "),a("li",[t._v("在命名空间 "),a("code",[t._v("X")]),t._v("  里的类型 "),a("code",[t._v("Y")])]),t._v(" "),a("li",[t._v("在命名空间 "),a("code",[t._v("X")]),t._v("  里的类型 "),a("code",[t._v("Z")]),t._v(" （类的实例结构）")]),t._v(" "),a("li",[t._v("值 "),a("code",[t._v("X")]),t._v("  的一个属性值 "),a("code",[t._v("Z")]),t._v(" （类的构造函数）")])]),t._v(" "),a("p",[t._v("第二个代码块创建了以下名字与含义：")]),t._v(" "),a("ul",[a("li",[t._v("值 "),a("code",[t._v("Y")]),t._v(" （ "),a("code",[t._v("number")]),t._v("  类型），它是值 "),a("code",[t._v("X")]),t._v("  的一个属性")]),t._v(" "),a("li",[t._v("一个命名空间 "),a("code",[t._v("Z")])]),t._v(" "),a("li",[t._v("值 "),a("code",[t._v("Z")]),t._v(" ，它是值 "),a("code",[t._v("X")]),t._v("  的一个属性")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("X.Z")]),t._v("  命名空间下的类型 "),a("code",[t._v("C")])]),t._v(" "),a("li",[t._v("值 "),a("code",[t._v("X.Z")]),t._v("  的一个属性值 "),a("code",[t._v("C")])]),t._v(" "),a("li",[t._v("类型 "),a("code",[t._v("X")])])]),t._v(" "),a("h2",{attrs:{id:"使用export-或import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用export-或import"}},[t._v("#")]),t._v(" 使用 "),a("code",[t._v("export =")]),t._v("  或 "),a("code",[t._v("import")])]),t._v(" "),a("p",[t._v("一个重要的原则是 "),a("code",[t._v("export")]),t._v("  和 "),a("code",[t._v("import")]),t._v("  声明会导出或导入目标的"),a("em",[t._v("所有含义")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);