import { Parser } from "./parser"

let parser1: Parser = new Parser("2-3+5*3/1*3-1");
let parser2: Parser = new Parser("3-2+1*3/1");
let parser3: Parser = new Parser("");

console.log(parser1.getResult());
console.log(parser2.getResult());
console.log(parser3.getResult);