function solve (...arg) {
    let types= {

    }
arg.forEach(e=>{
    console.log(`${typeof(e)}: ${e}`);
    if (types[typeof(e)]) {
        types[typeof(e)]+=1;
    } else {
        types[typeof(e)]=1;
    }
})

Object.keys(types).sort((a, b) => types[b] - types[a]).forEach(k => console.log(`${k} = ${types[k]}`))
}

console.log(solve('cat', 42, function () { console.log('Hello world!'); }));