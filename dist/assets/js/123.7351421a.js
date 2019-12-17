(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{355:function(v,_,t){"use strict";t.r(_);var a=t(2),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("这个编码规范是给 TypeScript 开发团队在开发 TypeScript 时使用的。\n对于使用 TypeScript 的普通用户来说不一定适用，但是可以做为一个参考。")]),v._v(" "),t("h2",{attrs:{id:"命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[v._v("#")]),v._v(" 命名")]),v._v(" "),t("ol",[t("li",[v._v("使用 PascalCase 为类型命名。")]),v._v(" "),t("li",[v._v("不要使用 "),t("code",[v._v("I")]),v._v("  做为接口名前缀。")]),v._v(" "),t("li",[v._v("使用 PascalCase 为枚举值命名。")]),v._v(" "),t("li",[v._v("使用 camelCase 为函数命名。")]),v._v(" "),t("li",[v._v("使用 camelCase 为属性或本地变量命名。")]),v._v(" "),t("li",[v._v("不要为私有属性名添加 "),t("code",[v._v("_")]),v._v(" 前缀。")]),v._v(" "),t("li",[v._v("尽可能使用完整的单词拼写命名。")])]),v._v(" "),t("h2",{attrs:{id:"组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[v._v("#")]),v._v(" 组件")]),v._v(" "),t("ol",[t("li",[v._v("1 个文件对应一个逻辑组件 （比如：解析器，检查器）。")]),v._v(" "),t("li",[v._v("不要添加新的文件。 😃")]),v._v(" "),t("li",[t("code",[v._v(".generated.*")]),v._v("  后缀的文件是自动生成的，不要手动改它。")])]),v._v(" "),t("h2",{attrs:{id:"类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[v._v("#")]),v._v(" 类型")]),v._v(" "),t("ol",[t("li",[v._v("不要导出类型 / 函数，除非你要在不同的组件中共享它。")]),v._v(" "),t("li",[v._v("不要在全局命名空间内定义类型 / 值。")]),v._v(" "),t("li",[v._v("共享的类型应该在 "),t("code",[v._v("types.ts")]),v._v("  里定义。")]),v._v(" "),t("li",[v._v("在一个文件里，类型定义应该出现在顶部。")])]),v._v(" "),t("h2",{attrs:{id:"null-和-undefined："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#null-和-undefined："}},[v._v("#")]),v._v(" "),t("code",[v._v("null")]),v._v("  和  "),t("code",[v._v("undefined")]),v._v(" ：")]),v._v(" "),t("ol",[t("li",[v._v("使用 "),t("strong",[v._v("undefined")]),v._v("，不要使用 null。")])]),v._v(" "),t("h2",{attrs:{id:"一般假设"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一般假设"}},[v._v("#")]),v._v(" 一般假设")]),v._v(" "),t("ol",[t("li",[v._v("假设像 Nodes，Symbols 等这样的对象在定义它的组件外部是不可改变的。不要去改变它们。")]),v._v(" "),t("li",[v._v("假设数组是不能改变的。")])]),v._v(" "),t("h2",{attrs:{id:"类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[v._v("#")]),v._v(" 类")]),v._v(" "),t("ol",[t("li",[v._v("为了保持一致，在核心编译链中不要使用类，使用函数闭包代替。")])]),v._v(" "),t("h2",{attrs:{id:"标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记"}},[v._v("#")]),v._v(" 标记")]),v._v(" "),t("ol",[t("li",[v._v("一个类型中有超过 2 个布尔属性时，把它变成一个标记。")])]),v._v(" "),t("h2",{attrs:{id:"注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[v._v("#")]),v._v(" 注释")]),v._v(" "),t("p",[v._v("为函数，接口，枚举类型和类使用 JSDoc 风格的注释。")]),v._v(" "),t("h2",{attrs:{id:"字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[v._v("#")]),v._v(" 字符串")]),v._v(" "),t("ol",[t("li",[v._v("使用双引号 "),t("code",[v._v('""')])]),v._v(" "),t("li",[v._v("所有要展示给用户看的信息字符串都要做好本地化工作（在 diagnosticMessages.json 中创建新的实体）。")])]),v._v(" "),t("h2",{attrs:{id:"错误提示信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误提示信息"}},[v._v("#")]),v._v(" 错误提示信息")]),v._v(" "),t("ol",[t("li",[v._v("在句子结尾使用 "),t("code",[v._v(".")]),v._v(" 。")]),v._v(" "),t("li",[v._v("对不确定的实体使用不定冠词。")]),v._v(" "),t("li",[v._v("确切的实体应该使用名字（变量名，类型名等）")]),v._v(" "),t("li",[v._v("当创建一条新的规则时，主题应该使用单数形式（比如：An external module cannot... 而不是 External modules cannot）。")]),v._v(" "),t("li",[v._v("使用现在时态。")])]),v._v(" "),t("h2",{attrs:{id:"错误提示信息代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误提示信息代码"}},[v._v("#")]),v._v(" 错误提示信息代码")]),v._v(" "),t("p",[v._v("提示信息被划分类成了一般的区间。如果要新加一个提示信息，在上条代码上加 1 做为新的代码。")]),v._v(" "),t("ul",[t("li",[v._v("1000 语法信息")]),v._v(" "),t("li",[v._v("2000 语言信息")]),v._v(" "),t("li",[v._v("4000 声明生成信息")]),v._v(" "),t("li",[v._v("5000 编译器选项信息")]),v._v(" "),t("li",[v._v("6000 命令行编译器信息")]),v._v(" "),t("li",[v._v("7000 noImplicitAny 信息")])]),v._v(" "),t("h2",{attrs:{id:"普通方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#普通方法"}},[v._v("#")]),v._v(" 普通方法")]),v._v(" "),t("p",[v._v("由于种种原因，我们避免使用一些方法，而使用我们自己定义的。")]),v._v(" "),t("ol",[t("li",[v._v("不使用 ECMAScript 5 函数；而是使用"),t("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/blob/master/src/compiler/core.ts",target:"_blank",rel:"noopener noreferrer"}},[v._v(" core.ts"),t("OutboundLink")],1),v._v(" 这里的。")]),v._v(" "),t("li",[v._v("不要使用 "),t("code",[v._v("for..in")]),v._v("  语句；而是使用 "),t("code",[v._v("ts.forEach")]),v._v(" ， "),t("code",[v._v("ts.forEachKey")]),v._v("  和 "),t("code",[v._v("ts.forEachValue")]),v._v(" 。注意它们之间的区别。")]),v._v(" "),t("li",[v._v("如果可能的话，尝试使用 "),t("code",[v._v("ts.forEach")]),v._v(" ， "),t("code",[v._v("ts.map")]),v._v("  和 "),t("code",[v._v("ts.filter")]),v._v("  代替循环。")])]),v._v(" "),t("h2",{attrs:{id:"风格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#风格"}},[v._v("#")]),v._v(" 风格")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("使用 arrow 函数代替匿名函数表达式。")])]),v._v(" "),t("li",[t("p",[v._v("只要需要的时候才把 arrow 函数的参数括起来。"),t("br"),v._v("比如， "),t("code",[v._v("(x) => x + x")]),v._v("  是错误的，下面是正确的做法：")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("x => x + x")])])]),v._v(" "),t("li",[t("p",[t("code",[v._v("(x,y) => x + y")])])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<T>(x: T, y: T) => x === y")])])]),v._v(" "),t("li",[t("p",[v._v("总是使用 "),t("code",[v._v("{}")]),v._v("  把循环体和条件语句括起来。")])]),v._v(" "),t("li",[t("p",[v._v("开始的 "),t("code",[v._v("{")]),v._v(" 总是在同一行。")])]),v._v(" "),t("li",[t("p",[v._v("小括号里开始不要有空白. "),t("br"),v._v("逗号，冒号，分号后要有一个空格。比如：")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("for (var i = 0, n = str.length; i < 10; i++) { }")])])]),v._v(" "),t("li",[t("p",[t("code",[v._v("if (x < 10) { }")])])]),v._v(" "),t("li",[t("p",[t("code",[v._v("function f(x: number, y: string): void { }")])])]),v._v(" "),t("li",[t("p",[v._v("每个变量声明语句只声明一个变量 "),t("br"),v._v("（比如 使用  "),t("code",[v._v("var x = 1; var y = 2;")]),v._v("  而不是  "),t("code",[v._v("var x = 1, y = 2;")]),v._v(" ）。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("else")]),v._v("  要在结束的 "),t("code",[v._v("}")]),v._v("  后另起一行。")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);