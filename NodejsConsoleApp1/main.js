"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./parser");
var parser1 = new parser_1.Parser("2-3+5*3/1*3-1");
var parser2 = new parser_1.Parser("3-2+1*3/1");
var parser3 = new parser_1.Parser("");
console.log(parser1.getResult());
console.log(parser2.getResult());
console.log(parser3.getResult);
//# sourceMappingURL=main.js.map