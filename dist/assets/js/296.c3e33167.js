(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{768:function(v,_,t){"use strict";t.r(_);var s=t(21),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"作用域与作用域链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域与作用域链"}},[v._v("#")]),v._v(" 作用域与作用域链")]),v._v(" "),t("h2",{attrs:{id:"作用域定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域定义"}},[v._v("#")]),v._v(" 作用域定义")]),v._v(" "),t("p",[v._v("作用域指一个变量作用的范围，在 JS 中有两种作用域：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("全局作用域")])]),v._v(" "),t("li",[t("strong",[v._v("函数作用域")])])]),v._v(" "),t("p",[t("strong",[v._v("作用域")]),v._v("是一个代码段所在的区域，是"),t("strong",[v._v("静态的")]),v._v("（相对于执行上下文），在编写"),t("strong",[v._v("编码时就确定")]),v._v("了。")]),v._v(" "),t("p",[v._v("分类：")]),v._v(" "),t("ul",[t("li",[v._v("全局作用域")]),v._v(" "),t("li",[v._v("函数作用域")]),v._v(" "),t("li",[v._v("没有块作用域（ES6）之前")])]),v._v(" "),t("p",[v._v("作用：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("隔离变量，不同的作用域下同名变量不会有冲突")])])]),v._v(" "),t("p",[v._v("总结：n+1 个作用域，n 代表定义函数的个数，1 代表 window")]),v._v(" "),t("h2",{attrs:{id:"作用域和执行上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域和执行上下文"}},[v._v("#")]),v._v(" 作用域和执行上下文")]),v._v(" "),t("p",[v._v("区别 1：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("作用域在函数定义时就确定的")]),v._v("（静态的），不是函数调用时")]),v._v(" "),t("li",[v._v("全局执行上下文是全局作用域确定后创建的")]),v._v(" "),t("li",[v._v("函数执行上下文是调用函数时，函数执行前创建的")])]),v._v(" "),t("p",[v._v("区别 2：")]),v._v(" "),t("ul",[t("li",[v._v("作用域是"),t("strong",[v._v("静态")]),v._v("的，只要"),t("strong",[v._v("函数定义")]),v._v("好了就一直存在，且"),t("strong",[v._v("不会变化")])]),v._v(" "),t("li",[v._v("执行上下文是"),t("strong",[v._v("动态")]),v._v("的，"),t("strong",[v._v("调用函数")]),v._v("时创建，函数调用结束时，"),t("strong",[v._v("自动释放")])])]),v._v(" "),t("p",[v._v("联系：")]),v._v(" "),t("ul",[t("li",[v._v("执行上下文从属于所在的作用域链")]),v._v(" "),t("li",[v._v("全局执行上下文==》全局作用域")]),v._v(" "),t("li",[v._v("函数执行上下文==》对应函数作用域")])]),v._v(" "),t("h2",{attrs:{id:"作用域链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[v._v("#")]),v._v(" 作用域链")]),v._v(" "),t("p",[v._v("什么是作用域链")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("多个上下级关系的作用域形成的链, 它的方向是从下向上的(从内到外)")])]),v._v(" "),t("li",[t("p",[v._v("查找变量时就是沿着作用域链来查找的")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("查找对象的属性和方法从原型链找")])])])]),v._v(" "),t("p",[t("strong",[v._v("查找一个变量的查找规则")]),v._v(":")]),v._v(" "),t("ol",[t("li",[v._v("在当前作用域下的执行上下文中查找对应的属性, 如果有直接返回, 否则进入 2")]),v._v(" "),t("li",[v._v("在上一级作用域的执行上下文中查找对应的属性, 如果有直接返回, 否则进入 3")]),v._v(" "),t("li",[v._v("再次执行 2 的相同操作, 直到全局作用域, 如果还找不到就抛出找不到的异常")])])])}),[],!1,null,null,null);_.default=r.exports}}]);