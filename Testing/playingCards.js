function solve (face,suit) {
    let faces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits={
        S:'\u2660',
        H: '\u2665',
        D: '\u2666' ,
        C: '\u2663'
    }
    if (!faces.includes(face)) {
        throw new Error('Error');
    }
    if (!Object.keys(suits).includes(suit)) {
        throw new Error('Error');
    }

    return {
        face,
        suit,
        toString: function () {return `${face}${suits[suit]}`}
    }
}
let card = solve('J', 'D');

console.log(solve ('A', 'S').toString);