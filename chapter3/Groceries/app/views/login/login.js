var observable = require("data/observable");
var frameModule = require("ui/frame");
var page;
var email;
var password;
var user = new observableModule.fromObject({
	email: "user@domain.com",
	password: "password"
});

exports.loaded = function(args) {
	page = args.object;
	page.bindingContext = user;
};
exports.signIn = function() {
	email = page.getViewById("email");
	console.log(email.text);
};
exports.register = function() {
	var topmost = frameModule.topmost();
	topmost.navigate("views/register/register");
};

