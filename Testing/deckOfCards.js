function solve(arr) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }
    let result = [];
    arr.forEach(e => {
        let face = e.substring(0, e.length - 1);
        let suit = e.slice(-1);
        try {
            if (!faces.includes(face)) {
                throw new Error('Error');
            }
            if (!Object.keys(suits).includes(suit)) {
                throw new Error('Error');
            }
        } catch (er) {
            console.log(`Invalid card: ${e}`);
        }
        result.push(`${face}${suits[suit]}`);
    })


    console.log(result.join(" "));
}

console.log(solve(['5S', '3D', 'QD', '1C']));