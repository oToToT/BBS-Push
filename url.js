	function rep(){
		ta = body;
		
		var i=1;
		ta = ta.replace('<div id="fb-root"></div>\n<script>(function(d, s, id) {\nvar js, fjs = d.getElementsByTagName(s)[0];\nif (d.getElementById(id)) return;\njs = d.createElement(s); js.id = id;\njs.src = "//connect.facebook.net/en_US/all.js#xfbml=1";\nfjs.parentNode.insertBefore(js, fjs);\n}(document, \'script\', \'facebook-jssdk\'));\<\/script>',"")
		var i = 1
		do{
			ta = ta.replace('<span class="f1 hl push-tag">→ <\/span>' ,  '<span class="f1 hl push-tag">→ <span class="arrowNum">'+i+'</span> <\/span>' );
			i++
		}while(ta.search('<span class="f1 hl push-tag">→ <\/span>')>-1)
		var i = 1;
		do{
			ta = ta.replace('<span class="hl push-tag">推 <\/span>' ,  '<span class="hl push-tag">推 <span class="pushNum">'+ i +'</span><\/span>' );
			i++
		}while(ta.search('<span class="hl push-tag">推 <\/span>')>-1)
		var i = 1;
		do{
			ta = ta.replace('<span class="f1 hl push-tag">噓 <\/span>' ,  '<span class="f1 hl push-tag">噓 <span class="booNum">'+ i +'</span><\/span>' );
			i++
		}while(ta.search('<span class="f1 hl push-tag">噓 <\/span>')>-1)
		var i = 0;
		do{
			i++
			ta = ta.replace('<div class="push"><'	,  "<div class=\"push\">"+i+"樓 <");
		}while(ta.search('<div class="push"><')>-1)
		return ta;
	}
	function send () {
		document.getElementById("output").innerHTML = "Loading..."
		http = new XMLHttpRequest
		http.onreadystatechange=function(){
			if (http.readyState == 4&&http.status==200) {
				var headStart = http.responseText.search("<head>")+6
				var headEnd = http.responseText.search("</head>")
				head = http.responseText.slice(headStart,headEnd)
				var bodyStart = http.responseText.search("<body>")+6
				var bodyEnd = http.responseText.search("</body>")
				body = http.responseText.slice(bodyStart,bodyEnd)
				body = body.replace('<div id="topbar-container">','<div style="display:none" id="topbar-container">')
				body = body.replace('<div id="navigation-container">','<div style="display:none;" id="navigation-container">')
				document.getElementById("output").innerHTML = "<iframe style='width:"+(screen.availWidth-200).toString()+"px;height:800px;' onload='xd()' id='ifr'></iframe>"
			}
		}
		http.open ("GET", "http://card.boxhost.me/count.php?url="+document.getElementById("url").value, true);
		http.send()
	}
	function xd(){
		ifr = (wait().contentWindow) ? wait().contentWindow : (wait().contentDocument.document) ? wait().contentDocument.document : wait().contentDocument;
		waitHead("ifr.document.head").innerHTML = head;
		waitHead("ifr.document.body").innerHTML = rep();
	}
	function wait () {
		if(document.getElementById("ifr")!=undefined)
			return document.getElementById("ifr")
		else
			return wait()
	}
	function waitHead(a){
		if(eval(a)!=null)
			return eval(a)
		else
			return waitHead(a)
	}
