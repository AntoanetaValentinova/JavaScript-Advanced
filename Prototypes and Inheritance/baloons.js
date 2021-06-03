function solve () {
    class Balloon {
        constructor(color,gasWeight) {
            this.color=color;
            this.gasWeight=gasWeight;
        }
    }

    class PartyBalloon extends Balloon{
        constructor (color,gasWeight,ribbonColor,ribbonLength) {
            super(color,gasWeight);
            this.ribbon=[ribbonColor,ribbonLength]
        }

        get ribbon () {
            return this._ribbon;
        }

        set ribbon (input) {
            this._ribbon={
                color: input[0],
                length: input[1]
            }
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor (color,gasWeight,ribbonColor,ribbonLength,text) {
            super(color,gasWeight,ribbonColor,ribbonLength);
            this.text=text;
        }

        get text () {
            return this._text;
        }

        set text (value) {
            this._text=value;
        }
    }

    return {
        Balloon:Balloon,
        PartyBalloon:PartyBalloon,
        BirthdayBalloon:BirthdayBalloon
    }
}
let result=solve();

let test = new result.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
let ribbon = test.ribbon;