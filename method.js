const student = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'bangla', 'calculus'],
    bestFriend: {
        name: 'Kundu',
        major: 'mathematics'
    },
    takeExam: function() {
        console.log(this.name, 'taking exam');
    },
    treatDey: function(expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}
student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);