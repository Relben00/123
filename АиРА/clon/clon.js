let obj = {
    id: 59761,
    age: 35,
    name: "Кошмар Кошмаров",
    gender: "male",
    address: {
        city: "Кунгур",
        street: "Ленина",
        building: {
            home: 2,
            apartment: 21,
        },
    },
    isActive: true,
    company: "CEDWARD",
    email: "koshma@cedward.com",
    phone: "+8 (890) 543-2508",
};

// копирование
function restore(o) {
    if (!o || typeof o != "object") return o;
    var r = o instanceof Array ? [] : {};
    for (var i in o) if (o.hasOwnProperty(i)) r[i] = restore(o[i]);
    return r;
}
let obj2 = restore(obj);
