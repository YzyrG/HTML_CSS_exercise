//javascript  引用标题并改变标题的值
// let myHeading = document.querySelector('h1'); //引用h1标题元素并赋给变量myHeading
// myHeading.textContent = 'Hello World!';//把'Hello World!'赋给myHeading的textContent（文本内容）属性

// 简洁写法
// document.querySelector('h1').textContent='Hello World';

//点击图片切换--图片切换器
//引用img图片元素并将其赋给变量myImg
let myImg = document.querySelector('img');
//将点击事件与img元素绑定
myImg.onclick = function(){
	//获取img元素的src属性并将其值赋给变量imgsrc
	let imgsrc = myImg.getAttribute('src');
	//判断src属性值是否等于原始图像路径
	if(imgsrc === 'images/steam3.jpg'){
			//如果等于,则修改src属性值为第二张图片的路径，并加载该图片
			myImg.setAttribute('src','images/steam.jpg');			
		}else{
			//不等于意味着它已经修改过, 则把 src 的值重新设置为原始图片的路径，即原始状态。
			myImg.setAttribute('src','images/steam3.jpg');
		}
}

// 设置个性化标题
// 引用标题和按钮元素并赋给变量
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
// //当用户点击按钮时调用以下自定义函数
//  myButton.onclick = function() {
//  	// prompt() 函数， 与 alert() 类似会弹出一个对话框，但是这里需要输入数据
//  	let myName = prompt('请问你怎么称呼呢？');
//  	// 更新标题，加上设置的用户名
// 	myHeading.textContent = '(*^▽^*)欢迎来到我的页面,' + myName;
// }

// 以上的个性化设置不完整，首次进入页面不会调用创建函数让用户先设置名字，不符合需求
// 且当用户刷新页面或关闭页面后再进入，标题会被还原，刚刚设置的名字不见了
//改进，，首次进入页面要先输入名字，存储名字
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
//程序是按照代码顺序执行的
//首次进入页面要弹出输入框让用户输名字
//用户进入页面时，去判断是否已存在名字
// 存在，则调用保存的名字显示对应标题；不存在则由弹出输入框，由用户自己输入并确认，同时保存名字
// 存在时，用户想要改名，可点击按钮重新设置
// 所以，三部分逻辑的顺序是：创建函数>判断逻辑>按钮点击事件
// 判断在创建后面，是因为要调用创建函数中保存的名字

//创建名字、保存名字
function userName(){
	let myName = prompt('尊姓大名？');
	// 优化，考虑没有输入值或是myName=null的情况
	// null:点取消时出现，这是 JavaScript 中的一个特殊值，表示引用不存在
	// 判断输入值
	if (!myName || myName === null){
		//重新调用创建函数
		userName();
	}else {
		// 有值且不为null，则将设置的名字保存在浏览器中，并更新标题
		localStorage.setItem('name',myName);
		myHeading.textContent = '(*^▽^*)欢迎来到我的页面,' + myName;		
	}	
}

// 判断是否已存在名字
// !,name不存在，即没有被设置过
if (!localStorage.getItem('name')){
	userName();
}else{
	// 存在，即用户上次访问时设置过，则调用保存的名字
	let localName = localStorage.getItem('name');
	myHeading.textContent = ':)你又来啦,' + localName;
}

// 点击事件,调用创建函数
myButton.onclick = function(){
	userName();
}
