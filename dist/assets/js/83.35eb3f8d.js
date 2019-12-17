(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{313:function(s,t,e){"use strict";e.r(t);var a=e(2),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("如果一个目录下存在一个 "),e("code",[s._v("tsconfig.json")]),s._v("  文件，那么它意味着这个目录是 TypeScript 项目的根目录。\n "),e("code",[s._v("tsconfig.json")]),s._v("  文件中指定了用来编译这个项目的根文件和编译选项。\n一个项目可以通过以下方式之一来编译：")]),s._v(" "),e("h2",{attrs:{id:"使用tsconfig-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用tsconfig-json"}},[s._v("#")]),s._v(" 使用 tsconfig.json")]),s._v(" "),e("ul",[e("li",[s._v("不带任何输入文件的情况下调用 "),e("code",[s._v("tsc")]),s._v(" ，编译器会从当前目录开始去查找 "),e("code",[s._v("tsconfig.json")]),s._v("  文件，逐级向上搜索父目录。")]),s._v(" "),e("li",[s._v("不带任何输入文件的情况下调用 "),e("code",[s._v("tsc")]),s._v(" ，且使用命令行参数 "),e("code",[s._v("--project")]),s._v(" （或 "),e("code",[s._v("-p")]),s._v(" ）指定一个包含 "),e("code",[s._v("tsconfig.json")]),s._v("  文件的目录。")])]),s._v(" "),e("p",[s._v("当命令行上指定了输入文件时， "),e("code",[s._v("tsconfig.json")]),s._v("  文件会被忽略。")]),s._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),e("p",[e("code",[s._v("tsconfig.json")]),s._v("  示例文件:")]),s._v(" "),e("ul",[e("li",[s._v("使用 "),e("code",[s._v('"files"')]),s._v("  属性")])]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noImplicitAny"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"removeComments"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"preserveConstEnums"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sourceMap"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sys.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"types.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scanner.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parser.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utilities.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"binder.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"checker.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"emitter.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"program.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commandLineParser.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"diagnosticInformationMap.generated.ts"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("ul",[e("li",[e("p",[s._v("使用 "),e("code",[s._v('"include"')]),s._v("  和 "),e("code",[s._v('"exclude"')]),s._v("  属性")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"system"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noImplicitAny"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"removeComments"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"preserveConstEnums"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outFile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../../built/local/tsc.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sourceMap"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exclude"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.spec.ts"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#细节"}},[s._v("#")]),s._v(" 细节")]),s._v(" "),e("p",[e("code",[s._v('"compilerOptions"')]),s._v("  可以被忽略，这时编译器会使用默认值。在这里查看完整的"),e("router-link",{attrs:{to:"/backups/TypeScript-master/doc/handbook/Compiler Options.html"}},[s._v("编译器选项")]),s._v("列表。")],1),s._v(" "),e("p",[e("code",[s._v('"files"')]),s._v("  指定一个包含相对或绝对文件路径的列表。\n "),e("code",[s._v('"include"')]),s._v("  和 "),e("code",[s._v('"exclude"')]),s._v("  属性指定一个文件 glob 匹配模式列表。\n支持的 glob 通配符有：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("*")]),s._v("  匹配 0 或多个字符（不包括目录分隔符）")]),s._v(" "),e("li",[e("code",[s._v("?")]),s._v("  匹配一个任意字符（不包括目录分隔符）")]),s._v(" "),e("li",[e("code",[s._v("**/")]),s._v("  递归匹配任意子目录")])]),s._v(" "),e("p",[s._v("如果一个 glob 模式里的某部分只包含 "),e("code",[s._v("*")]),s._v("  或 "),e("code",[s._v(".*")]),s._v(" ，那么仅有支持的文件扩展名类型被包含在内（比如默认 "),e("code",[s._v(".ts")]),s._v(" ， "),e("code",[s._v(".tsx")]),s._v(" ，和 "),e("code",[s._v(".d.ts")]),s._v(" ， 如果 "),e("code",[s._v("allowJs")]),s._v("  设置能 "),e("code",[s._v("true")]),s._v("  还包含 "),e("code",[s._v(".js")]),s._v("  和 "),e("code",[s._v(".jsx")]),s._v(" ）。")]),s._v(" "),e("p",[s._v("如果 "),e("code",[s._v('"files"')]),s._v("  和 "),e("code",[s._v('"include"')]),s._v("  都没有被指定，编译器默认包含当前目录和子目录下所有的 TypeScript 文件（ "),e("code",[s._v(".ts")]),s._v(" ,  "),e("code",[s._v(".d.ts")]),s._v("  和  "),e("code",[s._v(".tsx")]),s._v(" ），排除在 "),e("code",[s._v('"exclude"')]),s._v("  里指定的文件。JS 文件（ "),e("code",[s._v(".js")]),s._v("  和 "),e("code",[s._v(".jsx")]),s._v(" ）也被包含进来如果 "),e("code",[s._v("allowJs")]),s._v("  被设置成 "),e("code",[s._v("true")]),s._v(" 。\n如果指定了 "),e("code",[s._v('"files"')]),s._v("  或 "),e("code",[s._v('"include"')]),s._v(" ，编译器会将它们结合一并包含进来。\n使用 "),e("code",[s._v('"outDir"')]),s._v("  指定的目录下的文件永远会被编译器排除，除非你明确地使用 "),e("code",[s._v('"files"')]),s._v("  将其包含进来（这时就算用 "),e("code",[s._v("exclude")]),s._v("  指定也没用）。")]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v('"include"')]),s._v("  引入的文件可以使用 "),e("code",[s._v('"exclude"')]),s._v("  属性过滤。\n然而，通过 "),e("code",[s._v('"files"')]),s._v("  属性明确指定的文件却总是会被包含在内，不管 "),e("code",[s._v('"exclude"')]),s._v("  如何设置。\n如果没有特殊指定， "),e("code",[s._v('"exclude"')]),s._v("  默认情况下会排除 "),e("code",[s._v("node_modules")]),s._v(" ， "),e("code",[s._v("bower_components")]),s._v(" ， "),e("code",[s._v("jspm_packages")]),s._v("  和 "),e("code",[s._v("<outDir>")]),s._v("  目录。")]),s._v(" "),e("p",[s._v("任何被 "),e("code",[s._v('"files"')]),s._v("  或 "),e("code",[s._v('"include"')]),s._v("  指定的文件所引用的文件也会被包含进来。\n "),e("code",[s._v("A.ts")]),s._v("  引用了 "),e("code",[s._v("B.ts")]),s._v(" ，因此 "),e("code",[s._v("B.ts")]),s._v("  不能被排除，除非引用它的 "),e("code",[s._v("A.ts")]),s._v("  在 "),e("code",[s._v('"exclude"')]),s._v("  列表中。")]),s._v(" "),e("p",[s._v("需要注意编译器不会去引入那些可能做为输出的文件；比如，假设我们包含了 "),e("code",[s._v("index.ts")]),s._v(" ，那么 "),e("code",[s._v("index.d.ts")]),s._v("  和 "),e("code",[s._v("index.js")]),s._v("  会被排除在外。\n通常来讲，不推荐只有扩展名的不同来区分同目录下的文件。")]),s._v(" "),e("p",[e("code",[s._v("tsconfig.json")]),s._v("  文件可以是个空文件，那么所有默认的文件（如上面所述）都会以默认配置选项编译。")]),s._v(" "),e("p",[s._v("在命令行上指定的编译选项会覆盖在 "),e("code",[s._v("tsconfig.json")]),s._v("  文件里的相应选项。")]),s._v(" "),e("h2",{attrs:{id:"types，typeroots和types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#types，typeroots和types"}},[s._v("#")]),s._v(" "),e("code",[s._v("@types")]),s._v(" ， "),e("code",[s._v("typeRoots")]),s._v("  和 "),e("code",[s._v("types")])]),s._v(" "),e("p",[s._v("默认所有"),e("em",[s._v("可见的")]),s._v(' " '),e("code",[s._v("@types")]),s._v(' " 包会在编译过程中被包含进来。\n '),e("code",[s._v("node_modules/@types")]),s._v("  文件夹下以及它们子文件夹下的所有包都是"),e("em",[s._v("可见的")]),s._v("；\n也就是说， "),e("code",[s._v("./node_modules/@types/")]),s._v(" ， "),e("code",[s._v("../node_modules/@types/")]),s._v("  和 "),e("code",[s._v("../../node_modules/@types/")]),s._v("  等等。")]),s._v(" "),e("p",[s._v("如果指定了 "),e("code",[s._v("typeRoots")]),s._v(" ，"),e("em",[s._v("只有")]),s._v(" "),e("code",[s._v("typeRoots")]),s._v("  下面的包才会被包含进来。\n比如：")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typeRoots"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./typings"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("这个配置文件会包含"),e("em",[s._v("所有")]),s._v(" "),e("code",[s._v("./typings")]),s._v("  下面的包，而不包含 "),e("code",[s._v("./node_modules/@types")]),s._v("  里面的包。")]),s._v(" "),e("p",[s._v("如果指定了 "),e("code",[s._v("types")]),s._v(" ，只有被列出来的包才会被包含进来。\n比如：")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lodash"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"express"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("这个 "),e("code",[s._v("tsconfig.json")]),s._v("  文件将"),e("em",[s._v("仅会")]),s._v("包含   "),e("code",[s._v("./node_modules/@types/node")]),s._v(" ， "),e("code",[s._v("./node_modules/@types/lodash")]),s._v("  和 "),e("code",[s._v("./node_modules/@types/express")]),s._v(" 。/@types/。\n "),e("code",[s._v("node_modules/@types/*")]),s._v("  里面的其它包不会被引入进来。")]),s._v(" "),e("p",[s._v("指定 "),e("code",[s._v('"types": []')]),s._v("  来禁用自动引入 "),e("code",[s._v("@types")]),s._v("  包。")]),s._v(" "),e("p",[s._v("注意，自动引入只在你使用了全局的声明（相反于模块）时是重要的。\n如果你使用 "),e("code",[s._v('import "foo"')]),s._v("  语句，TypeScript 仍然会查找 "),e("code",[s._v("node_modules")]),s._v("  和 "),e("code",[s._v("node_modules/@types")]),s._v("  文件夹来获取 "),e("code",[s._v("foo")]),s._v("  包。")]),s._v(" "),e("h2",{attrs:{id:"使用extends继承配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用extends继承配置"}},[s._v("#")]),s._v(" 使用 "),e("code",[s._v("extends")]),s._v("  继承配置")]),s._v(" "),e("p",[e("code",[s._v("tsconfig.json")]),s._v("  文件可以利用 "),e("code",[s._v("extends")]),s._v("  属性从另一个配置文件里继承配置。")]),s._v(" "),e("p",[e("code",[s._v("extends")]),s._v("  是 "),e("code",[s._v("tsconfig.json")]),s._v("  文件里的顶级属性（与 "),e("code",[s._v("compilerOptions")]),s._v(" ， "),e("code",[s._v("files")]),s._v(" ， "),e("code",[s._v("include")]),s._v(" ，和 "),e("code",[s._v("exclude")]),s._v("  一样）。\n "),e("code",[s._v("extends")]),s._v("  的值是一个字符串，包含指向另一个要继承文件的路径。")]),s._v(" "),e("p",[s._v("在原文件里的配置先被加载，然后被来至继承文件里的配置重写。\n如果发现循环引用，则会报错。")]),s._v(" "),e("p",[s._v("来至所继承配置文件的 "),e("code",[s._v("files")]),s._v(" ， "),e("code",[s._v("include")]),s._v("  和 "),e("code",[s._v("exclude")]),s._v(" "),e("em",[s._v(" 覆盖")]),s._v("源配置文件的属性。")]),s._v(" "),e("p",[s._v("配置文件里的相对路径在解析时相对于它所在的文件。")]),s._v(" "),e("p",[s._v("比如：")]),s._v(" "),e("p",[e("code",[s._v("configs/base.json")]),s._v(" ：")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noImplicitAny"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"strictNullChecks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[e("code",[s._v("tsconfig.json")]),s._v(" ：")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extends"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./configs/base"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"supplemental.ts"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[e("code",[s._v("tsconfig.nostrictnull.json")]),s._v(" ：")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extends"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./tsconfig"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"strictNullChecks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("h2",{attrs:{id:"compileonsave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compileonsave"}},[s._v("#")]),s._v(" "),e("code",[s._v("compileOnSave")])]),s._v(" "),e("p",[s._v("在最顶层设置 "),e("code",[s._v("compileOnSave")]),s._v("  标记，可以让 IDE 在保存文件的时候根据 "),e("code",[s._v("tsconfig.json")]),s._v("  重新生成文件。")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compileOnSave"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noImplicitAny"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("要想支持这个特性需要 Visual Studio 2015， TypeScript1.8.4 以上并且安装"),e("a",{attrs:{href:"https://github.com/TypeStrong/atom-typescript#compile-on-save",target:"_blank",rel:"noopener noreferrer"}},[s._v(" atom-typescript"),e("OutboundLink")],1),s._v(" 插件。")]),s._v(" "),e("h2",{attrs:{id:"模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[s._v("#")]),s._v(" 模式")]),s._v(" "),e("p",[s._v("到这里查看模式: "),e("a",{attrs:{href:"http://json.schemastore.org/tsconfig",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://json.schemastore.org/tsconfig"),e("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);