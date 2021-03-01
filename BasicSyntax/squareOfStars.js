function square (number) {
    if (number>0) {
    for (let index = 0; index < number; index++) {
        console.log('*'.repeat(number));
    }} else {
        for (let index = 0; index < 5; index++) {
            console.log('* '.repeat(5));            
        }
    }
}



square();
square(1);
square(2);
square(5);