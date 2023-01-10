function perm(arr) {
    let result =[];
    if (arr.length === 1) return [arr];

    arr.forEach(letter => {
        let tmp = perm(arr.filter(_l => _l !== letter));
        tmp = tmp.map(_set => [letter, ..._set]);
        result = [...result, ...tmp];
    });
    return result;
}
console.log(perm(['a', 'b', 'c']));
