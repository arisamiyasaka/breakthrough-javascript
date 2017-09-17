/* Observer: イベントの監視と通知を行う上で役立つ。 
	publish：配達員 subscribe：購読者
	順番にアニメーションを実行したいとき
	一つ終わったあとに同時に複数実行させたいとき
*/
// コンストラクタ	
function Observer() {
	this.listeners =[];
}

// イベントを通知したい関数を追加する関数	
Observer.prototype.on = function(event, func) {
	if (! this.listeners[event]){
		this.listeners[event] =[];
	}
	this.listeners[event].push(func);
}

// 指定されたオブザーバーを検索し、リストから削除する	
Observer.prototype.off = function(func) {
	var len = this.listeners.length;

	for (var i = 0; i < len; i++ ){
		var listener = this.listeners[i];
		if (listener === func) {
			this.listeners.splice(i,1);
		}
	}
}

// オブザーバーのリスト全体を反復処理し、実行する
Observer.prototype.trigger = function(event) {
	var len = this.listeners[event].length;

	for (var i = 0; i < len; i++){
		var listener = this.listeners[event][i];
		listener();
	}
}

var observer = new Observer();
var info = function () {
	console.log("3 minutes passed")
};

observer.on("threeSec", info); // subscriberを登録
console.log("start function !!")
setTimeout(function(){
	observer.trigger("threeSec")
}, 3000);


