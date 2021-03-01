function solve (speed,area) {
let limit=0;
switch (area) {
    case'motorway': limit=130; break;
    case'interstate': limit=90; break;
    case'city': limit=50; break;
    case'residential': limit=20; break;
}
const speeding=speed-limit;
let message="";
if (speeding<=0) {
    message= `Driving ${speed} km/h in a ${limit} zone`;
} else if (speeding>0&&speeding<=20) {
    message=`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - speeding`;
} else if (speeding>20&&speeding<=40) {
    message=`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - excessive speeding`;
} else {
    message=`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - reckless driving`;
}
return message;
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));