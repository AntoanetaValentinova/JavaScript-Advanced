function factory(library, orders) {
    const newArr = [];
    let length=orders.length;
    for (let i = 0; i < length; i++) {
        const newObj={};
        let currentOrder=orders[i];
        let name=currentOrder.template.name;
        newObj['name']=name;
        const functions=currentOrder.parts;
        for (let p = 0; p < functions.length; p++) {
            const currentFunction=functions[p];
            newObj[currentFunction]=library[currentFunction];
        }
        newArr.push(newObj);
    }
    return newArr;
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    },
  ];
  const products = factory(library, orders);
  console.log(products);
  