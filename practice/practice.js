// 1.
const john = {
    id: 500,
    name: 'John Khan',
    dailyRoutine: ['namaj pora', 'study', 'cricket khela', 'cinema dekha'],
    eatList: {
        morning: 'kacci',
        afternoon: 'muri',
        evening: 'pasta'
    },
    hisHabit: function() {
        // const habit = this.dailyRoutine[0];
        // console.log('name:', this.name, 'nasta:', this.eatList.morning );
        for(const habit of this.dailyRoutine) {
            // console.log(habit);
        }
    }
}
john.hisHabit();

// 2.
const johnAbout = `
    Name: ${john.name}, Play: ${john.dailyRoutine[1]}, Breakfast: ${john.eatList.morning}
    John Khan is a Web Developer.
`;
// console.log(johnAbout);

// 3.1
const prioNumber = () => 89;
// console.log(prioNumber());

// 3.2
const division = num => num / 7;
// console.log(division(49));

// 3.3
const addition = (num1, num2) => (num1 + num2) / 2;
// console.log(addition(60, 40));

// 3.4
const addition2 = (num1, num2) => {
    const add1 = num1 + 7;
    const add2 = num2 + 7;
    const result = add1 + add2;
    return result;
}
// console.log(addition2(13, 33));

// 4.
const numArr = [14, 21, 42, 56, 98, 34];
const arrayMap = numArr.map(num => num / 7);
// console.log(arrayMap);

// 5. 
/* 
    map: ekta array er upor map calale array theke 1ta 1ta element niye kangkhito kajti kore output arekta array dibe.

    forEach: forEach holo map er moto, tobe etate kichu return kore na.

    filter: filter hocche kono ekta array er moddhe sorto dile je je element gula sorto philap korbe tader ke niye arekta array dibe.

    find: find hocche filter er moto, tobe find sudhumatro match hoya 1st element ke dibe.
*/

// 6.
const student = {
    id: 103,
    name: 'Sakib Khan',
    subject: 'CSE',
    address: 'New York City, United Stats'
}
const {name, address} = student;
// console.log(name, address);

const num = [101, 'John', 8999];
// const balance = num[2];
// const [id, name2, balance] = [1010, 'Rajjak', 100000];
const [id, name2, balance] = [num[0], num[1], num[2]];
// console.log(balance, name2);

// 7.
const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
loadPhotos();
const displayPhotos = (data) => {
    // console.log(data);
    const photosContainer = document.getElementById('photos');
    data.forEach(photo => {
        const {id, url, title} = photo;
        const div = document.createElement('div');
        div.classList.add('photo');
        div.innerHTML = `
            <img src="${url}" onclick="photoDetail(${id})" />
            <h2>${title}</h2>
        `;
        photosContainer.appendChild(div);
    })
}
const photoDetail = async (photoId) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${photoId}`;
    const res = await fetch(url);
    const data = await res.json();
    photoDetailDisplay(data);
}
function photoDetailDisplay(singlePhoto) {
    // console.log(singlePhoto);
    const {title, url, thumbnailUrl} = singlePhoto;
    const photoDetailDiv = document.getElementById('photo-detail');
    photoDetailDiv.textContent = '';
    const div = document.createElement('div');
    div.style.textAlign = 'center';
    div.innerHTML = `
        <img src="${url}" width="300px">
        <img src="${thumbnailUrl}" width="300px">
        <h1>${title}</h1>
    `;
    photoDetailDiv.appendChild(div);
}