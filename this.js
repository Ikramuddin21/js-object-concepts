// console.log(this);
const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function() {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function(expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log('this5555', this);
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
function add() {
    console.log(this);
}