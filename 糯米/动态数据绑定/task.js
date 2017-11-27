function Observer(data) {
	// body...
	this.data=data;
	this.walk(data);
}

let p=Observer.prototype;

p.walk=function(data){
	for(var key in data){
		if (data.hasOwnProperty(key)) {
			var elem=data[key];
			if (typeof elem=='object') {
				new Observer(key);
			}
			this.convert(key,elem);
		}
	}
}

p.convert=function(key,val){
	Object.defineProperty(this.data,key,{
		enumerable:true,
		configurable:true,
		get:function(){
			if (typeof key=='object') {
				return val
			}
			else{
				console.log("你访问了"+key);
				return val
			}
			
		},
		set:function(newVal){
			if (typeof newVal=='object') {
				new Observer(newVal);
			}
			console.log('你设置了'+key+'='+newVal);
			val=newVal;
		}
	})
}

let app1 = new Observer({
  name: 'youngwind',
  age: 25
});

let app2 = new Observer({
  university: 'bupt',
  major: 'computer'
});


// var obj={
// 	name: 'youngwind',
// 	age: 25
// };


// 	for(var key in obj){
// 		if (obj.hasOwnProperty(key)) {
// 			alert(obj[key]);
// 			alert(key);
			
// 		}
// 	}