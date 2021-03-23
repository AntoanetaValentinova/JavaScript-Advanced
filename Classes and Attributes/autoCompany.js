function solve (arr) {
    let result=[]
    class Brand {
        constructor (brand) {
            this.brand=brand;
            this.models=[];
        }
    }

    class Model {
        constructor (model,producedCars) {
            this.model=model;
            this.producedCars=producedCars;
        }

        get producedCars() {
                return this._producedCars;
        }
        set producedCars(value) {
            this._producedCars=value;
        }

        get model() {
            return this._model;
    }
        set model(value) {
        this._model=value;
    }
    }

    arr.forEach(e=> {
        let tokens=e.split(' | ');
        let carBrand=tokens[0];
        let carModel=tokens[1];
        let carsProduced=Number(tokens[2]);

        let existingBrand=result.find(b=>b.brand===carBrand);
        if (existingBrand===undefined) {
            let newBrand= new Brand(carBrand);
            let newModel=new Model(carModel,carsProduced);
            newBrand.models.push(newModel);
            result.push(newBrand);
        } else {
            existingModel=existingBrand.models.find(m=>m.model===carModel);
            if (existingModel===undefined) {
                let newModel=new Model(carModel,carsProduced);
                existingBrand.models.push(newModel);
            } else {
                existingModel.producedCars+=carsProduced;
            }
        }
    })
    result.forEach(b=>{
        console.log(`${b.brand}`);
        b.models.forEach(m=>console.log(`###${m._model} -> ${m._producedCars}`))
    })
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])