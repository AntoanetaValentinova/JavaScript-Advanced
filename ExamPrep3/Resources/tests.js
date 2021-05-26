let { Repository } = require("./solution.js");
let { assert } = require('chai');

describe("Tests …", function () {
    it("initialize", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        assert.deepEqual(repository.props, properties);
        assert.deepEqual(repository.data, new Map());
    });
    it("initialize", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository();
        assert.equal(repository.props, undefined);
  
    });


    it("nextId", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let result=repository.nextId();
        assert.equal(result, 0);
        let result2=repository.nextId();
        assert.equal(result2, 1);
        // assert.deepEqual(repository.nextId, 1);
    });
    it("add with valid object", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let result = repository.add(entity);
        assert.equal(result, 0);
        assert.deepEqual(entity, repository.data.get(0));
    });
    it("add with empty object", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            
        };
        assert.throws(() => repository.add(entity), `Property name is missing from the entity!`);
    });
    it("add with wrong object", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            namename: "string",
            ageage: 1,
            birthdayage: new Date(2000, 11, 07)
        };
        assert.throws(() => repository.add(entity), `Property name is missing from the entity!`);
    });
    it("add with empty object", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            namename: 1,
            ageage: 1,
            birthdayage: new Date(2000, 11, 07)
        };
        assert.throws(() => repository.add(entity), `Property name is missing from the entity!`);
    });
    
    it("add with 2 valid objects", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        assert.equal(result, 0);
        assert.equal(result2, 1);
        assert.deepEqual(entity, repository.data.get(0));
        assert.deepEqual(entity2, repository.data.get(1));
    });
   
    it("add with invalid param", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: 1,
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        assert.throws(() => repository.add(entity),TypeError, 'Property name is not of correct type!');
    });
    it("add with invalid param2", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            ageage: 22,
            birthday: new Date(1998, 0, 7)
        };
        assert.throws(() => repository.add(entity), `Property age is missing from the entity!`);
    });
    it("getcount with 2 objects", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        assert.equal(repository.count, 2);
    });
    it("getcount with 0 objects", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        assert.equal(repository.count, 0);
    });
    it("getID with 3 objects", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        let result3 = repository.add(entity3);
        assert.deepEqual(repository.getId(1), entity2);
    });
    
    it("getID with 3 objects", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        let result3 = repository.add(entity3);
        assert.deepEqual(repository.getId(2), entity3);
    });
    it("getID with 0 objects", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository=new Repository(properties);
        assert.throws(()=>repository.getId(1),`Entity with id: 1 does not exist!`)
    });
    it("getID with non existing id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository=new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        let result3 = repository.add(entity3);
        assert.throws(()=>repository.getId(3),`Entity with id: 3 does not exist!`)
    });
    
    it("getID with non existing id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository=new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        let result3 = repository.add(entity3);
        assert.throws(()=>repository.getId(10),`Entity with id: 10 does not exist!`)
    });
    it("update with valid object and id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        repository.update(1,entity3)
        assert.deepEqual(repository.getId(1), entity3);
    });
    it("update twice with valid object and id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        repository.update(1,entity3)
        repository.update(1,entity)
        assert.deepEqual(repository.getId(1), entity);
    });
    it("update with valid object and invalid id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        assert.throw(()=>repository.update(2,entity3),`Entity with id: 2 does not exist!`)
    });
    it("update with invalid object and valid id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: "26",
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        assert.throw(()=>repository.update(1,entity3),TypeError,`Property age is not of correct type!`)
    });
    it("update with invalid object and valid id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            ageage: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        assert.throw(()=>repository.update(1,entity3),`Property age is missing from the entity!`)
    });
    it("del invalid id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        let result3 = repository.add(entity3);
        assert.throw(()=>repository.del(3),`Entity with id: 3 does not exist!`)
    });
    it("del valid id", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 26,
            birthday: new Date(2000, 0, 7)
        };
        let entity3 = {
            name: "Peter",
            age: 26,
            birthday: new Date(1876, 0, 7)
        };
        let result = repository.add(entity);
        let result2 = repository.add(entity2);
        let result3 = repository.add(entity3);
        repository.del(2);
        assert.equal(repository.count,2);
    });
    it("_validate", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        let repository = new Repository(properties);
        let entity = {
            name: 1,
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            agename: 26,
            birthday: new Date(2000, 0, 7)
        };
        
        assert.throw(()=>repository._validate(entity2),`Property age is missing from the entity!`)
        assert.throw(()=>repository._validate(entity),TypeError,`Property name is not of correct type!`)
    });
});
