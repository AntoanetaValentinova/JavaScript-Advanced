function solve (num,str1,str2,str3,str4,str5) {
    let number=Number(num);
    let arr =[str1,str2,str3,str4,str5];
    for (let index = 0; index < arr.length; index++) {
      let command=arr[index];
      switch (command) {
          case 'chop': number/=2; break;
          case 'dice': number=Math.sqrt(number); break;
          case 'spice': number+=1; break;
          case 'bake': number=number*3; break;
          case 'fillet': number=number*0.80; break;
      }
      console.log(number);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');