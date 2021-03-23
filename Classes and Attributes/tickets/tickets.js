let Ticket=require('./Ticket');

function solve (arr,sortingCriteria ) {
    
    let result=[];
    arr.forEach(ticket=> {
        let tokens=ticket.split('|');
        result.push(new Ticket(tokens[0],Number(tokens[1]),tokens[2]))
    })

    if (sortingCriteria==='destination') {
        result.sort((t1,t2)=>t1.destination.localeCompare(t2.destination))
    } else if (sortingCriteria==='price') {
        result.sort((t1,t2)=>t1.price-t2.price)
    } else if (sortingCriteria==='status') {
        result.sort((t1,t2)=>t1.status.localeCompare(t2.status))
    }

    return result;
}

console.log(solve(['Philadelphia|94.20|available','New York City|95.99|available','New York City|95.99|sold','Boston|126.20|departed'],
'destination'))