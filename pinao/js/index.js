var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
var per = clientWidth/375;
document.documentElement.style.fontSize = per*100 +'px';
window.onresize = function(){
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
		// 计算比例
		var per = clientWidth / 375;
		document.documentElement.style.fontSize = per*100 + "px"
	}


var d1 = document.getElementById('d1'),
d2 = document.getElementById('d2'),
d3 = document.getElementById('d3'),
d4 = document.getElementById('d4'),
d5 = document.getElementById('d5'),
d6 = document.getElementById('d6'),
d7 = document.getElementById('d7'),
u1 = document.getElementById('u1'),
 u2 = document.getElementById('u2'),
 u3 = document.getElementById('u3'),
 u4 = document.getElementById('u4'),
 u5 = document.getElementById('u5'),
 u6 = document.getElementById('u6'),
 u7 = document.getElementById('u7'),
au = document.getElementById('au');
d1.addEventListener('touchstart',function(){
	au.src='sond/d1.mp3'
	au.onload=function(){
		au.play();
	}
})

d2.addEventListener('touchstart',function(){
	au.src='sond/d2.mp3'
	au.onload=function(){
		au.play();
	}
})

d3.addEventListener('touchstart',function(){
	au.src='sond/d3.mp3'
	au.onload=function(){
		au.play();
	}
})

d4.addEventListener('touchstart',function(){
	au.src='sond/d4.mp3'
	au.onload=function(){
		au.play();
	}
})

d5.addEventListener('touchstart',function(){
	au.src='sond/d5.mp3'
	au.onload=function(){
		au.play();
	}
})

d6.addEventListener('touchstart',function(){
	au.src='sond/d6.mp3'
	au.onload=function(){
		au.play();
	}
})
d7.addEventListener('touchstart',function(){
	au.src='sond/d7.mp3'
	au.onload=function(){
		au.play();
	}
})



u1.addEventListener('touchstart',function(){
	au.src='sond/u1.mp3'
	au.onload=function(){
		au.play();
	}
})

u2.addEventListener('touchstart',function(){
	au.src='sond/u2.mp3'
	au.onload=function(){
		au.play();
	}
})

u3.addEventListener('touchstart',function(){
	au.src='sond/u3.mp3'
	au.onload=function(){
		au.play();
	}
})

u4.addEventListener('touchstart',function(){
	au.src='sond/u4.mp3'
	au.onload=function(){
		au.play();
	}
})

u5.addEventListener('touchstart',function(){
	au.src='sond/u5.mp3'
	au.onload=function(){
		au.play();
	}
})

u6.addEventListener('touchstart',function(){
	au.src='sond/u6.mp3'
	au.onload=function(){
		au.play();
	}
})
u7.addEventListener('touchstart',function(){
	au.src='sond/u7.mp3'
	au.onload=function(){
		au.play();
	}
})