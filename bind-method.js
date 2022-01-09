const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function(expense) {
        this.money = this.money - expense;
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

kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(600);
heroTreatDey(400);
kibria.treatDey(400);
const normalTreatDey = kibria.treatDey.bind(normalAlam);
normalTreatDey(3000);