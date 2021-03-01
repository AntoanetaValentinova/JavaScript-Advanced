function solve(steps,footprintM,speedKmH) {
    const speedMS=speedKmH*1000/3600;
    const distanceToUniversity=steps*footprintM;
    const rests=Math.floor(distanceToUniversity/500)*60;
    const timeInSeconds=(distanceToUniversity/speedMS)+rests;

    const hours=Math.floor(timeInSeconds/3600).toFixed(0).padStart(2,"0");
    const minutes=Math.floor((timeInSeconds-hours*3600)/60).toFixed(0).padStart(2,"0");
    const seconds=(timeInSeconds-(hours*3600)-(minutes*60)).toFixed(0).padStart(2,"0");

    return `${hours}:${minutes}:${seconds}`;

}

console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));