class GuessingGame {
    constructor() {
        var left;
        var right;
        var mid;
    }

    setRange(min, max) {
        this.left = min ;
        this.right = max;
    }

    guess() {

        this.mid = Math.ceil((this.left + this.right)/2);
        return this.mid;

    }

    lower() {
        this.right = this.mid;
    }

    greater() {
        this.left = this.mid;
    }
}

module.exports = GuessingGame;
