class Exam {
    _arr = []; // исходный массив объектов из файла
    _tmp = []; // его клон для хранения временных результатов
    constructor(clients, field) {
        this._arr = require('./clients.json'); // исходный массив объектов
        this._tmp = this.restore(this._arr); // клонирование _arr в _tmp
    }
    restore = (o) => {
        // тут сделать глубокое клонирование рекурсией
        if (!o || typeof o != "object") return o;
        var r = o instanceof Array ? [] : {};
        for (var i in o) if (o.hasOwnProperty(i)) r[i] = this.restore(o[i]);
        return r;
    };
    select = (...fields) => {
        // выбрать из объектов в массиве только определённые поля
        this._tmp = JSON.parse(JSON.stringify(this._arr, fields));
        return this._tmp;
    };
    orderBy = (fields, directs) => {
        // тут добавить рекурсивный метод сортировки
        // по полям и направлениям
        const comparator = (a, b, fields, directs) => {

            let n = fields.length;
            let f = fields[0];
            let d = directs[0] === 'asc'? +1: -1;
            if ((n===1) || (a[f] !== b[f])) {
            return d * (a[f] > b[f]? +1: -1);
            }
            else {
            return comparator(a, b, fields.slice(1,), directs.slice(1,));
            }
            }
            
            const orderBy = (fields, directs) => {
            return arr.sort((a,b) => comparator (a, b, fields, directs));
            }
            let arr = require('./clients.json');
            let arr_s = orderBy(["gender", "age", "name"],["asc", "asc", "asc"]);
            for (let obj of arr_s) {
            console.log(obj);
            }
    };
    insert = (obj) => {
        // добавляем объект
        this._arr.push(obj);
    };
    update = (index, newObj) => {
        // меняем объект
        this._arr[index] = newObj;
    };
    delete = (index) => {
        // удаляем объект
        this._arr.splice(index, 1);
    };
}

module.exports = {
    Exam,
};

// для проверки
//let exam = new Exam("./clients.json"); 
 //console.log("Hello world");
 //exam.insert({ id: "59771", name: "name" });
 //exam.update(10, { id: "59771", name: "name2" });
 //exam.delete(9);
 //console.log(exam._arr);
 //console.log(exam.orderBy("address.street", "ASC"));
