// let cred=new PasswordCredential({
// 	id: "10002",
// 	password: "imf34",
// 	name: "Jackie233",
// 	// iconURL: "icon.jpg",
// })
// navigator.credentials.store(cred).then(cred=>{
// })
// navigator.credentials.get({
// 	password: true,
// 	unmediated: true,
// }).then((d)=>{
// 	console.log(d);
// })
// navigator.credentials.requireUserMediation()

class B0 {
	constructor() {
		this.name = "";
	}
	config(opt) {}
	init() {}
}

let dFnCtn = [];

function addUnloadFn(fn) {
	dFnCtn.push(fn);
}
onbeforeunload = () => {
	for (let i = 0; i < dFnCtn.length; i++) {
		dFnCtn[i]();
	}
}
addEventListener("message", (d) => {
	console.log("123");
})
window.postMessage("sdf", "/");

addEventListener("load", () => {
	let userMeta = document.querySelector("head>meta#UserInfo");
	let userID = userMeta.getAttribute("userID");
	navigator.serviceWorker.register('sw.js', {
			scope: '/'
		})
		.then((s) => {
			let {
				active
			} = s;
			active.postMessage({
				type: "login",
				uID: userID,
				pwd: "jdf34:22(72",
			});
			addUnloadFn(() => {
				active.postMessage(0);
			})
			addEventListener("mousedown", (e) => {
				let {
					clientX,
					clientY
				} = e;
				active.postMessage({
					type: "subscribe",
					keyPath: "pos.x",
					chronic: false,
				});
			})
		})
		.catch(function (err) {
			console.log('ServiceWorker failed to register. Are you visiting the HTTPS site?');
			console.log(err.message);
		});
	let circle = document.querySelector("#c1");

	navigator.serviceWorker.addEventListener("message", (e) => {
		let {
			type,
			data
		} = e.data;
		if (type === "publish") {
			// 数据更新.告知ServiceWorker自己感兴趣的内容

		} else if (type === "notification") {
			// 通知.由ServiceWorker主动发出,相当于

		} else if (type === "warning") {
			// 警告
		} else {

		}
	})
})