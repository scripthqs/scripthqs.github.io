(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{333:function(e,t,n){"use strict";var r=n(1),a=n(177).trim;r({target:"String",proto:!0,forced:n(334)("trim")},{trim:function(){return a(this)}})},334:function(e,t,n){var r=n(3),a=n(178);e.exports=function(e){return r((function(){return!!a[e]()||"​᠎"!="​᠎"[e]()||a[e].name!==e}))}},484:function(e,t,n){"use strict";n.r(t);n(333),n(51),n(77);var r={data:function(){return{message:"hello",content:'\n        <h-input value="张三"></h-input>\n        <h-input value="李四" :disabled="true"></h-input>\n        <h-input value="王五" readonly></h-input>\n        <h-input value="王" error="姓名不能少于两个字"></h-input>\n      '.replace(/\t+| +/g,"").trim(),content1:'\n        data(){message: \'hello\'}\n        <p>\n            <h-input value="王" v-model="message"></h-input>{{message}}\n        </p>\n                '.replace(/\s{2,}/,"").trim()}}},a=n(50),u=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h-input",{attrs:{value:"张三"}}),e._v(" "),n("h-input",{attrs:{value:"李四",disabled:!0}}),e._v(" "),n("h-input",{attrs:{value:"王五",readonly:""}}),e._v(" "),n("h-input",{attrs:{value:"王",error:"姓名不能少于两个字"}}),e._v(" "),n("h4",[e._v("代码")]),e._v(" "),n("pre",[n("code",[e._v(e._s(e.content))])]),e._v(" "),n("br"),e._v(" "),n("h3",[e._v("双向绑定")]),e._v(" "),n("hr"),e._v(" "),n("h4",[e._v("预览")]),e._v(" "),n("h-input",{attrs:{value:"王"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),n("p",[e._v("message: "+e._s(e.message))]),e._v(" "),n("h4",[e._v("代码")]),e._v(" "),n("pre",[n("code",[e._v(e._s(e.content1))])])],1)}),[],!1,null,null,null);t.default=u.exports}}]);