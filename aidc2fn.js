var table=function(){var a={},b;for(b=0;10>b;b++)a[b.toString()]=b;for(b=0;26>b;b++)a[String.fromCharCode(b+65)]=b+10;for(b=0;26>b;b++)a[String.fromCharCode(b+97)]=b+36;a["-"]=62;a._=63;return a}();function zpad(a,b){var c=b-a.length;return 0<c?times("0",c)+a:a}function aidu2fn(a){return(a[0]>>20&15?"G":"M")+"."+((a[0]<<12|a[1]>>12)&4294967295)+".A."+zpad((a[1]&4095).toString(16),3).toUpperCase()}function aidc2aidu(a){var b=0,c=0,d,e=[];if(a){for(;b<a.length&&"@"!=a[b];){d=table[a[b]];if(void 0===d)return 0;c<<=6;c|=d&63;if(3==b||7==b)e.push(c),c=0;b++}return e}}function aidc2fn(a){a=aidc2aidu(a);return aidu2fn(a)};
