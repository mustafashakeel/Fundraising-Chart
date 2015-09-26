var aa = (function(){
	return {
		speak:function(){
			var arg = arguments[0] || "";
			var sayit = arg.say || 'Hello';
			console.log(arg);
			console.log(arguments.length);
			console.log(arguments[1].length);
			console.log(arguments);
		}
	};

//	return console.log(arguments[0].say);
})(); 


// function calc(a,b,c){
// 	return c(a,b);
// }
// function add(a,b){
// 	return a+b;
// }
// function minus(a,b){
// 	return a-b;
// }



//  var aa = {
 	
//  	call:function(){
// 		alert("asdf");
//  	},
//  	test :'Wonderful'
// }

// var calc = {
// 	add:function(a,b){
// 		return a+b

// 	},
// 	calcf:function(a,b,c){
// 		c(a,b);
// 	}
// }


// (function(){
// 	 alert("asdf");
// })

// var aa = (function(){
// 	//return alert("asdfasdf");

// 	return{
// 		call:function(){
// 			alert("this is cool");
// 		},
// 		bike:function(){
// 			alert("bike");
// 		},
// 		interenal:function(){
// 			second:function(){
// 				alert("Second");
// 			}
// 		}
// 		// ,
// 		// again:function(){
// 		// 	oncemore:function(){
// 		// 		alert("oncemore");
// 		// 	}
// 		// }
// 	}

// }

// 	)();