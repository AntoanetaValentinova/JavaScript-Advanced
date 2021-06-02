function solve (order) {
    const newModel={
        model: order.model,
      };
    
    const storage ={
        pickEngine (wantedPower) {
            newModel['engine']={};
            let power=0;
            let volume=0;
            if (wantedPower<=90) {
                    power= 90;
                    volume= 1800 ;
            } else if (wantedPower<=120) {
                power= 120;
                volume= 2400 ;
            } else if (wantedPower<=200) {
                power= 200;
                volume= 3500 ;
            }
            newModel.engine['power']=power;
            newModel.engine['volume']=volume;
        },
        pickCarriage(wantedCarriage,wantedColor) {
            newModel['carriage']={
                type: wantedCarriage,
                color: wantedColor
            }
        },
        pickWheels(wantedNumber) {
            if (wantedNumber%2==0) {
                wantedNumber-=1;
            }
            newModel['wheels']=[wantedNumber,wantedNumber,wantedNumber,wantedNumber];
        }
    }

    storage.pickEngine(order.power)
    storage.pickCarriage(order.carriage,order.color)
    storage.pickWheels(order.wheelsize)

    return newModel;
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));
console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));