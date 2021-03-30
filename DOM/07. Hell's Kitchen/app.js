function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   
    function onClick () {
      let restorants=JSON.parse(document.querySelector('#inputs textarea').value);
      let restorantsObjects=[];
      for (let i = 0; i < restorants.length; i++) {
         let currentRest={};
         let name=restorants[i].split(' - ')[0];
         currentRest.name=name;
         currentRest.workers=[];
         let workers=restorants[i].split(' - ')[1];
         let workersArr=workers.split(', ');
         let avgSalary=0;
         for (let w = 0; w < workersArr.length; w++) {
            let currentWorker=workersArr[w];
            let nameWorker=currentWorker.split(' ')[0];
            let salary=Number(currentWorker.split(' ')[1]);
            avgSalary+=salary;
            currentRest.workers.push({nameWorker,salary})
         }
         currentRest.avgSalary=avgSalary/workersArr.length;
         currentRest.workers.sort((a,b)=>b.salary-a.salary);
         currentRest.bestSasary=currentRest.workers[0].salary;
         let isItFound=false;
         for (let i = 0; i < restorantsObjects.length; i++) {
            if (restorantsObjects[i].name === name) {
               restorantsObjects[i].workers=restorantsObjects[i].workers.concat(currentRest.workers);
               let newAvgSalary=0;
               restorantsObjects[i].workers.forEach(w=>newAvgSalary+=w.salary);
               restorantsObjects[i].avgSalary=newAvgSalary/restorantsObjects[i].workers.length;
               restorantsObjects[i].bestSasary=Math.max(restorantsObjects[i].bestSasary,currentRest.bestSasary);
               restorantsObjects[i].workers.sort((a,b)=>b.salary-a.salary);
               isItFound=true;
               break;
            } 
         }
         if(!isItFound) {
            restorantsObjects.push(currentRest);
         }
      }
      let bestRestorant=restorantsObjects.sort((a,b)=>b.avgSalary-a.avgSalary)[0];
      
      let outputWorkers='';
      bestRestorant.workers.forEach(w=>outputWorkers+=`Name: ${w.nameWorker} With Salary: ${w.salary} `);
      document.querySelector('#bestRestaurant p').textContent=`Name: ${bestRestorant.name} Average Salary: ${bestRestorant.avgSalary.toFixed(2)} Best Salary: ${bestRestorant.bestSasary.toFixed(2)}`;
      document.querySelector('#workers p').textContent=outputWorkers;
   }
}
