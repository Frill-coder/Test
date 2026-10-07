const card = document.querySelector(".card");
const cards = document.querySelectorAll(".card");
const title = document.getElementById("catalog__title");
const price = document.getElementsByClassName("card__price");
// console.log(card);
// console.log(cards);
// console.log(title);
// console.log(price);
const button = document.getElementById("buy-button");
button.addEventListener("click", function () {
  // console.log("Get it");
});
title.style.color = "red";
title.style.fontSize = "24px";
title.style.backgroundColor = "yellow";
cards.forEach(function (card) {
  card.style.color = "blue";
});
button.classList.add("button--active");
button.classList.remove("button--active");
button.classList.toggle("button--active");

button.addEventListener("click", function () {
  if ((answer = confirm())) {
    window.open("https://www.google.com");
  }
});
// alert('price')
title.addEventListener("mouseover", function () {
  // console.log("you did it");
});
const colorChangeButton = document.getElementById("color-button");
colorChangeButton.addEventListener("click", function () {
  colorChangeButton.classList.toggle("button--active");
});
// console.log(!!5 !== 10);

const error = document.querySelector("card"); //error for name card => .card
if (error === undefined) { //почему не выдаётошибку с ===, а == выдает, ведь в поиске селектора ошибка
    // console.log("error");
} else {
  // console.log("good")
}

const  score = 80;
if (score >= 69) {
  // console.log('is')
}  else {
  // console.log('is not')
}

const isOnline = true;

if (isOnline) {
  // console.log('Пользователь онлайн');
} else {
  // console.log('Пользователь офлайн');
}

const hasTicket = false;

if (hasTicket) {
  // console.log('Можно войти');
} else {
  // console.log('Билета нет');
}

const age = 15;

if (age >= 18) {
  // console.log('Можно войти');
} else {
  // console.log('Можно выйти');
}

const age1 = 18;

if (age1 >= 18) {
  // console.log('Можно');
}
const age2 = 18;

if (age2 === 18) {
  // console.log('Возраст 18');
}

let number = 5;

number = number + 2;

if (number > 6) {
  // console.log('A');
} else {
  // console.log('B');
}

let score1 = 10;

score1 = score1 + 5;

if (score1 >= 15) {
  // console.log('Успех');
} else {
  // console.log('Попробуй ещё');
}

const price1 = 1000;

if (price1 > 500) {
  // console.log('Дорого');
} else {
  // console.log('Недорого');
}

const user = {
  name: "Tre",
  age: 200,
  city: "Omsk"
}
 const product0 = {
  name: "Milf",
  price: 3777,
  isAvailable: true
 } 
 const userConsole = {
 name: 'Amina',
 age: 20,
 city: 'Astana'
};
console.log(userConsole.name)
userConsole.age = 21;
console.log(userConsole.age)

userConsole.isStudent = true;
userConsole.country = 'Kazakhstan';
console.log(userConsole);

const product = {
 name: 'Phone',
 price: 300000,
 color: 'black'
};
console.log(`${product.name} стоит ${product.price}`)
product.price = 250000;
Reflect.deleteProperty(product, 'color')
// delete product.color;
const {color, ...newProduct} = product;
console.log(newProduct)
console.log(product)

const student = {
 name: 'Dana',
 score: 80
};
if (student.score >= 60) {
  console.log("+")
} else {
  console.log("-")
}

if (userConsole.age >= 18) {
  console.log('Доступ разрешён')
} else {
  console.log('Доступ запрещён')
}

const book = {
  title: "REst", 
  author: "Nabokov", 
  pages: 32
}
console.log(book.title);
console.log(book.author);
console.log(book.pages);

const car = {
 brand: 'Toyota',
 year: 2020
};
car.year = 2022;
car.color = 'white';
console.log(car);


// 
const fruits = [ "pineapple", "banana", "apple"];
const num = [10, 20, 30, 40];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits)

const colors = ['red', 'green', 'blue'];
console.log(colors[1]);

const animals = ['cat', 'dog', 'rabbit'];
animals[1] = "fox";
animals.push("horse");
console.log(animals)
animals.pop();
console.log(animals)
console.log(animals[animals.length - 1])
animals.shift();
console.log(animals);
animals.unshift("lion");
console.log(animals);
const animals0 = ['rabbit', 'horse', 'fish', 'monkey', 'dolphy']
animals0.push('chicken')
animals0.pop()
animals0.shift()
animals0.unshift('chicken')
console.log(animals0)

// 

const users = [
  { name: "Ann", age: 34},
  { name: "ben", age: 22}
]
users.forEach(user => console.log(user.name))
console.log(users[0].name);
// без квадратных скобок нельзя? не поймет?
// то есть это отличие между массивом и объектом?
console.log(users[1].age);
console.log(users)
  // чтобы вывести значение объекта из массива можно лишь воспользоваться функцией? или это один из вариантов решения?
// 
const products = [
 { name: 'Phone', price: 300000 },
 { name: 'Laptop', price: 500000 },
 { name: 'Tablet', price: 200000 }
];
console.log(products[products.length - 1].name)
console.log(products[1].price)
products[0].price = 24444;
console.log(products[0].price);
products[2].name = 'Mak';
console.log(products[2])

// 
animals.forEach(elem => console.log(elem))
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
const names = ['Amina', 'Dana', 'Aruzhan'];
names.forEach(nm => console.log(`Привет, ${nm}`))
numbers.forEach(num => console.log(num * 2));
const colors1 = ['red', 'green', 'blue'];
colors.forEach((colo, index) => console.log(colo, index));

numbers.forEach((num, index) => {
  if (index > 2) {
    console.log(num, index)
  }
})
numbers.forEach((num, index) => console.log(num, index > 2));
products.forEach(name => console.log(name.name));
products.forEach((names) => console.log(`${names.name} - ${names.price}`));
// 6 
const numbers1 = [1, 5, 10, 12, 15, 16, 20, 34];
numbers1.forEach(num => {
  if (num > 10) { 
  console.log(num)
}})

numbers1.forEach(num => {
  if (num >=18) {
    console.log('Совершеннолетний')
  } else {
    console.log('Несовершеннолетний')
  }
})

products.forEach(elem => {
  if (elem.price > 100000) {
    console.log(elem.price)
  }
})

const cards1 = ['card1', 'card2', 'card3', 'card4'];
cards1.forEach((card, index) => {
  if (index <= 1) {
    console.log(card)
  }
})
// 
function sayHelloy(greet)  {
  console.log(greet)
}
sayHelloy('Hello');
function showName(name) {
  console.log(name);
}
showName('Milana');

function sum(a, b) {
  let ver = a + b;
  console.log(ver)
}
sum(2, 3);

function multiply(c, d) {
  return c * d;
}
const result = multiply(7, 1);
console.log(result);

function checkAge(age) {
  if (age >= 18) {
    console.log('Можно войти' )
  }
}
checkAge(34);

function greet(name) {
 console.log(`Привет, ${name}`);
}
greet('Vera');
greet('Ben');
greet('Ella');

// 
function showNumber(num) {
  console.log(`Число: ${num}`);
}
numbers.forEach(showNumber);

numbers.forEach(element => {
  console.log(element);
});

numbers.forEach(function(elem) {
  console.log(elem);
})

numbers.forEach((num) => {
  console.log(`Число: ${num}`);
})

function greet(name) {
  console.log(`Привет, ${name}`);
}
names.forEach(greet);

const numbers10 = [10, 20, 30];
// 


// const title = document.getElementById("catalog__title");
// console.log(title);
function showError(error) {
  console.log(error);
}
showError(title)

const titleD = document.getElementById("catalog__title");
console.log(titleD);

const button12 = document.getElementById("button");
console.log(button12);

const text1 = document.querySelector(".text");
console.log(text1.textContent);

const allText = document.getElementsByClassName("text");
console.log(allText); 
// строго элемент с определенным классом
const allCard = document.querySelectorAll('[class ="card"]');
const allAllCard = document.querySelectorAll('.card')
allCard.forEach(card => {
  console.log(card.textContent);
})
allCard.forEach(card => {
  card.classList.add(".active");
})
console.log(allCard)

function changIndex(card, index) {
  if (index <=1) {
    card.classList.add('first')
  } else {
    card.classList.add('second')
  }
}
allCard.forEach(changIndex);

function classAdd(elem, index) {
  if (index <= 5) {
    elem.classList.add('reee');
  } else {
    elem.classList.add('feeeee');
  }
}

allAllCard.forEach(classAdd);
console.log(allAllCard);

const numbers9 = [1, 2, 3];
numbers9.forEach((number) => {
 console.log(number);
});

// 
const productText = document.querySelectorAll('[class="product"]');
function addClassProduct(elem, index) {
  if (index <= 2) {
    elem.classList.add('product--first');
  } else {
    elem.classList.add('product--second');
  }
}
productText.forEach(addClassProduct);
console.log(productText);

//  
const productsShow = [
 { name: 'Phone', price: 300000 },
 { name: 'Laptop', price: 500000 },
 { name: 'Mouse', price: 15000 }
];
productsShow.forEach((elem) => {
  if (elem.price > 100000) {
    elem.comm = "Дорогой товар"
  } else {
   elem.comm = "Бюджетный товар" 
  }
  console.log(elem.name, elem.price, elem.comm)
})