(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{650:function(t,s,a){"use strict";a.r(s);var e=a(21),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"github-的疑难杂症"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-的疑难杂症"}},[t._v("#")]),t._v(" github 的疑难杂症")]),t._v(" "),a("h2",{attrs:{id:"git-修改远程仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-修改远程仓库地址"}},[t._v("#")]),t._v(" git 修改远程仓库地址")]),t._v(" "),a("h3",{attrs:{id:"方法-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-1"}},[t._v("#")]),t._v(" 方法 1")]),t._v(" "),a("p",[t._v("删除再添加你的远程仓库")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" origin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin 你的新远程仓库地址\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"方法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-2"}},[t._v("#")]),t._v(" 方法 2")]),t._v(" "),a("p",[t._v("直接修改你本地的.git 文件")]),t._v(" "),a("p",[t._v("这里需要注意的问题是需要进入你的项目目录中\n例如：你的项目名为 test，那么你就进入 test 文件夹。")]),t._v(" "),a("p",[a("code",[t._v(".git")]),t._v(" 文件是隐藏文件你需要显示隐藏文件才能看见")]),t._v(" "),a("h2",{attrs:{id:"git-报错处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-报错处理"}},[t._v("#")]),t._v(" git 报错处理")]),t._v(" "),a("p",[t._v("git push 时报了这个错：fatal: unable to access '"),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/"),a("OutboundLink")],1),t._v(".......': OpenSSL SSL_read: Connection was reset, errno 10054")]),t._v(" "),a("p",[t._v("一般是这是因为服务器的 SSL 证书没有经过第三方机构的签署，所以才报错")]),t._v(" "),a("p",[t._v("参考网上解决办法：解除 ssl 验证后，再次 git 即可")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('git config --global http.sslVerify "false"')])]),t._v(" "),a("li",[a("code",[t._v("git push")])])]),t._v(" "),a("h2",{attrs:{id:"github-登录不了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-登录不了"}},[t._v("#")]),t._v(" github 登录不了")]),t._v(" "),a("ol",[a("li",[t._v("在"),a("code",[t._v("C:\\Windows\\System32\\drivers\\etc")]),t._v("找到 hosts 文件")]),t._v(" "),a("li",[t._v("访问"),a("code",[t._v("http://tool.chinaz.com/dns?type=1&host=github.com&ip=")])]),t._v(" "),a("li",[t._v("找到下面响应的 IP")]),t._v(" "),a("li",[t._v("在 hosts 文件末尾中追加"),a("code",[t._v("13.229.188.59 github")]),t._v("(根据查询到的 IP 为准)")])]),t._v(" "),a("h2",{attrs:{id:"_403-forbidden-错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden-错误"}},[t._v("#")]),t._v(" 403 Forbidden 错误")]),t._v(" "),a("p",[t._v("报错：The requested URL returned error:403 Forbidden while accesssing\n答案：私有项目，没有权限，输入用户名密码，或者远程地址采用这种类型：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("config\n将"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("url = <https://github.com/用户名/仓库名.git>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n修改为：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("url = <https://用户名：密码@github.com/用户名/仓库名.git>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);