
const userW = {name: 'Caterina'}
const userP = {name: 'Caterina'}
const user3 = userW;

console.log(userW === userP);
console.log(userW === user3);

const userL = {
    name: 'Caterina',
     age: 23
    };
const userB = userL;
userP.name = 'Vladimir';
console.log(userW.name);



const person = {
    name: 'Caterina',
    age: 23,
    town: 'Moscow',
    contry: 'Russia'
}

const name1 = person.name;
const age1 = person.age;
const city1 = person.town;

const {name: userName, age, town, ...info } = person;

console.log(userName, age, town);
console.log(info);

function greet({name, age, town}) { 
    console.log(`Меня зовут ${name}, мне ${age} лет и я живу в городе ${town}`)
}
function greet2(person) {
    console.log(` Меня зовут ${person.name}, мне ${person.age} лет и я живу в городе ${person.town}`)
}
greet(person);
greet2(person);

const job = {
    position: 'Frontend developer',
    career: 'Junior'
}

const profile = {...person, ...job}
console.log(profile);

const updateProfile = {...profile, age: 24, town: 'Saint-Petersburg'}
console.log(updateProfile);

const numbers = [1, 2, 5, 6, 9,]
const evenNumbers = numbers.filter((number) => {
    return number % 2 !==0; 
})

const addNumber = numbers.find ((number) => {
    return number % 2 !==0 && number > 5
})
console.log(addNumber)

const oldNumberx = {
    name: 'Caterina',
    age: 34,
    work: 'Frontend developer'
}
const person2 = new Object();
person2.name = 'Cate';
person2.age = 24;
person2.work = 'Frontend Developer'
person2.town = 'Moscow'
console.log(person2);

const person3 = {
    name: 'Billy',
    age: 34,
    work: 'lawyer'
}
console.log(person3)
person3.town = 'rime'
console.log(person3)

function pushValue(obj,key) {
    if (key in obj) {
        console.log()
    }
}person3.town = 'Moscow'
console.log(person3)