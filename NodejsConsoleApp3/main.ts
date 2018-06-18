function plus(target: Object, propertyKey: string) {
    let value = this[propertyKey];

    var gV = function () {
        value = value + 1;
        return val;
    }

    var sV = function (val: Number) {
        console.log(`Введенное значение: ${val}`);
        value = val;
    }

    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: gV,
            set: sV
        });
    }
}

class Val {
    @plus
    value: Number;

    Value(value: Number) {
        this.value = value;
    }
}

let val: Val = new Val()
val.Value(10);

let num: Number = val.value;
console.log(`Значение после геттера: ${num}`);

val.value = 50;