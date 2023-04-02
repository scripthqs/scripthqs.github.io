(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{395:function(t,a,s){t.exports=s.p+"assets/img/TCP_IP.651a2ade.png"},396:function(t,a,s){t.exports=s.p+"assets/img/three_way.d645a077.png"},397:function(t,a,s){t.exports=s.p+"assets/img/HTTP.361f334e.png"},398:function(t,a,s){t.exports=s.p+"assets/img/status.0981c365.png"},586:function(t,a,s){"use strict";s.r(a);var e=s(21),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-基础"}},[t._v("#")]),t._v(" HTTP 基础")]),t._v(" "),e("p",[t._v("书籍：《图解 HTTP》")]),t._v(" "),e("blockquote",[e("p",[t._v("问题：当在浏览器地址栏输入 url 时，web 页面是如何呈现的？")])]),t._v(" "),e("p",[t._v("web 页面使用 HTTP 协议作为规范，完成客户端（浏览器）和服务器端之间通信过程。")]),t._v(" "),e("h2",{attrs:{id:"_1-tcp-ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp-ip"}},[t._v("#")]),t._v(" 1.TCP/IP")]),t._v(" "),e("p",[t._v("为了了解 HTTP，有必要先了解下 TCP/IP 协议族。我们使用的网络包括互联网，都是 TCP/IP 协议族的基础上运行的，HTTP 属于 TCP/IP 内部的子集。")]),t._v(" "),e("p",[t._v("计算机和网络设备通信，双方必须基于相同的方法，或者说规则，这种规则称为协议。这种协议的总称叫做 TCP/IP。")]),t._v(" "),e("blockquote",[e("p",[t._v("也有说法 TCP/IP 是 TCP 和 IP 两种协议。")])]),t._v(" "),e("h3",{attrs:{id:"分层管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分层管理"}},[t._v("#")]),t._v(" 分层管理")]),t._v(" "),e("p",[t._v("TCP/IP 协议族采用分层管理：应用层、传输层、网络层、数据链路层。")]),t._v(" "),e("ol",[e("li",[t._v("应用层：给用户提供服务。FTP 文件传输协议， DNS 域名系统，HTTP 协议属于该层。")]),t._v(" "),e("li",[t._v("传输层：提供两台计算机数据传输。有 TCP 和 UDP 两个协议。")]),t._v(" "),e("li",[t._v("网络层：通过哪种路径传输数据。IP 属于网络层。")]),t._v(" "),e("li",[t._v("链路层：处理连接网络的硬件部分。")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(395),alt:"TCP/IP"}})]),t._v(" "),e("p",[t._v("发送端从应用层往下走，接收端从应用层往上走。")]),t._v(" "),e("h3",{attrs:{id:"ip、tcp、dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ip、tcp、dns"}},[t._v("#")]),t._v(" IP、TCP、DNS")]),t._v(" "),e("ol",[e("li",[t._v("IP 负责传输数据。IP 是协议，IP 地址是被分配的地址，IP 地址可变。")]),t._v(" "),e("li",[t._v("TCP 确保可靠性。TCP 协议采用三次握手策略。\n"),e("img",{attrs:{src:s(396),alt:"三次握手"}})]),t._v(" "),e("li",[t._v("DNS 负责域名解析。计算机一般有 IP 地址和域名，IP 地址是长纯数字不便记忆，所以我们一般使用域名。DNS 专门用来转换域名和 IP 地址。")])]),t._v(" "),e("h3",{attrs:{id:"页面加载的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面加载的过程"}},[t._v("#")]),t._v(" 页面加载的过程")]),t._v(" "),e("ol",[e("li",[t._v("浏览器查找域名对应的 IP 地址(DNS 查询：浏览器缓存->系统缓存->路由器缓存->ISP DNS 缓存->根域名服务器)")]),t._v(" "),e("li",[t._v("浏览器向 Web 服务器发送一个 HTTP 请求（TCP 三次握手）")]),t._v(" "),e("li",[t._v("服务器 301 重定向（从 "),e("a",{attrs:{href:"http://example.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://example.com"),e("OutboundLink")],1),t._v(" 重定向到 "),e("a",{attrs:{href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.example.com"),e("OutboundLink")],1),t._v("）")]),t._v(" "),e("li",[t._v("浏览器跟踪重定向地址，请求另一个带 www 的网址")]),t._v(" "),e("li",[t._v("服务器处理请求（通过路由读取资源）")]),t._v(" "),e("li",[t._v("服务器返回一个 HTTP 响应（报头中把 Content-type 设置为 'text/html'）")]),t._v(" "),e("li",[t._v("浏览器对 DOM 树构建")]),t._v(" "),e("li",[t._v("浏览器发送请求获取嵌在 HTML 中的资源（如图片、音频、视频、CSS、JS 等）")]),t._v(" "),e("li",[t._v("浏览器显示完成页面")]),t._v(" "),e("li",[t._v("浏览器发送异步请求")])]),t._v(" "),e("p",[t._v("简而言之，输入网站域名，先获取到 index.html 文件，遇到 link 元素，下载 css 文件，遇到 script 元素下载 js 文件。")]),t._v(" "),e("h2",{attrs:{id:"_2-http-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-请求"}},[t._v("#")]),t._v(" 2.HTTP 请求")]),t._v(" "),e("p",[e("img",{attrs:{src:s(397),alt:"HTTP"}})]),t._v(" "),e("ol",[e("li",[t._v("前端应用从浏览器端向服务器发送 HTTP 请求("),e("strong",[t._v("请求报文")]),t._v(")")]),t._v(" "),e("li",[t._v("后台服务器接收到请求后, 调度服务器应用处理请求, 向浏览器端返回 HTTP 响应("),e("strong",[t._v("响应报文")]),t._v(")")]),t._v(" "),e("li",[t._v("浏览器端接收到响应, 解析显示响应体/调用监视回调")])]),t._v(" "),e("h2",{attrs:{id:"_3-http-请求报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-请求报文"}},[t._v("#")]),t._v(" 3.HTTP 请求报文")]),t._v(" "),e("h3",{attrs:{id:"_1-请求行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求行"}},[t._v("#")]),t._v(" 1.请求行")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("method url\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("product_detail"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("login\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"_2-多个请求头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-多个请求头"}},[t._v("#")]),t._v(" 2.多个请求头")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Host"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" www"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baidu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\nCookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BAIDUID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AD3B0FA706E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BIDUPSID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AD3B0FA706")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("`\nContent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" application"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("www"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("urlencoded 或者application"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"_3-请求体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-请求体"}},[t._v("#")]),t._v(" 3.请求体")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pwd"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tom"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pwd"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"_4-请求报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-请求报文"}},[t._v("#")]),t._v(" 4.请求报文")]),t._v(" "),e("ul",[e("li",[t._v("行：GET/URL/HTTP1.1")]),t._v(" "),e("li",[t._v("头：Host:Cookie:Content-type:User-Agent：")]),t._v(" "),e("li",[t._v("空行:")]),t._v(" "),e("li",[t._v("体:get 请求为空，username=admin&password=admin")])]),t._v(" "),e("h2",{attrs:{id:"_4-http-响应报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-http-响应报文"}},[t._v("#")]),t._v(" 4.HTTP 响应报文")]),t._v(" "),e("h3",{attrs:{id:"_1-响应状态行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-响应状态行"}},[t._v("#")]),t._v(" 1.响应状态行")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("status statusText\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-多个响应头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-多个响应头"}},[t._v("#")]),t._v(" 2.多个响应头")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Content"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("charset"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nSet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BD_CK_SAM")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"_3-响应体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-响应体"}},[t._v("#")]),t._v(" 3.响应体")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("html 文本"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json 文本"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("js"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("css"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("图片"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_4-响应报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-响应报文"}},[t._v("#")]),t._v(" 4.响应报文")]),t._v(" "),e("ul",[e("li",[t._v("行：HTTP/1.1 200（OK） 404（找不到） 403（被禁止）401（未授权）")]),t._v(" "),e("li",[t._v("头：content-type：content-length content-encoding")]),t._v(" "),e("li",[t._v("空行")]),t._v(" "),e("li",[t._v("体:HTML 的内容")])]),t._v(" "),e("h2",{attrs:{id:"_5-post-请求体参数格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-post-请求体参数格式"}},[t._v("#")]),t._v(" 5.post 请求体参数格式")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("Content-Type: application/x-www-form-urlencoded;charset=utf-8")]),t._v("\n用于键值对参数，参数的键值用=连接, 参数之间用&连接\n例如: "),e("code",[t._v("name=%E5%B0%8F%E6%98%8E&age=12")])]),t._v(" "),e("li",[e("code",[t._v("Content-Type: application/json;charset=utf-8")]),t._v("\n用于 json 字符串参数\n例如: "),e("code",[t._v('{"name": "%E5%B0%8F%E6%98%8E", "age": 12}')])]),t._v(" "),e("li",[e("code",[t._v("Content-Type: multipart/form-data")]),t._v("\n用于文件上传请求")])]),t._v(" "),e("h2",{attrs:{id:"_6-常见的响应状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-常见的响应状态码"}},[t._v("#")]),t._v(" 6.常见的响应状态码")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("200 OK")]),t._v(" 请求成功。一般用于 GET 与 POST 请求")]),t._v(" "),e("li",[e("code",[t._v("201 Created")]),t._v(" 已创建。成功请求并创建了新的资源")]),t._v(" "),e("li",[e("code",[t._v("300")]),t._v(" 重定向")]),t._v(" "),e("li",[e("code",[t._v("401 Unauthorized")]),t._v(" 未授权/请求要求用户的身份认证")]),t._v(" "),e("li",[e("code",[t._v("404 Not Found")]),t._v(" 服务器无法根据客户端的请求找到资源")]),t._v(" "),e("li",[e("code",[t._v("500 Internal Server Error")]),t._v(" 服务器内部错误，无法完成请求")]),t._v(" "),e("li",[e("code",[t._v("503")]),t._v(" 服务器没有运行")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(398),alt:"响应状态码"}})]),t._v(" "),e("h2",{attrs:{id:"_7-不同类型的请求及其作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-不同类型的请求及其作用"}},[t._v("#")]),t._v(" 7.不同类型的请求及其作用")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("GET")]),t._v(": 从服务器端"),e("strong",[t._v("读取")]),t._v("数据（查）")]),t._v(" "),e("li",[e("code",[t._v("POST")]),t._v(": 向服务器端"),e("strong",[t._v("添加")]),t._v("新数据 （增）")]),t._v(" "),e("li",[e("code",[t._v("PUT")]),t._v(": "),e("strong",[t._v("更新")]),t._v("服务器端已经数据 （改）")]),t._v(" "),e("li",[e("code",[t._v("DELETE")]),t._v(": "),e("strong",[t._v("删除")]),t._v("服务器端数据 （删）")])]),t._v(" "),e("h2",{attrs:{id:"_8-api-的分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-api-的分类"}},[t._v("#")]),t._v(" 8.API 的分类")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("REST API: restful （Representational State Transfer (资源)表现层状态转化）")]),t._v(" "),e("ul",[e("li",[t._v("发送请求进行 CRUD 哪个操作由请求方式来决定")]),t._v(" "),e("li",[t._v("同一个请求路径可以进行多个操作")]),t._v(" "),e("li",[t._v("请求方式会用到 GET/POST/PUT/DELETE")])])]),t._v(" "),e("li",[e("p",[t._v("非 REST API: restless")]),t._v(" "),e("ul",[e("li",[t._v("请求方式不决定请求的 CRUD 操作")]),t._v(" "),e("li",[t._v("一个请求路径只对应一个操作")]),t._v(" "),e("li",[t._v("一般只有 GET/POST")])])])]),t._v(" "),e("h2",{attrs:{id:"_9-区别一般-http-请求-与-ajax-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-区别一般-http-请求-与-ajax-请求"}},[t._v("#")]),t._v(" 9.区别一般 http 请求 与 ajax 请求")]),t._v(" "),e("ol",[e("li",[t._v("ajax 请求是一种特别的 http 请求")]),t._v(" "),e("li",[t._v("对服务器端来说, 没有任何区别, 区别在"),e("strong",[t._v("浏览器端")])]),t._v(" "),e("li",[t._v("浏览器端发请求: 只有"),e("code",[t._v("XHR")]),t._v(" 或"),e("code",[t._v("fetch")]),t._v(" 发出的才是 ajax 请求, 其它所有的都是非 ajax 请求")]),t._v(" "),e("li",[t._v("浏览器端接收到响应\n"),e("ul",[e("li",[t._v("一般请求: 浏览器一般会直接显示响应体数据, 也就是我们常说的刷新/跳转页面")]),t._v(" "),e("li",[t._v("ajax 请求: 浏览器不会对界面进行任何更新操作, 只是"),e("strong",[t._v("调用监视的回调函数")]),t._v("并"),e("strong",[t._v("传入响应相关数据")])])])])]),t._v(" "),e("h2",{attrs:{id:"_10-http-协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-http-协议"}},[t._v("#")]),t._v(" 10.HTTP 协议")]),t._v(" "),e("p",[t._v("URL 的组成：")]),t._v(" "),e("ul",[e("li",[t._v("协议://主机:端口/路径?查询")]),t._v(" "),e("li",[t._v("scheme://host:port/path?query#fragment")])]),t._v(" "),e("p",[t._v("HTTP 协议，超文本传输协议，详细规定了浏览器和万维网服务器之间相互通信的规则。协议就是约定，规定。")])])}),[],!1,null,null,null);a.default=r.exports}}]);