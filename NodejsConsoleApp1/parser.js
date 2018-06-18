"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parser = /** @class */ (function () {
    function Parser(inputLine) {
        this.input = inputLine;
    }
    Parser.prototype.getResult = function () {
        return this.Calculation(this.input);
    };
    Parser.prototype.Calculation = function (input) {
        if (input.length === 0) {
            return "Empty string";
        }
        var list = [0];
        var plus = input.split("+");
        for (var _i = 0, plus_1 = plus; _i < plus_1.length; _i++) {
            var i = plus_1[_i];
            if (!isNaN(Number(i))) {
                list.push(Number(i));
                continue;
            }
            if (i.indexOf("-") > 0) {
                var d = i.split("-");
                for (var _a = 0, d_1 = d; _a < d_1.length; _a++) {
                    var a = d_1[_a];
                    var v = d.indexOf(a) === 0 ? 1 : -1;
                    if (!isNaN(Number(i))) {
                        list.push(Number(i));
                    }
                    if (a.indexOf("/") > 0) {
                        var y = a.indexOf("*") > 0 ? this.SubFunc2(a) * v : this.SubFunc1(a) * v;
                        list.push(Number(y));
                    }
                    else if (a.indexOf("*") > 0) {
                        list.push(this.SubFunc3(a) * v);
                    }
                }
            }
            else {
                if (i.indexOf("/") > 0) {
                    var y = i.indexOf("*") > 0 ? this.SubFunc2(i) : this.SubFunc1(i);
                    list.push(Number(y));
                }
                else if (i.indexOf("*") > 0) {
                    list.push(this.SubFunc3(i));
                }
            }
        }
        var res = 0;
        for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
            var t = list_1[_b];
            res += Number(t);
        }
        return res;
    };
    Parser.prototype.SubFunc1 = function (str) {
        var r1 = str.split("/");
        var res = Number(r1[0]);
        for (var z = 1; z < r1.length; z++) {
            res /= Number(r1[z]);
        }
        return res;
    };
    Parser.prototype.SubFunc2 = function (str) {
        var z = str;
        var c = RegExp("^\d+", z);
        var res = Number(c);
        z = z.slice(0, c.toString().length);
        while (z.length !== 0) {
            var t = z[0];
            z = z.slice(0, 1);
            var numb = RegExp("^\d+", z).toString();
            if (t === "/") {
                res /= Number(numb);
            }
            else {
                res *= Number(numb);
                z = z.slice(0, numb.length);
            }
        }
        return res;
    };
    Parser.prototype.SubFunc3 = function (str) {
        var res = 1;
        for (var _i = 0, _a = str.split("*"); _i < _a.length; _i++) {
            var t = _a[_i];
            res *= Number(t);
        }
        return res;
    };
    return Parser;
}());
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map