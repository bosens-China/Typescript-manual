(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{296:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("现在我们已经按照指南里的步骤写好一个声明文件，是时候把它发布到npm了。\n有两种主要方式用来发布声明文件到npm：")]),t._v(" "),s("ol",[s("li",[t._v("与你的npm包捆绑在一起，或")]),t._v(" "),s("li",[t._v("发布到npm上的"),s("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types organization"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("p",[t._v("如果你能控制要使用你发布的声明文件的那个npm包的话，推荐第一种方式。\n这样的话，你的声明文件与JavaScript总是在一起传递。")]),t._v(" "),s("h1",{attrs:{id:"包含声明文件到你的npm包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包含声明文件到你的npm包"}},[t._v("#")]),t._v(" 包含声明文件到你的npm包")]),t._v(" "),s("p",[t._v("如果你的包有一个主"),s("code",[t._v(".js")]),t._v("文件，你还是需要在"),s("code",[t._v("package.json")]),t._v("里指定主声明文件。\n设置"),s("code",[t._v("types")]),t._v("属性指向捆绑在一起的声明文件。\n比如：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"awesome"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vandelay Industries"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.d.ts"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("注意"),s("code",[t._v('"typings"')]),t._v("与"),s("code",[t._v('"types"')]),t._v("具有相同的意义，也可以使用它。")]),t._v(" "),s("p",[t._v("同样要注意的是如果主声明文件名是"),s("code",[t._v("index.d.ts")]),t._v("并且位置在包的根目录里（与"),s("code",[t._v("index.js")]),t._v("并列），你就不需要使用"),s("code",[t._v('"types"')]),t._v("属性指定了。")]),t._v(" "),s("h2",{attrs:{id:"依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),s("p",[t._v("所有的依赖是由npm管理的。\n确保所依赖的声明包都在"),s("code",[t._v("package.json")]),t._v("的"),s("code",[t._v('"dependencies"')]),t._v("里指明了\n比如，假设我们写了一个包它依赖于Browserify和TypeScript。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browserify-typescript-extension"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vandelay Industries"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.d.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browserify"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@types/browserify"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typescript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"next"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这里，我们的包依赖于"),s("code",[t._v("browserify")]),t._v("和"),s("code",[t._v("typescript")]),t._v("包。\n"),s("code",[t._v("browserify")]),t._v("没有把它的声明文件捆绑在它的npm包里，所以我们需要依赖于"),s("code",[t._v("@types/browserify")]),t._v("得到它的声明文件。\n"),s("code",[t._v("typescript")]),t._v("相反，它把声明文件放在了npm包里，因此我们不需要依赖额外的包。")]),t._v(" "),s("p",[t._v("我们的包要从这两个包里暴露出声明文件，因此"),s("code",[t._v("browserify-typescript-extension")]),t._v("的用户也需要这些依赖。\n正因此，我们使用"),s("code",[t._v('"dependencies"')]),t._v("而不是"),s("code",[t._v('"devDependencies"')]),t._v("，否则用户将需要手动安装那些包。\n如果我们只是在写一个命令行应用，并且我们的包不会被当做一个库使用的话，那么我就可以使用"),s("code",[t._v("devDependencies")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"危险信号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#危险信号"}},[t._v("#")]),t._v(" 危险信号")]),t._v(" "),s("h3",{attrs:{id:"reference-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-path"}},[t._v("#")]),t._v(" "),s("code",[t._v('/// <reference path="..." />')])]),t._v(" "),s("p",[s("em",[t._v("不要")]),t._v("在声明文件里使用"),s("code",[t._v('/// <reference path="..." />')]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference path="../typescript/lib/typescriptServices.d.ts" />')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[s("em",[t._v("应该")]),t._v("使用"),s("code",[t._v('/// <reference types="..." />')]),t._v("代替")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="typescript" />')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("务必阅读[使用依赖](./Library Structures.md#consuming-dependencies)一节了解详情。")]),t._v(" "),s("h3",{attrs:{id:"打包所依赖的声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包所依赖的声明"}},[t._v("#")]),t._v(" 打包所依赖的声明")]),t._v(" "),s("p",[t._v("如果你的类型声明依赖于另一个包：")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("不要")]),t._v("把依赖的包放进你的包里，保持它们在各自的文件里。")]),t._v(" "),s("li",[s("em",[t._v("不要")]),t._v("将声明拷贝到你的包里。")]),t._v(" "),s("li",[s("em",[t._v("应该")]),t._v("依赖于npm类型声明包，如果依赖包没包含它自己的声明的话。")])]),t._v(" "),s("h2",{attrs:{id:"公布你的声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公布你的声明文件"}},[t._v("#")]),t._v(" 公布你的声明文件")]),t._v(" "),s("p",[t._v("在发布声明文件包之后，确保在"),s("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/types-2.0/notNeededPackages.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinitelyTyped外部包列表"),s("OutboundLink")],1),t._v("里面添加一条引用。\n这可以让查找工具知道你的包提供了自己的声明文件。")]),t._v(" "),s("h1",{attrs:{id:"发布到-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布到-types"}},[t._v("#")]),t._v(" 发布到"),s("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types"),s("OutboundLink")],1),t._v("下面的包是从"),s("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinitelyTyped"),s("OutboundLink")],1),t._v("里自动发布的，通过"),s("a",{attrs:{href:"https://github.com/Microsoft/types-publisher",target:"_blank",rel:"noopener noreferrer"}},[t._v("types-publisher工具"),s("OutboundLink")],1),t._v("。\n如果想让你的包发布为@types包，提交一个pull request到"),s("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/DefinitelyTyped/DefinitelyTyped"),s("OutboundLink")],1),t._v("。\n在这里查看详细信息"),s("a",{attrs:{href:"http://definitelytyped.org/guides/contributing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("contribution guidelines page"),s("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);e.default=a.exports}}]);