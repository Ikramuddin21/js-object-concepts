const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
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
const normalAlam = {
    id: 103,
    money: 7000,
    name: 'Normal Alam'
}
// call 
// kibria.treatDey.call(heroBalam, 1200, 50, 30);
// kibria.treatDey.call(heroBalam, 500, 40, 20);

// apply
kibria.treatDey.apply(normalAlam, [4000, 100, 50]);