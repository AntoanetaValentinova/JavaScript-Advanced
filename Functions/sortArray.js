function solve (arr,sortType) {
    let sort = {
        asc: function (input) {
            return arr.sort((a,b)=>a-b);
        },
        desc: function (input) {
            return arr.sort((a,b)=>b-a);
        }
    }

    return sort[sortType](arr);

}

console.log(solve ([14, 7, 17, 6, 8], 'asc'));