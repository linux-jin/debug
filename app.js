function a(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function b(c,b){return(function(c){if(Array.isArray(c))return c})(c)||(function(c,b){var g,h,a=null==c?null:"undefined"!=typeof Symbol&&c[Symbol.iterator]||c["@@iterator"];if(null!=a){var d=[],e=!0,i=!1;try{for(a=a.call(c);!(e=(g=a.next()).done)&&(d.push(g.value),!b||d.length!==b);e=!0);}catch(j){i=!0,h=j}finally{try{e||null==a.return||a.return()}finally{if(i)throw h}}return d}})(c,b)||c(c,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function c(b,d){if(b){if("string"==typeof b)return a(b,d);var c=Object.prototype.toString.call(b).slice(8,-1);if("Object"===c&&b.constructor&&(c=b.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return a(b,d)}}!function(a,c,d,e){var f={parseLdns:{}},g=/(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}/g,h=/(?:来自：)[^\r\n\v\t\f\da-zA-Z]+$/m,i=function(a){var d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"0";if(v4Exact.test(a)){var c=b(a.split("."),3),e=c[0],f=c[1],g=c[2];return"".concat(e,".").concat(f,".").concat(g,".").concat(d)}return a},j=function(a){return c.getElementById(a)},k=function(){return String(new Date().getTime()+"-"+Math.random().toString(36).substring(2))},l=function(a){try{return JSON.parse(a)}catch(b){return a}},m=function(a){var b={};return a.split("\n").map(function(c){var a=c.split("=");b[a[0].toLowerCase()]=a[1]}),b},n=function(c,d,b){var a=new XMLHttpRequest;a.open("GET",encodeURI(c),!0),a.onload=function(){a.status>=200&&a.status<300||304===a.status?d(l(a.responseText)):b()},a.timeout=6e3,a.ontimeout=b,a.onerror=b,a.send()},o=function(a){return fetch(a+"?"+k(),{method:"HEAD"}).then(function(a){return Promise.all([a.ok,a.headers])}).then(function(c){var a=b(c,2),d=a[0],e=a[1];if(d)return e;throw new Error}).catch(function(a){throw a})},p=function(a,b){n("https://qqwry.api.skk.moe/"+i(a),function(a){b.textContent=a.geo},function(){b.textContent="获取失败，请刷新重试"})},q=function(a,b){void 0===f.parseLdns[a]?f.parseLdns[a]=0:f.parseLdns[a]++,n("https://api.skk.moe/network/ldns/v1/"+a,function(c){var e=c.code,g=c.msg,d=c.data.ldns;0===e&&"succ"===g&&"NULL"===d?f.parseLdns[a]<5?setTimeout(q(a,b),3500):j(b).textContent="获取失败":0===e&&"succ"===g?(j(b).textContent=d,p(d,j(b+"-geo"))):j(b).textContent="获取失败"},function(){j(b).textContent="获取失败"})},r=function(d,f){var e=function(){a.loaded||(f.textContent="请求超时"),f.textContent=a.time+" ms"},b=function(){clearTimeout(g),a.loaded=!0,a.time=parseInt(new Date-a.dt),e()},a=c.createElement("img"),g=setTimeout(e,6e3);a.onload=b,a.onerror=b,a.src=d+"?"+k(),a.dt=new Date},s=function(a,b){var c=function(a){a.loaded?a.success?b.textContent=a.time+" ms":b.textContent="连接失败":b.textContent="请求超时"};!function(c){var b=new Image,d=setTimeout(function(){b.src=null,c()},4e3);b.onload=function(){clearTimeout(d),c()},b.onerror=function(){clearTimeout(d),c()},b.src=a+"?"+k()}(function(){var b=new Image,d=setTimeout(c,6e3);b.onload=function(){clearTimeout(d),b.loaded=!0,b.success=!0,b.time=parseInt(new Date-b.dt),c(b)},b.onerror=function(){clearTimeout(d),b.loaded=!0,b.success=!1,b.time=parseInt(new Date-b.dt),c(b)},b.src=a+"?"+k(),b.dt=new Date})},t=function(){n("https://2021.ip138.com/",function(d){for(var b,a=[];null!==(b=g.exec(d));)a.includes(b[0])||a.push(b[0]);if(console.log(a),1===a.length){j("ip-cn").textContent=a[0];var c=d.match(h);c&&(console.log(c),j("ip-cn-geo").textContent=c[0].replace("来自：",""))}},function(){return j("ip-cn").textContent="获取失败，请刷新重试"}),n("/cdn-cgi/trace",function(d){var a=m(d),b=a.ip,e=a.colo,c=a.warp;b||(j("ip-hw").textContent="获取失败，请刷新重试"),j("ip-hw").textContent=b,j("ip-hw-geo").textContent="查询中",p(b,j("ip-hw-geo")),j("cdn-cf-pop").textContent=e,"off"===c?(j("cf-warp-on").textContent="否",j("cf-warp-plus").textContent="否"):"plus"===c?(j("cf-warp-on").textContent="是",j("cf-warp-plus").textContent="是"):"on"===c?(j("cf-warp-on").textContent="是",j("cf-warp-plus").textContent="否"):(j("cf-warp-on").textContent="未检出",j("cf-warp-plus").textContent="未检出")},function(){j("ip-hw").textContent="获取失败，请刷新重试",j("cdn-cf-pop").textContent="FAIL",j("cf-warp-on").textContent="未检出",j("cf-warp-plus").textContent="未检出"})},u=function(){var a=function(b){var c=k()+"."+{ct:"tx-livetools.cn",cu:"tx-livetools.com",cm:"tx-livetools.wang"}[b],d="http://".concat(c,"/s"),a=new Image;a.onload=function(){setTimeout(q(c,"dns-"+b),1500)},a.ontimeout=function(){setTimeout(q(c,"dns-"+b),1500)},a.onerror=function(){setTimeout(q(c,"dns-"+b),1500)},setTimeout(function(){a.onload=function(){},a.ontimeout=function(){},a.onerror=function(){},a.src="https://cdn.jsdelivr.net/npm/skx@0.1.1/img/lazy.gif",setTimeout(q(c,"dns-"+b),1500)},8e3),a.src=d};a("ct"),a("cu"),a("cm"),n("https://"+k()+".u.fastly-analytics.com/debug_resolver",function(b){var a=b.dns_resolver_info.ip;j("dns-hw").textContent=a,p(a,j("dns-hw-geo"))},function(){j("dns-hw").textContent="获取失败"})},v=function(){var a="Win32"===d.platform||"Windows"===d.platform,b="Mac68K"===d.platform||"MacPPC"===d.platform||"Macintosh"===d.platform||"MacIntel"===d.platform,c=e.match("iPad"),f=e.match("iPhone"),g="X11"===d.platform&&!a&&!b,h=String(d.platform).includes("Linux"),i=e.match("Android"),j=e.match("Windows CE")||e.match("WinCE")||e.match("WindowsCE"),k=e.match("Windows Mobile"),l=e.match("Windows Phone OS");return c||f?"iOS":b?"macOS":g?"Unix":h?i?"Android":"Linux":j?"Windows CE":k?"Windows Mobile":l?"Windows Phone":e.match("BlackBerry")?"BlackBerry OS":e.match("RIM Tablet OS")?"BlackBerry Tablet OS":e.match("(?:web|hpw)OS")?"webOS":e.match("SymbianOS/9.1")||e.match("Series[ ]?60")||e.match("S60")?"Series60":a?e.includes("Windows NT 5.0")||e.includes("Windows 2000")?"Windows 2000":e.includes("Windows NT 5.1")||e.includes("Windows XP")?"Windows XP":e.includes("Windows NT 5.2")||e.includes("Windows 2003")?"Windows 2003":e.includes("Windows NT 6.0")||e.includes("Windows Vista")?"Windows Vista":e.includes("Windows NT 6.1")||e.includes("Windows 7")?"Windows 7":e.includes("Windows NT 6.2")||e.includes("Windows 8")?"Windows 8":e.includes("Windows NT 10.0")||e.includes("Windows 10")?"Windows 10":"Windows":"其它（未检出）"},w=function(){var g,b,h,k,l,m,n,o,i;if(j("info-os").textContent=v(),b=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],j("info-browser").textContent=e.match("MicroMessenger")?"Weixin":/trident/i.test(b[1])?(g=/\brv[ :]+(\d+)/g.exec(e)||[],"IE ".concat(g[1]||"")):"Chrome"===b[1]&&null!=(g=e.match(/\b(OPR|Edge)\/(\d+)/))?g.slice(1).join(" ").replace("OPR","Opera"):(b=b[2]?[b[1],b[2]]:[d.appName,d.appVersion,"-?"],null!=(g=e.match(/version\/(\d+)/i))&&b.splice(1,1,g[1]),b.join(" ")),j("info-ua").textContent=e,(h=new Date).setTime(h.getTime()+1e4),c.cookie="cookie_test=".concat(escape("1"),";expires=").concat(h.toGMTString()),j("info-cookie").textContent=null!==(k=c.cookie.match(new RegExp("(^| )cookie_test=([^;]*)(;|$)")))&&"1"===unescape(k[2])?"开启":"关闭",j("info-ls").textContent=(function(){var a="pingtest";try{return localStorage.setItem(a,a),localStorage.removeItem(a),"开启"}catch(b){return"关闭"}})(),j("info-flash").textContent=(function(){var b=NaN;if(a.ActiveXObject){var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");f&&(b=Number(f.GetVariable("$version").split(" ")[1].replace(/,/g,".").replace(/^(d+.d+).*$/,"$1")))}else if(d.plugins&&d.plugins.length>0){var g=d.plugins["Shockwave Flash"];if(g){var l=g.description.split(" "),c=!0,h=!1,i=void 0;try{for(var j,e=l[Symbol.iterator]();!(c=(j=e.next()).done);c=!0){var k=j.value,m=Number(k);if(!isNaN(m)){b=k;break}}}catch(n){h=!0,i=n}finally{try{c||null==e.return||e.return()}finally{if(h)throw i}}}}return isNaN(b)?"未安装 或 未启用":b})(),m=(l=c.createElement("canvas").getContext("experimental-webgl")).getExtension("WEBGL_debug_renderer_info"),j("info-gpu").textContent=l.getParameter(m.UNMASKED_RENDERER_WEBGL),n=!1,o=function(a){return a?"支持":"不支持"},(i=new Image).src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",i.onload=function(){n=Boolean(i.height>0&&i.width>0),j("info-webp").textContent=o(n)},i.onerror=function(){n=!1,j("info-webp").textContent=o(n)},d.connection){var f=d.connection;if(f.downlink&&j("info-list").insertAdjacentHTML("beforeend","<tr><td class=\"sk-subtitle\">有效带宽</td><td>".concat(f.downlink," Mbps</td></tr>")),f.downlinkMax&&j("info-list").insertAdjacentHTML("beforeend","<tr><td class=\"sk-subtitle\">最大有效带宽</td><td>".concat(f.downlinkMax," Mbps</td></tr>")),f.rtt&&j("info-list").insertAdjacentHTML("beforeend","<tr><td class=\"sk-subtitle\">有效 RTT</td><td>".concat(f.rtt," ms</td></tr>")),f.type)switch(j("info-list").insertAdjacentHTML("beforeend","<tr><td class=\"sk-subtitle\">网络类型</td><td id=\"info-network_type\"></td></tr>"),f.type){case"bluetooth":j("info-network_type").textContent="蓝牙";break;case"cellular":j("info-network_type").textContent="数据流量";break;case"ethernet":j("info-network_type").textContent="以太网";break;case"wifi":j("info-network_type").textContent="WIFI";break;default:j("info-network_type").textContent="未知";break}}},x=function(){r("https://www.cloudflare.com",j("cdn-cf-rtt")),r("https://www.fastly.com",j("cdn-fastly-rtt")),o("https://any.pops.fastly-analytics.com").then(function(b){var a=b.get("x-served-by");a?j("cdn-fastly-pop").textContent=a.split("-")[2]:j("cdn-fastly-pop").textContent="FAIL"}).catch(function(){j("cdn-fastly-pop").textContent="FAIL"}),r("https://cdn.jsdelivr.net/npm/skx@0.1.0/img/lazy.gif",j("cdn-jsdelivr-rtt")),o("https://cdn.jsdelivr.net/npm/skx@0.0.9/img/lazy.gif").then(function(a){var b="Fastly",c=a.get("server"),d=a.get("x-via");c&&/Cloudflare/i.test(c)&&(b="Cloudflare"),a.get("x-hw")&&(b="StackPath"),(a.get("x-ws-request-id")||d&&d.includes("Cdn Cache Server"))&&(b="QUANTIL"),j("cdn-jsdelivr-cdn").textContent=b}).catch(function(a){j("cdn-jsdelivr-cdn").textContent="FAIL"}),r("https://d2axgrpnciinw7.cloudfront.net/500b-bench.jpg",j("cdn-cloudfront-rtt")),o("https://d2axgrpnciinw7.cloudfront.net/500b-bench.jpg").then(function(b){var a=b.get("x-amz-cf-pop");a?j("cdn-cloudfront-pop").textContent=a.split("-")[0]:j("cdn-cloudfront-pop").textContent="FAIL"}).catch(function(a){j("cdn-cloudfront-pop").textContent="FAIL"})},y=function(){var a=!0,d=!1,e=void 0;try{for(var f,c=Object.entries({baidu:"https://www.baidu.com/favicon.ico",qq:"https://www.qq.com/favicon.ico",163:"https://www.163.com/favicon.ico",weibo:"https://weibo.com/favicon.ico",tmall:"https://www.tmall.com/favicon.ico",bilibili:"https://www.bilibili.com/favicon.ico",github:"https://github.com/favicon.ico",telegram:"https://www.telegram.org/favicon.ico",google:"https://www.google.com/favicon.ico",youtube:"https://www.youtube.com/favicon.ico",twitter:"https://twitter.com/favicon.ico",facebook:"https://www.facebook.com/favicon.ico"})[Symbol.iterator]();!(a=(f=c.next()).done);a=!0){var g=b(f.value,2),h=g[0],i=g[1];s(i,j("http-".concat(h)))}}catch(n){d=!0,e=n}finally{try{a||null==c.return||c.return()}finally{if(d)throw e}}},z=function(){var a=function(a){var b="";return a<5?b="sk-text-success":a<20?b="sk-text-warning":a<100&&(b="sk-text-error"),"<span class=\"".concat(b,"\" style=\"font-size: 2.5rem; vertical-align: middle; margin: 0 8px;\">").concat(a,"</span>")};n("https://x-header.sukkaw.com/headers",function(b){j("cf-score").innerHTML="<span style=\"vertical-align: middle; font-size: 1.2rem\">Cloudflare 威胁指数是</span> ".concat(a(b.headers["X-Threat-Score"]))},function(){j("cf-score").innerHTML="<span style=\"vertical-align: middle; font-size: 1.2rem\">Cloudflare 威胁指数</span> ".concat(a("获取失败"))})};a.addEventListener("load",function(){a.SKK_NETWORK_DEBUG={parseLdns:{}},w(),t(),u(),x(),y(),z();var b=function(){var f=function(b){var a=c.createElement("div");a.classList.add("modal"),a.innerHTML="<div class=\"modal-background\"></div><div class=\"modal-card\"><div class=\"modal-card-head\"><p class=\"modal-card-title\">请长按保存图片</p></div><div id=\"modal-content\" class=\"modal-card-body\"></div><div class=\"modal-card-foot\"><button class=\"button\">知道了</button></footer></div>";var d=a.querySelector("#modal-content");c.body.appendChild(a),setTimeout(function(){a.classList.add("is-active")},300),setTimeout(function(){d.innerHTML="<img src=\"".concat(b.toDataURL(),"\">")},0),a.querySelector("button").addEventListener("click",function(){c.body.removeChild(a)})};if(a.html2canvas)html2canvas(c.body).then(function(d){if("iOS"===v())f(d);else{var g=d.toDataURL("image/png").replace("image/png","image/octet-stream"),h="debug.skk.moe_"+new Date().getTime()+".png",b=c.createElementNS("http://www.w3.org/1999/xhtml","a");b.href=g,b.download=h;var e=c.createEvent("MouseEvents");e.initMouseEvent("click",!0,!1,a,0,0,0,0,0,!1,!1,!1,!1,0,null),b.dispatchEvent(e)}});else{var d=c,e=d.createElement("script");e.src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5",(d.head||d.body).appendChild(e),e.onload=b}};j("btn-generate-report").addEventListener("click",b,!1)})}(window,document,navigator,navigator.userAgent)