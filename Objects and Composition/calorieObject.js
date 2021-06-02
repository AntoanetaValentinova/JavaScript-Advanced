function solve (array) {
    const outputObj={};
    for (let i = 0; i < array.length; i+=2) {
     const fruit=array[i];
     const calories=Number(array[i+1]);
     outputObj[fruit]=calories;
    }

    return outputObj;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));