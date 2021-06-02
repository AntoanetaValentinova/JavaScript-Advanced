function solve (heroesInfo) {
    let result=[];
    for (let i = 0; i < heroesInfo.length; i++) {
        let currentHero=heroesInfo[i].split(' / ');
        let [name, level, itemsInput] = currentHero;
        level=Number(level);
        let items=itemsInput? itemsInput.split(', '):[];
        result.push({name,level,items});
    }

    return JSON.stringify(result);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))
console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']))