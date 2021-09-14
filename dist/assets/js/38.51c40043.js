(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{522:function(t,s,a){"use strict";a.r(s);var n=a(50),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"常用-composition-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用-composition-api"}},[t._v("#")]),t._v(" 常用 Composition API")]),t._v(" "),a("p",[t._v("官方文档: https://v3.cn.vuejs.org/guide/composition-api-introduction.html")]),t._v(" "),a("h2",{attrs:{id:"_1-setup函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-setup函数"}},[t._v("#")]),t._v(" 1 setup函数")]),t._v(" "),a("p",[t._v("1 理解：Vue3.0中一个新的配置项，值为一个函数。")]),t._v(" "),a("p",[t._v("2 setup是所有"),a("strong",[t._v("Composition API（组合API）")]),t._v(" “"),a("em",[t._v("表演的舞台")]),t._v(" ”")]),t._v(" "),a("p",[t._v("3 组件中所用到的："),a("strong",[t._v("数据、方法")]),t._v("等等，均要"),a("strong",[t._v("配置在setup")]),t._v("中。")]),t._v(" "),a("p",[t._v("4 setup函数的两种返回值")]),t._v(" "),a("ol",[a("li",[t._v("若"),a("strong",[t._v("返回一个对象")]),t._v("，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）")]),t._v(" "),a("li",[a("em",[t._v("若返回一个渲染函数：则可以自定义渲染内容。（"),a("strong",[t._v("了解")]),t._v("）")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回一个函数（渲染函数）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return ()=> h('h1','hello world')")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("注意:")]),t._v(" "),a("p",[t._v("尽量"),a("strong",[t._v("不要与Vue2.x配置混用")])]),t._v(" "),a("ul",[a("li",[t._v("Vue2.x配置（data、methos、computed...）中"),a("strong",{staticStyle:{color:"#DD5145"}},[t._v("可以访问到")]),t._v("setup中的属性、方法。")]),t._v(" "),a("li",[t._v("但在setup中"),a("strong",{staticStyle:{color:"#DD5145"}},[t._v("不能访问到")]),t._v("Vue2.x配置（data、methos、computed...）。")]),t._v(" "),a("li",[t._v("如果有重名, "),a("strong",[t._v("setup优先")]),t._v("。")])]),t._v(" "),a("p",[t._v("setup"),a("strong",[t._v("不能是一个async函数")]),t._v("，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）")]),t._v(" "),a("h2",{attrs:{id:"_2-ref函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ref函数"}},[t._v("#")]),t._v(" 2 ref函数")]),t._v(" "),a("p",[t._v("作用: 定义一个响应式的数据")]),t._v(" "),a("p",[t._v("需要先引入")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("语法:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xxx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ul",[a("li",[t._v("创建一个包含响应式数据的"),a("strong",[t._v("引用对象（reference对象，简称ref对象）")])]),t._v(" "),a("li",[t._v("JS中操作（改）数据： "),a("code",[t._v("xxx.value")])]),t._v(" "),a("li",[t._v("模板中读取数据: 不需要.value，直接："),a("code",[t._v("<div>"+t._s(t.xxx)+"</div>")])])]),t._v(" "),a("p",[t._v("备注：")]),t._v(" "),a("ul",[a("li",[t._v("接收的数据可以是：基本类型、也可以是对象类型。")]),t._v(" "),a("li",[t._v("基本类型的数据：响应式依然是靠"),a("code",[t._v("Object.defineProperty()")]),t._v("的"),a("code",[t._v("get")]),t._v("与"),a("code",[t._v("set")]),t._v("完成的。")]),t._v(" "),a("li",[t._v("对象类型的数据：内部 *“ 求助 ”*了Vue3.0中的一个新函数—— "),a("code",[t._v("reactive")]),t._v("函数。")])]),t._v(" "),a("h2",{attrs:{id:"_3-reactive函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-reactive函数"}},[t._v("#")]),t._v(" 3 reactive函数")]),t._v(" "),a("p",[t._v("作用: 定义一个"),a("strong",[t._v("对象类型")]),t._v("的响应式数据（基本类型不要用它，要用"),a("code",[t._v("ref")]),t._v("函数）")]),t._v(" "),a("p",[t._v("需要先引入")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("reactive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("语法：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" 代理对象"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("源对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" per "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Proxy{}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("接收一个对象（或数组），返回一个"),a("strong",[t._v("代理对象（Proxy的实例对象，简称proxy对象）")])]),t._v(" "),a("p",[t._v("reactive定义的响应式数据是“"),a("strong",[t._v("深层次的")]),t._v("”")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("hobby"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'抽烟'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'喝酒'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'烫头'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hobby"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'学习'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[t._v("直接通过"),a("strong",[t._v("修改索引改数组，也是响应式")]),t._v("，vue2.0通过索引修改数组不是响应式")])]),t._v(" "),a("p",[t._v("内部"),a("strong",[t._v("基于 ES6 的 Proxy 实现")]),t._v("，通过代理对象操作源对象内部数据进行操作。")]),t._v(" "),a("h2",{attrs:{id:"_4-vue3-0的响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue3-0的响应式原理"}},[t._v("#")]),t._v(" 4 Vue3.0的响应式原理")]),t._v(" "),a("h3",{attrs:{id:"_4-1-vue2-x的响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-vue2-x的响应式"}},[t._v("#")]),t._v(" 4.1 vue2.x的响应式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("实现原理：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对象类型：通过"),a("code",[t._v("Object.defineProperty()")]),t._v("对属性的读取、修改进行拦截（数据劫持）。")])]),t._v(" "),a("li",[a("p",[t._v("数组类型：通过"),a("strong",[t._v("重写更新数组的一系列方法")]),t._v("来实现拦截。（对数组的变更方法进行了包裹）。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'count'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])])]),t._v(" "),a("li",[a("p",[t._v("存在问题：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("新增属性、删除属性")]),t._v(", 界面不会更新。")]),t._v(" "),a("li",[t._v("直接通过"),a("strong",[t._v("下标修改数组")]),t._v(", 界面不会自动更新。")]),t._v(" "),a("li",[t._v("通过Vue.set()方法或者this.$set()方法修改，解决问题")]),t._v(" "),a("li",[t._v("通过Vue.delete()或者this.$delete()方法删除，解决问题")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-2-vue3-0的响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-vue3-0的响应式"}},[t._v("#")]),t._v(" 4.2 Vue3.0的响应式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("实现原理:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过Proxy（代理）:  "),a("strong",[t._v("拦截对象中任意属性的变化")]),t._v(", 包括：属性值的读写、属性的添加、属性的删除等。")])]),t._v(" "),a("li",[a("p",[t._v("通过Reflect（反射）:  对源对象的属性进行操作。")])]),t._v(" "),a("li",[a("p",[t._v("MDN文档中描述的Proxy与Reflect：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Proxy：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy")])]),t._v(" "),a("li",[a("p",[t._v("Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拦截读取属性值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拦截设置属性值或添加新属性")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拦截删除属性")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteProperty")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nproxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),t._v("   \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])])])])])])])]),t._v(" "),a("h2",{attrs:{id:"_5-reactive对比ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-reactive对比ref"}},[t._v("#")]),t._v(" 5 reactive对比ref")]),t._v(" "),a("p",[t._v("从定义数据角度对比：")]),t._v(" "),a("ul",[a("li",[t._v("ref用来定义："),a("strong",[t._v("基本类型数据")]),t._v("。")]),t._v(" "),a("li",[t._v("reactive用来定义："),a("strong",[t._v("对象（或数组）类型数据")]),t._v("。")]),t._v(" "),a("li",[t._v("备注：ref也可以用来"),a("strong",[t._v("定义对象（或数组）类型数据")]),t._v(", 它内部会自动通过"),a("code",[t._v("reactive")]),t._v("转为"),a("strong",[t._v("代理对象")]),t._v("。")])]),t._v(" "),a("p",[t._v("从原理角度对比：")]),t._v(" "),a("ul",[a("li",[t._v("ref通过"),a("code",[t._v("Object.defineProperty()")]),t._v("的"),a("code",[t._v("get")]),t._v("与"),a("code",[t._v("set")]),t._v("来实现响应式（数据劫持）。")]),t._v(" "),a("li",[t._v("reactive通过使用"),a("strong",[t._v("Proxy")]),t._v("来实现响应式（数据劫持）, 并通过"),a("strong",[t._v("Reflect")]),t._v("操作"),a("strong",[t._v("源对象")]),t._v("内部的数据。")])]),t._v(" "),a("p",[t._v("从使用角度对比：")]),t._v(" "),a("ul",[a("li",[t._v("ref定义的数据：操作数据"),a("strong",[t._v("需要")]),a("code",[t._v(".value")]),t._v("，读取数据时模板中直接读取"),a("strong",[t._v("不需要")]),a("code",[t._v(".value")]),t._v("。")]),t._v(" "),a("li",[t._v("reactive定义的数据：操作数据与读取数据："),a("strong",[t._v("均不需要")]),a("code",[t._v(".value")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"_6-setup的两个注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-setup的两个注意点"}},[t._v("#")]),t._v(" 6 setup的两个注意点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("setup执行的时机")]),t._v(" "),a("ul",[a("li",[t._v("在beforeCreate之前执行一次，this是undefined。")])])]),t._v(" "),a("li",[a("p",[t._v("setup的参数")]),t._v(" "),a("ul",[a("li",[t._v("props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。")]),t._v(" "),a("li",[t._v("context：上下文对象\n"),a("ul",[a("li",[t._v("attrs: 值为对象，包含：组件外部传递过来，但"),a("strong",[t._v("没有在props配置中声明的属性")]),t._v(", 相当于 "),a("code",[t._v("this.$attrs")]),t._v("。")]),t._v(" "),a("li",[t._v("slots: 收到的插槽内容, 相当于 "),a("code",[t._v("this.$slots")]),t._v("。")]),t._v(" "),a("li",[t._v("emit: 分发自定义事件的函数, 相当于 "),a("code",[t._v("this.$emit")]),t._v("。")])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);