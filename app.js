//var app = require('./node_modules/express/index').createServer();
//createServer упразднен, вместо вызова createServer() теперь используется ...

var express = require('express');
var app = express();
var hbs = require('hbs');

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.get("/", function(request, response){
	//response.send('Главная страница');
	response.render("home.hbs");
});
//что произойдет, если не будет определен маршрут "/". По логике как и при отсутствии любого маршрута на запрос к серверу должен быть возвращен ответ с кодом ошибки 404
//на самом деле сервер возвращает страницу !! с текстом в body "Can not get /"

app.get("/products", function(request, response){
	response.render("products.hbs", {
		cart: ["apples","cucumbers","sausages","milk"]
	});
});
app.listen(3000);