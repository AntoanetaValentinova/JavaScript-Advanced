function solve(input) {
    let output='';
    for (let index = 0; index < input.length; index+=2) {
      output=output+input[index]+' ';
    }

    return output;
}

console.log(solve(['20', '30', '40', '50', '60']));