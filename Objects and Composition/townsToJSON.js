function solve (arr) {
    let result=[];
    
    for (let i = 1; i < arr.length; i++) {
        let [Town,Latitude,Longitude]=arr[i].slice(2,arr[i].length-2).split(' | ');
        Latitude=Number(Number(Latitude).toFixed(2));
        Longitude=Number(Number(Longitude).toFixed(2));
        result.push({Town,Latitude,Longitude});
    }

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']))