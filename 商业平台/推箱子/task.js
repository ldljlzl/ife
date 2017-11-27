function InitMap() {
	var mapStore=new Array(2);//0为空白，1为墙壁，2为me，3为箱子，4为目的地
	mapStore[0]=[[0,0,1,1,1,0,0,0],[0,0,1,4,1,0,0,0],[0,0,1,0,1,1,1,1],[1,1,1,3,0,3,4,1],[1,4,0,3,2,1,1,1],[1,1,1,1,3,1,0,0],[0,0,0,1,4,1,0,0],[0,0,0,1,1,1,0,0]];
	mapStore[1]=[[0,1,1,1,1,0,0,0],[1,1,0,0,1,0,0,0],[1,0,2,3,1,0,0,0],[1,1,0,0,1,1,0,0],[1,1,3,3,0,1,0,0],[1,4,3,0,0,1,0,0],[1,4,4,0,4,1,0,0],[1,1,1,1,1,1,0,0]];
	var mapNow=mapStore[0];
	
	divsLine=document.getElementsByClassName('line');
	for (var i = 0; i < divsLine.length; i++) {
		var divs=divsLine[i].getElementsByClassName("div");
		for (var j = 0; j < divs.length; j++) {
			switch(mapNow[i][j])
			{
				case 0:
				break;
				case 1:
				divs[j].innerHTML="<img src=\"img/wall.png\">";
				break;
				case 2:
				divs[j].innerHTML="<img src=\"img/me.png\">";
				var xMe=i;
				var yMe=j;
				break;
				case 3:
				divs[j].innerHTML="<img src=\"img/box.png\">";
				break;
				case 4:
				divs[j].style.backgroundColor="#52EDC3";
				break;
			}
		}
	}
	return [xMe,yMe,mapNow];
}
function Move(map,x,y,direction){
	switch(direction)
	{
		//0为空白，1为墙壁，2为me，3为箱子，4为目的地
		case 0:
			if ((map[x][y-1]==0)||(map[x][y-1]==4) ){
				map[x][y]=0;
				map[x][y-1]=2;
			}
			if (map[x][y-1]==3) {
				if ((map[x][y-2]==0)||(map[x][y-2]==4)) {
					map[x][y-2]=3;
					map[x][y-1]=2;
					map[x][y]=0;
				}
			}
			break;
		case 1:
			if ((map[x-1][y]==0)||(map[x-1][y]==4) ){
				map[x][y]=0;
				map[x-1][y]=2;
			}
			if (map[x-1][y]==3) {
				if ((map[x-2][y]==0)||(map[x-2][y]==4)) {
					map[x-2][y]=3;
					map[x-1][y]=2;
					map[x][y]=0;
				}
			}
			break;
		case 2:
			if ((map[x][y+1]==0)||(map[x][y+1]==4) ){
				map[x][y]=0;
				map[x][y+1]=2;
			}
			if (map[x][y+1]==3) {
				if ((map[x][y+2]==0)||(map[x][y+2]==4)) {
					map[x][y+2]=3;
					map[x][y+1]=2;
					map[x][y]=0;
				}
			}
			break;
		case 3:
			if ((map[x+1][y]==0)||(map[x+1][y]==4) ){
				map[x][y]=0;
				map[x+1][y]=2;
			}
			if (map[x+1][y]==3) {
				if ((map[x+2][y]==0)||(map[x+2][y]==4)) {
					map[x+2][y]=3;
					map[x+1][y]=2;
					map[x][y]=0;
				}
			}
			break;
	}
	divsLine=document.getElementsByClassName('line');
	for (var i = 0; i < divsLine.length; i++) {
		var divs=divsLine[i].getElementsByClassName("div");
		for (var j = 0; j < divs.length; j++) {
			switch(map[i][j])
			{
				case 0:
					divs[j].innerHTML="";
					break;
				case 2:
					divs[j].innerHTML="<img src=\"img/me.png\">";
					var xMe=i;
					var yMe=j;
					break;
				case 3:
					divs[j].innerHTML="<img src=\"img/box.png\">";
					break;

			}
		}
	}
	return [xMe,yMe,map];
}
function Test(initial,now){
	if (now[5][4]==2) {
		var lzl=1;
	}
	for (var i = 0; i < initial.length; i++) {
		for (var j = 0; j < initial[i].length; j++) {

			if (initial[i][j]==4) {
				if (now[i][j]!=3) {
					return false;
				}
			}
		}
	}
	alert("过关啦！");
	return true;
}

var x,y;
var initialMap,map;
[x,y,initialMap]=InitMap();
map=initialMap;

document.onkeydown=function(event){
	if (event.keyCode==37) {
		//left
		[x,y,map]=Move(map,x,y,0);
		Test(initialMap,map);
	}
	if (event.keyCode==38) {
		//up
		[x,y,map]=Move(map,x,y,1);
		Test(initialMap,map);
	}
	if (event.keyCode==39) {
		//right
		[x,y,map]=Move(map,x,y,2);
		Test(initialMap,map);
	}
	if (event.keyCode==40) {
		//down
		[x,y,map]=Move(map,x,y,3);
		Test(initialMap,map);
	}
}




