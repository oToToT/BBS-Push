var table=function(){var a={},b;for(b=0;10>b;b++)a[b.toString()]=b;for(b=0;26>b;b++)a[String.fromCharCode(b+65)]=b+10;for(b=0;26>b;b++)a[String.fromCharCode(b+97)]=b+36;a["-"]=62;a._=63;return a}();function zpad(a,b){var c=b-a.length;return 0<c?times("0",c)+a:a}function aidu2fn(a){return(a[0]>>20&15?"G":"M")+"."+((a[0]<<12|a[1]>>12)&4294967295)+".A."+zpad((a[1]&4095).toString(16),3).toUpperCase()};function aidc2aidu(a){var b=0,c=0,d,e=[];if(a){for(;b<a.length&&"@"!=a[b];){d=table[a[b]];if(void 0===d)return 0;c<<=6;c|=d&63;if(3==b||7==b)e.push(c),c=0;b++}return e}}function test(a){a=aidc2aidu(a);return aidu2fn(a)};var findArticle=function(a){if((a=(new RegExp(/http[s]?:\/\/www.ptt.cc\/bbs\/([\w_-]+)\/(index|[G,M].\d{10}.A.[\d,A-F]{3}).html/g)).exec(a))&&3==a.length){var b=null;if("index"==a[2])return{board:a[1]};b=fn2aid(a[2]);return null===b?null:{board:a[1],articleId:b}}return null},fn2aid=function(a){var b=[],c=0,d=0,e=0;a=a.split(".");if(3>a.length)return null;switch(a[0]){case "M":c=0;break;case "G":c=1;break;default:return null}d=parseInt(a[1],10);if(void 0===d||"A"!=a[2]||4==a.length&&(e=parseInt(a[3],
16),void 0===e))return null;b.push(e&63);b.push(e>>6&63);for(e=0;5>e;++e)b.push(d&63),d>>=6;b.push((c&15)<<2|d&3);c=[];for(e=0;8>e;++e)c.push("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_"[b[e]]);return c.reverse().join("")};function doCheck(){document.getElementById("output").innerHTML="Now loading...";temp=document.getElementById("ta").value.search("\u203b \u767c\u4fe1\u7ad9");-1<temp?(tempBody=document.getElementById("ta").value.slice(0,temp),ta="\n"+document.getElementById("ta").value.slice(temp,document.getElementById("ta").value.length)):ta="\n"+document.getElementById("ta").value;for(var a=1;-1<ta.search("\n\u63a8 ");)ta=ta.replace("\n\u63a8 ",'\nfloor<span class="pushNum">'+a+"</span>tempPush "),a++;for(a=1;-1<
ta.search("\n\u5653 ");)ta=ta.replace("\n\u5653 ",'\nfloor<span class="booNum">'+a+"</span>tempBoo "),a++;for(a=1;-1<ta.search("\n\u2192 ");)ta=ta.replace("\n\u2192 ",'\nfloor<span class="arrowNum">'+a+"</span>tempArrow "),a++;for(a=1;-1<ta.search("floor");)ta=ta.replace("floor",'<span class="lo">'+a+"\u6a13</span>"),a++;ta=ta.replace(/tempPush/g,'<span class="push">\u63a8</span>');ta=ta.replace(/tempBoo/g,'<span class="boo">\u5653</span>');ta=ta.replace(/tempArrow/g,'<span class="arrow">\u2192</span>');ta=ta.replace(/\n/g,"<br/>");tempBody=tempBody.replace(/\n/g,"<br/>");ta=ta.replace(/  /g,"&nbsp;&nbsp;");tempBody=tempBody.replace(/  /g,"&nbsp;&nbsp;");-1<temp?document.getElementById("output").innerHTML=tempBody+ta:document.getElementById("output").innerHTML=ta;return!1}function times(a,b){for(var c=0,d="";c<b;)d+=a,c++;return d};function change(){document.getElementById("copy").checked?(document.getElementById("copyArea").style.display="block",document.getElementById("linkArea").style.display="none"):(document.getElementById("copyArea").style.display="none",document.getElementById("linkArea").style.display="block")};function toLink(){"#"==document.getElementById("aidValue").value[0]&&(document.getElementById("aidValue").value=document.getElementById("aidValue").value.slice(1,document.getElementById("aidValue").value.length));var a="https://www.ptt.cc/bbs/"+document.getElementById("board").value+"/"+test(document.getElementById("aidValue").value)+".html";document.getElementById("url").value=a};function ToAid(){"https"!=document.getElementById("url").value.slice(0,5)&&(document.getElementById("url").value=document.getElementById("url").value.replace("http","https"));var a=findArticle(document.getElementById("url").value);document.getElementById("aidValue").value=a.articleId;document.getElementById("board").value=a.board};function send(){document.getElementById("output").innerHTML="Loading...";http=new XMLHttpRequest;http.onreadystatechange=function(){if(4==http.readyState&&200==http.status){var a=http.responseText.search("<head>")+6,b=http.responseText.search("</head>");head=http.responseText.slice(a,b);a=http.responseText.search("<body>")+6;b=http.responseText.search("</body>");body=http.responseText.slice(a,b);body=body.replace('<div id="topbar-container">','<div style="display:none" id="topbar-container">');body=
body.replace('<div id="navigation-container">','<div style="display:none;" id="navigation-container">');document.getElementById("output").innerHTML="<iframe style='width:"+(screen.availWidth-200).toString()+"px;height:800px;' onload='xd()' id='ifr'></iframe>"}};http.open("GET","https://ototot.tk/BBS-Push/count.php?url="+document.getElementById("url").value,!0);http.send()};function xd(){ifr=wait().contentWindow?wait().contentWindow:wait().contentDocument.document?wait().contentDocument.document:wait().contentDocument;waitHead("ifr.document.head").innerHTML=head;waitHead("ifr.document.body").innerHTML=rep()}function wait(){return void 0!=document.getElementById("ifr")?document.getElementById("ifr"):wait()}function waitHead(a){return null!=eval(a)?eval(a):waitHead(a)}
function rep(){ta=body;var a=1;ta=ta.replace("<div id=\"fb-root\"></div>\n<script>(function(d, s, id) {\nvar js, fjs = d.getElementsByTagName(s)[0];\nif (d.getElementById(id)) return;\njs = d.createElement(s); js.id = id;\njs.src = \"//connect.facebook.net/en_US/all.js#xfbml=1\";\nfjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));\x3c/script>","");a=1;do ta=ta.replace('<span class="f1 hl push-tag">\u2192 </span>','<span class="f1 hl push-tag">\u2192 <span class="arrowNum">'+
a+"</span> </span>"),a++;while(-1<ta.search('<span class="f1 hl push-tag">\u2192 </span>'));a=1;do ta=ta.replace('<span class="hl push-tag">\u63a8 </span>','<span class="hl push-tag">\u63a8 <span class="pushNum">'+a+"</span></span>"),a++;while(-1<ta.search('<span class="hl push-tag">\u63a8 </span>'));a=1;do ta=ta.replace('<span class="f1 hl push-tag">\u5653 </span>','<span class="f1 hl push-tag">\u5653 <span class="booNum">'+a+"</span></span>"),a++;while(-1<ta.search('<span class="f1 hl push-tag">\u5653 </span>'));
a=0;do a++,ta=ta.replace('<div class="push"><','<div class="push">'+a+"\u6a13 <");while(-1<ta.search('<div class="push"><'));return ta};
