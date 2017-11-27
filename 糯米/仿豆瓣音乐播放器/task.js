var audio=document.getElementById("audio");
var processBuffer=document.getElementById("processBuffer");
var processAll=document.getElementById("processAll");
var processNow=document.getElementById('processNow');
var playArray=new Array;
var items=document.getElementById("list").getElementsByClassName("item");
for (var i = 0; i < items.length; i++) {
	items[i].onclick=function(){
		addEventPlay(this);
		Play(this);
	}
}
var posSong;


//播放模式事件
function Mode(){
	var mode=document.getElementById("mode");
	mode.onclick=ChangeMode;
	audio.loop=true;
}
Mode();
function ChangeMode(){
	var srcImg=this.getElementsByTagName("img")[0];
	if (audio.loop==false) {
		srcImg.src="imgs/图标/单曲循环.jpg";
		audio.loop=true;
	}
	else if (audio.loop==true) {
		srcImg.src="imgs/图标/循环播放.jpg";
		audio.loop=false;
	}
}


//进度条位置窗口自适应
function SetProcessPosition(){
	var circle=document.getElementById("circleIcon");
	var left=500/1920*document.body.offsetWidth;
	processBuffer.style.left=left+"px";
	processAll.style.left=left+"px";
	processNow.style.left=left+"px";
	circle.style.left=left+"px";
}
SetProcessPosition();


//添加播放事件
function addEventPlay(whichSong){
	var item=whichSong;
	var regexp=/&nbsp;/g;
	var songName=item.getElementsByClassName("songName")[0].innerHTML;
	songName=songName.replace(regexp,"");
	var singer=item.getElementsByClassName("singer")[0].innerHTML;
	singer=singer.replace(regexp,"");
	var src=singer+" - "+songName+".mp3";
	var head=document.getElementsByTagName('head')[0];
	var title=head.getElementsByTagName('title')[0];
	title.innerHTML=songName+" - "+title.innerHTML;
	document.getElementById("song").innerHTML=songName;
	var imgSinger=document.getElementById("singerImg").getElementsByTagName("img")[0];
	imgSinger.src="imgs/"+singer+".jpg";
	playArray.push(src);
}
function Play(item){
	var regexp=/&nbsp;/g;
	var songName=item.getElementsByClassName("songName")[0].innerHTML;
	songName=songName.replace(regexp,"");
	var singer=item.getElementsByClassName("singer")[0].innerHTML;
	singer=singer.replace(regexp,"");
	var src=singer+" - "+songName+".mp3";
	TimeShow();
	audio.src=src;
	audio.play();
}



//模拟添加新项目
function add(){
	var list=document.getElementById("list");
	function Item(itemName){
		var messeage=itemName.split(' - ');	
		this.singer=messeage[0];
		this.songName=messeage[1].split('.')[0];
		this.src=itemName;
	}
	Item.prototype={
		constructor:Item,
		addItem:function(){	
			list.innerHTML=list.innerHTML+"<div class=\"item\"><div class=\"flagCollect\"><span>☆</span></div><div class=\"songName\">&nbsp"+this.songName+"</div><div class=\"singer\">&nbsp&nbsp"+this.singer+"</div>&nbsp&nbsp&nbsp<div class=\"share\"><img src=\"imgs/share.jpg\"></div>&nbsp<div class=\"delate\"><span>×</span></div></div>";		
		}
	}
	var item1=new Item("杨宗纬 - 其实都没有.mp3");//自定义一个待添加的项目
	item1.addItem();
	var items=document.getElementsByClassName('item');
	for (var i = 0; i < items.length; i++) {	//因为前面用了innerHTNL，要多添加一次监听事件
		items[i].onclick=function(){
			addEventPlay(this);
			Play(this);
		}
	}			
}
add();



// 缓冲模块
audio.oncanplay=function Du() {	
	var buffer=setInterval(function(){
		if(audio.duration==audio.buffered.end(0)){
			processBuffer.style.width=processAll.offsetWidth+"px";
			clearInterval(buffer);
		}
		else{
			processBuffer.style.width=audio.buffered.end(0)/audio.duration*processAll.offsetWidth+"px";
		}
	},50)
}




//控制播放进度模块
// function CircleMove(){
	var circle=document.getElementById("circleIcon");
	var widthCircle=circle.offsetWidth;	
	circle.onmousedown=Move;
	processBuffer.addEventListener('click',MoveHere,false);//点击进度条跳到指定位置
	processNow.addEventListener('click',MoveHere,false);
	var circleControl=setInterval(function(){//小圆点随播放移动
		if (audio.currentTime==audio.duration) {
			clearInterval(circleControl);
		}
		else{
			ProcessControl();
		}	
	},50);
// }
// CircleMove();

function ProcessControl(){
	var processNowWidth=audio.currentTime/audio.duration*processAll.offsetWidth;
	processNow.style.width=processNowWidth+"px";
	var circlePos=processNowWidth+processAll.offsetLeft;
	circle.style.left=circlePos+"px";
}
function Move(event){	
	document.onmousemove=function(e){
		var widthProcess=processAll.offsetWidth;
		var left=processAll.offsetLeft;
		var right=left+widthProcess;
		var x=e.clientX;
		var targetTime=(x-left)/widthProcess*audio.duration;
		if (x>right) {
			//下一首，代写..............
			circle.style.left=right-widthCircle/2+"px";
		}else if (x<left) {
			circle.style.left=left-widthCircle/2+"px";
		}
		else{
			circle.style.left=x-widthCircle/2+"px";
			audio.currentTime=targetTime;
		}		
	}	
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
	return false;
}
function MoveHere(e){
		var widthProcess=processAll.offsetWidth;
		var left=processAll.offsetLeft;
		var right=left+widthProcess;
		var x=e.clientX;
		var targetTime=(x-left)/widthProcess*audio.duration;
		if (x>right) {
			//下一首，代写..............
			circle.style.left=right-widthCircle/2+"px";
		}else if (x<left) {
			circle.style.left=left-widthCircle/2+"px";
		}
		else{
			circle.style.left=x-widthCircle/2+"px";
			audio.currentTime=targetTime;
		}		
}





//剩余时间显示
function TimeShow(){
	var timer=setInterval(function(){
		if (audio.ended) {
			clearInterval(timer);
		}
		var remainTime=audio.duration-audio.currentTime;
		var remainMinute=Math.round(remainTime/60);
		var remainSecond=Math.round(remainTime%60);
		if (remainMinute<10) {
			var minute="-0"+remainMinute;
		}
		else
		{
			var minute="-"+remainMinute;
		}
		if (remainSecond<10){
			var second=":0"+remainSecond;
		}
		else{
			var second=":"+remainSecond;
		}
		var time=document.getElementById("time").innerHTML=minute+second;
	},100);
	
}




//音量调节函数

//实现循环播放

//播放控制函数，上或下一首，播放或暂停

//歌词演示
