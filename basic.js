function times (str,num) {
		var i = 0;
		var temp = "";
		while(i<num){
			temp += str;
			i++;
		}
		return temp;
	}
	function change () {
		if(!document.getElementById("copy").checked){
			document.getElementById("copyArea").style.display = "none"
			document.getElementById("linkArea").style.display = "block"
		}else{
			document.getElementById("copyArea").style.display = "block"
			document.getElementById("linkArea").style.display = "none"
		}
	}
	function toLink () {
		if(document.getElementById("aidValue").value[0]=="#")
			document.getElementById("aidValue").value = document.getElementById("aidValue").value.slice(1,document.getElementById("aidValue").value.length)
		var link = "https://www.ptt.cc/bbs/"+document.getElementById("board").value+"/"+aidc2fn(document.getElementById("aidValue").value)+".html"
		document.getElementById("url").value = link
	}
	function ToAid () {
		if (document.getElementById("url").value.slice(0,5)!="https") 
			document.getElementById("url").value = document.getElementById("url").value.replace("http","https")
		var temp = findArticle(document.getElementById("url").value)
		document.getElementById("aidValue").value = temp["articleId"]
		document.getElementById("board").value = temp["board"]
	}
