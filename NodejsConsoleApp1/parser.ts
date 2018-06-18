export class Parser {
    input: string;
    
    constructor(inputLine: string) {
        this.input = inputLine;
    }
    getResult(): any {
        return this.Calculation(this.input);
    }

    private Calculation(input: string): number | string {
        if (input.length === 0) {
            return "Empty string";
        }
        let list: number[] = [0];
        let plus = input.split("+");
        for (let i of plus) {
            if (!isNaN(Number(i))) {
                list.push(Number(i)); continue;

            }
            if (i.indexOf("-") > 0) {
                let d = i.split("-");
                for (let a of d) {
                    let v = d.indexOf(a) === 0 ? 1 : -1;
                    if (!isNaN(Number(i))) {
                        list.push(Number(i));
                    } if (a.indexOf("/") > 0) {
                        let y = a.indexOf("*") > 0 ? this.SubFunc2(a) * v: this.SubFunc1(a) * v;
                        list.push(Number(y));
                    } else if (a.indexOf("*") > 0) {
                        list.push(this.SubFunc3(a) * v);
                    }
                }
            } else {
                if (i.indexOf("/") > 0) {
                    let y = i.indexOf("*") > 0 ? this.SubFunc2(i) : this.SubFunc1(i);
                    list.push(Number(y));
                } else if (i.indexOf("*") > 0) {
                    list.push(this.SubFunc3(i));
                }
            }
        }
        let res = 0;
        for (let t of list) {
            res += Number(t);
        }
        return res;
    }

    private SubFunc1(str: string): number {
        let r1 = str.split("/");
        let res = Number(r1[0]);
        for (let z = 1; z < r1.length; z++) {
            res /= Number(r1[z]);
        } return res;
    }

    private SubFunc2(str: string): number {
        let z = str;
        let c = RegExp("^\d+", z);
        let res = Number(c);
        z = z.slice(0, c.toString().length);
        while (z.length !== 0) {
            let t = z[0];
            z = z.slice(0, 1);
            let numb = RegExp("^\d+", z).toString();
            if (t === "/") {
                res /= Number(numb);
            }
            else {
                res *= Number(numb);
                z = z.slice(0, numb.length);
            }
        } return res;
    }

    private SubFunc3(str: string): number {
        let res = 1;
        for (let t of str.split("*")) {
            res *= Number(t);
        }
        return res;
    }
}