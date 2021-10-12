// setup bindings
console.stdlog = console.log.bind(console);
console.logs = [];
console.errors = [];
console.warns = [];
console.log = function(){
    console.logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
}
console.error = function (){
	console.errors.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
}
console.warn = function (){
	console.warns.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
}
console.log("Performing injection...");
document.body.innerHTML += "<div class='devconsole'><h1>Dev console</h1>\n<textarea disabled=true cols=30 rows=7 class=\"devcontent\"></textarea>\n<p></p>\n<input type='text' placeholder='Enter Command' class=\"devbox\"></input></div>";
document.querySelector(".devconsole").style = {
	backgroundColor: "black"
};
document.querySelector(".devbox").addEventListener("keyup",  function (event){
	if (event.keyCode == 13){
		event.preventDefault();
		if (document.body.querySelector(".devbox").value == "help"){
			console.logs.push("Devconsole help page:");
			console.logs.push("Internals commands:");
			console.logs.push("this.ClearConsole(); - Clear all console data");
			console.logs.push("this.OpenInspect(); - Open inspect element");
		}
		const script = document.createElement("script")
		script.text = document.body.querySelector(".devbox").value
		document.body.appendChild(script)
		document.body.querySelector(".devbox").value = ""
	}
})
this.ClearConsole = function (){
	console.logs = [];
	console.warns = [];
	console.errors = [];
}
this.OpenInspect = function (){
	console.warns.push("Inspect element is unstable");
	document.body.style = {
		backgroundColor: "black"
	};
}
console.log("Injected devconsole!");
var intervalId = window.setInterval(function(){
	document.querySelector(".devcontent").textContent = "";
	console.logs.forEach(function (log){
		document.querySelector(".devcontent").textContent += "\n" + log;
	});
	console.errors.forEach(function (error){
		document.querySelector(".devcontent").textContent += "\n[ERROR]: " +  error
	})
	console.warns.forEach(function (warn){
		document.querySelector(".devcontent").textContent += "\n[WARNING]: " +  warn
	})
}, 100);
