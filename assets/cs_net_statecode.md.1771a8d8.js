import{_ as t,o as e,c as r,O as a}from"./chunks/framework.a16bd534.js";const b=JSON.parse('{"title":"计算机网络","description":"","frontmatter":{},"headers":[],"relativePath":"cs/net/statecode.md","lastUpdated":1694245341000}'),d={name:"cs/net/statecode.md"},l=a('<h1 id="计算机网络" tabindex="-1">计算机网络 <a class="header-anchor" href="#计算机网络" aria-label="Permalink to &quot;计算机网络&quot;">​</a></h1><h2 id="http-状态码" tabindex="-1">HTTP 状态码 <a class="header-anchor" href="#http-状态码" aria-label="Permalink to &quot;HTTP 状态码&quot;">​</a></h2><h3 id="总览" tabindex="-1">总览 <a class="header-anchor" href="#总览" aria-label="Permalink to &quot;总览&quot;">​</a></h3><table><thead><tr><th>状态码</th><th>代表状态</th><th>含义</th></tr></thead><tbody><tr><td>1xx</td><td>information 信息</td><td>请求正在处理</td></tr><tr><td>2xx</td><td>success 成功</td><td>请求成功</td></tr><tr><td>3xx</td><td>redirection 重定向</td><td>需要进行附加操作完成请求</td></tr><tr><td>4xx</td><td>client error 客户端错误</td><td>客户端出错</td></tr><tr><td>5xx</td><td>server error 服务端错误</td><td>服务端出错</td></tr></tbody></table><h3 id="_4xx" tabindex="-1">4xx <a class="header-anchor" href="#_4xx" aria-label="Permalink to &quot;4xx&quot;">​</a></h3><table><thead><tr><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>400 Bad Request</td><td>请求报文存在语法错误，需修改再次发送</td></tr><tr><td>401 Unauthorized</td><td>发送的请求需要有通过 HTTP 认证的认证信息或认证失败</td></tr><tr><td>403 Forbidden</td><td>服务器拒绝访问。<strong>跨域</strong>访问、未获得文件系统的访问授权、从未授权的 IP 发送请求都可能返回 403</td></tr><tr><td>404 Not Found</td><td>找不到请求的资源</td></tr><tr><td>415 Unsupported Media Type</td><td>服务器无法处理请求附带的媒体格式，通过添加 <code>content-type</code> 请求头指明数据类型</td></tr></tbody></table><p>400 一般是两种情况：</p><ul><li>前端传的参数类型或者名称与后台接收参数的实体类的属性类型或者名称不一致</li><li>前端提交 ajax 请求的数据应该是 json 格式字符串的，但是却没有将对象转换成 json 格式的字符串</li></ul><p>401 和 403 的区别：</p><ul><li>401 指客户端没有认证或认证失败，可以修改认证信息重试</li><li>403 指客户端认证成功了，但没有资格访问资源，且在获得权限之前不用再重试了</li></ul><h3 id="_5xx" tabindex="-1">5xx <a class="header-anchor" href="#_5xx" aria-label="Permalink to &quot;5xx&quot;">​</a></h3><table><thead><tr><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>500 Internal Server Error</td><td>服务端内部错误</td></tr><tr><td>501 Not Implemented</td><td>服务端无法完成请求，如无法识别请求方法</td></tr><tr><td>502 Bad Gateway</td><td>网关错误，可能是服务器没开或压力太大响应不过来</td></tr><tr><td>503 Service Unavailable</td><td>服务端处于超负载状态或正停机维护，暂时无法处理请求</td></tr><tr><td>504 Gateway Time-out</td><td>网关超时</td></tr><tr><td>505 HTTP Version Not Supported</td><td>服务端不支持 HTTP 协议的版本</td></tr></tbody></table><h4 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h4><ul><li><p><a href="https://blog.csdn.net/qq_22182643/article/details/103103078/" target="_blank" rel="noreferrer">HTTP Status 400 (HTTP400 状态码)</a></p></li><li><p><a href="https://blog.csdn.net/condoleeA/article/details/104589824/" target="_blank" rel="noreferrer">401 与 403 的区别</a></p></li><li><p><a href="https://juejin.cn/post/6844903590763429895" target="_blank" rel="noreferrer">HTTP 状态码 401 和 403 深度解析</a></p></li><li><p><a href="https://majing.blog.csdn.net/article/details/78383772" target="_blank" rel="noreferrer">HTTP 请求返回 415 错误码定位解决</a></p></li><li><p><a href="https://blog.csdn.net/Xu_pengtao/article/details/122884259" target="_blank" rel="noreferrer">HTTP 状态码 502 深度解析</a></p></li></ul>',14),o=[l];function n(i,h,s,c,p,_){return e(),r("div",null,o)}const u=t(d,[["render",n]]);export{b as __pageData,u as default};
