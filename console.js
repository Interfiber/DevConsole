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
document.body.innerHTML += "<div class='devconsole'><h1>Dev console</h1>\n<textarea class=\"devcontent\"></textarea>\n<input type='text' placeholder='Enter Command' class=\"devbox\"></input></div>";
document.querySelector(".devbox").addEventListener("keyup",  function (event){
	if (event.keyCode == 13){
		event.preventDefault();
		const script = document.createElement("script")
		script.text = document.body.querySelector(".devbox").value
		document.body.appendChild(script)
		document.body.querySelector(".devbox").value = ""
	}
})
this.ClearConsole = function (){
	console.logs = [];
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
