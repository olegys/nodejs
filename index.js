"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 80;
app.get('/', function (req, res) {
    res.end('<h1>Машик я люблю тебя !</h1>');
});
app.listen(PORT, function () {
    console.log('Server has been started !!!');
});
