(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{247:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript-1-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-1-6"}},[t._v("#")]),t._v(" TypeScript 1.6")]),t._v(" "),a("p",[t._v("完整的破坏性改动列表请到这里查看:"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+milestone%3A%22TypeScript+1.6%22+label%3A%22breaking+change%22",target:"_blank",rel:"noopener noreferrer"}},[t._v("breaking change issues"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"严格的对象字面量赋值检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格的对象字面量赋值检查"}},[t._v("#")]),t._v(" 严格的对象字面量赋值检查")]),t._v(" "),a("p",[t._v("当在给变量赋值或给非空类型的参数赋值时，如果对象字面量里指定的某属性不存在于目标类型中时会得到一个错误。")]),t._v(" "),a("p",[t._v("你可以通过使用"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/pull/4484",target:"_blank",rel:"noopener noreferrer"}},[t._v(" --suppressExcessPropertyErrors"),a("OutboundLink")],1),t._v(" 编译器选项来禁用这个新的严格检查。")]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error, excess property `baz`")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error, excess or misspelled property `baz`")]),t._v("\n")])])]),a("p",[a("strong",[t._v("推荐：")])]),t._v(" "),a("p",[t._v("为了避免此错误，不同情况下有不同的补救方法：")]),t._v(" "),a("p",[a("strong",[t._v("如果目标类型接收额外的属性，可以增加一个索引：")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OK, `baz` matched by index signature")]),t._v("\n")])])]),a("p",[a("strong",[t._v("如果原始类型是一组相关联的类型，使用联合类型明确指定它们的类型而不是仅指定一个基本类型。")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" animalList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Turkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use union type instead of Animal")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Milo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pepper"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"koko"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gobble"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("还有可以明确地转换到目标类型以避免此错误：")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FooBar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FooBar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"commonjs的模块解析不再假设路径为相对的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs的模块解析不再假设路径为相对的"}},[t._v("#")]),t._v(" CommonJS 的模块解析不再假设路径为相对的")]),t._v(" "),a("p",[t._v("之前，对于 "),a("code",[t._v("one.ts")]),t._v("  和 "),a("code",[t._v("two.ts")]),t._v("  文件，如果它们在相同目录里，那么在 "),a("code",[t._v("two.ts")]),t._v("  里面导入 "),a("code",[t._v('"one"')]),t._v("  时是相对于 "),a("code",[t._v("one.ts")]),t._v("  的路径的。")]),t._v(" "),a("p",[t._v("TypeScript 1.6 在编译 CommonJS 时， "),a("code",[t._v('"one"')]),t._v(' 不再等同于"./one"。取而代之的是会相对于合适的 '),a("code",[t._v("node_modules")]),t._v("  文件夹进行查找，与 Node.js 在运行时解析模块相似。更多详情，阅读"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/2338",target:"_blank",rel:"noopener noreferrer"}},[t._v(" the issue that describes the resolution algorithm"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("p",[a("code",[t._v("./one.ts")])]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("./two.ts")])]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" g "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("推荐：")])]),t._v(" "),a("p",[a("strong",[t._v("修改所有计划之外的非相对的导入。")])]),t._v(" "),a("p",[a("code",[t._v("./one.ts")])]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("./two.ts")])]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" g "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./one"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("将 "),a("code",[t._v("--moduleResolution")]),t._v("  编译器选项设置为 "),a("code",[t._v("classic")]),t._v(" 。")])]),t._v(" "),a("h4",{attrs:{id:"函数和类声明为默认导出时不再能够与在意义上有交叉的同名实体进行合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数和类声明为默认导出时不再能够与在意义上有交叉的同名实体进行合并"}},[t._v("#")]),t._v(" 函数和类声明为默认导出时不再能够与在意义上有交叉的同名实体进行合并")]),t._v(" "),a("p",[t._v("在同一空间内默认导出声明的名字与空间内一实体名相同时会得到一个错误；比如，")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("和")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("两者都会报错。")]),t._v(" "),a("p",[t._v("然而，在下面的例子里合并是被允许的，因为命名空间并不具备做为值的意义：")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("推荐：")])]),t._v(" "),a("p",[t._v("为默认导出声明本地变量并使用单独的 "),a("code",[t._v("export default")]),t._v("  语句：")]),t._v(" "),a("div",{staticClass:"language-TypeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("更多详情，请阅读"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/3095",target:"_blank",rel:"noopener noreferrer"}},[t._v(" the originating issue"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"模块体以严格模式解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块体以严格模式解析"}},[t._v("#")]),t._v(" 模块体以严格模式解析")]),t._v(" "),a("p",[t._v("按照"),a("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code",target:"_blank",rel:"noopener noreferrer"}},[t._v(" ES6 规范"),a("OutboundLink")],1),t._v("，模块体现在以严格模式进行解析。行为将相当于在模块作用域顶端定义了 "),a("code",[t._v('"use strict"')]),t._v(" ；它包括限制了把 "),a("code",[t._v("arguments")]),t._v("  和 "),a("code",[t._v("eval")]),t._v("  做为变量名或参数名的使用，把未来保留字做为变量或参数使用，八进制数字字面量的使用等。")]),t._v(" "),a("h4",{attrs:{id:"标准库里dom-api的改动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准库里dom-api的改动"}},[t._v("#")]),t._v(" 标准库里 DOM API 的改动")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("MessageEvent")]),t._v(" 和"),a("strong",[t._v(" ProgressEvent")]),t._v(" 构造函数希望传入参数；查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/4295",target:"_blank",rel:"noopener noreferrer"}},[t._v(" issue #4295"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("ImageData")]),t._v(" 构造函数希望传入参数；查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/4220",target:"_blank",rel:"noopener noreferrer"}},[t._v(" issue #4220"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("File")]),t._v(" 构造函数希望传入参数；查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/3999",target:"_blank",rel:"noopener noreferrer"}},[t._v(" issue #3999"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h4",{attrs:{id:"系统模块输出使用批量导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统模块输出使用批量导出"}},[t._v("#")]),t._v(" 系统模块输出使用批量导出")]),t._v(" "),a("p",[t._v("编译器以系统模块的格式使用新的 "),a("code",[t._v("_export")]),t._v("  函数"),a("a",{attrs:{href:"https://github.com/ModuleLoader/es6-module-loader/issues/386",target:"_blank",rel:"noopener noreferrer"}},[t._v("批量导出"),a("OutboundLink")],1),t._v("的变体，它接收任何包含键值对的对象做为参数而不是 key, value。")]),t._v(" "),a("p",[t._v("模块加载器需要升级到"),a("a",{attrs:{href:"https://github.com/ModuleLoader/es6-module-loader/releases/tag/v0.17.1",target:"_blank",rel:"noopener noreferrer"}},[t._v(" v0.17.1"),a("OutboundLink")],1),t._v(" 或更高。")]),t._v(" "),a("h4",{attrs:{id:"npm包的-js内容从-bin-移到了-lib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm包的-js内容从-bin-移到了-lib"}},[t._v("#")]),t._v(" npm 包的.js 内容从 'bin' 移到了 'lib'")]),t._v(" "),a("p",[t._v("TypeScript 的 npm 包入口位置从 "),a("code",[t._v("bin")]),t._v("  移动到了 "),a("code",[t._v("lib")]),t._v(" ，以防‘node_modules/typescript/bin/typescript.js’通过 IIS 访问的时候造成阻塞（ "),a("code",[t._v("bin")]),t._v("  默认是隐藏段因此 IIS 会阻止访问这个文件夹）。")]),t._v(" "),a("h4",{attrs:{id:"typescript的npm包不会默认全局安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript的npm包不会默认全局安装"}},[t._v("#")]),t._v(" TypeScript 的 npm 包不会默认全局安装")]),t._v(" "),a("p",[t._v("TypeScript 1.6 从 package.json 里移除了 "),a("code",[t._v("preferGlobal")]),t._v("  标记。如果你依赖于这种行为，请使用 "),a("code",[t._v("npm install -g typescript")]),t._v(" 。")]),t._v(" "),a("h4",{attrs:{id:"装饰器做为调用表达式进行检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰器做为调用表达式进行检查"}},[t._v("#")]),t._v(" 装饰器做为调用表达式进行检查")]),t._v(" "),a("p",[t._v("从 1.6 开始，装饰器类型检查更准确了；编译器会将装饰器表达式做为以被装饰的实体做为参数的调用表达式来进行检查。这可能会造成以前的代码报错。")])])}),[],!1,null,null,null);s.default=e.exports}}]);