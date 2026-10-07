const colors = ['green', 'blue', 'red'];
const names = ['Amine', 'Vera', 'Anna'];
const numbers = [1, 2, 3, 4, 5];
const products = [
{ name: 'Phone', price: 300000 , isAvailable: true},
{ name: 'Laptop', price: 500000, isAvailable: false},
{ name: 'Tablet', price: 200000, isAvailable: false},
{ name: 'Mouse', price: 15000, isAvailable: true}
];
const fruits = ['banana', 'apple', 'strawberry'];
const numbersTy = [20, 30, 40, 50];
const numbersCount = [3, 15, 7, 20, 25, 2];
const users = [
{ name: 'Amina', age: 17 },
{ name: 'Dana', age: 25 },
{ name: 'Ali', age: 16 },
{ name: 'Aruzhan', age: 19 }
];

// 1
fruits.forEach((fruit) => {
    console.log(fruit)
});
// 2
numbers.forEach((num) => {
    console.log(num * 2)
});
// 3
names.forEach(name => {
    console.log(`Привет, ${name}`)
});
// 4
numbers.forEach((num, index) => {
    console.log(num, index)
});
numbers.forEach((num, index) => {
    console.log(`${num} ${index}`)
});
// 5
colors.forEach((color, index) => {
    console.log(`${color} - ${index}`)
});
colors.forEach((color, index) => {
    console.log(color, - index)
});
// 6
numbers.forEach((num, index) => {
    if (index <= 3) {
        console.log(num);
    }
});
// 7
products.forEach((product) => {
    console.log(`${product.name} - ${product.price}`)
});
// 8
products.forEach((product) => {
    if (product.price > 10000) {
        console.log(product.name)
    }
})
products.forEach((product) => {
    if (product.price > 10000) {
        console.log(`${product.name}`)
    }
});
// 9
for(let i = 0; i <=4; i++) {
    console.log(i)
};
// 10
for(let i = 1; i <= 5; i++) {
    console.log(`${i}`)
};
// 11
// for(let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// 12

for(let i = 5; i >= 1; i -=1) {
    console.log(i)
};
// 13
for(let i = 0; i < names.length; i ++) {
    console.log(names[i]);
};
// 14
for(let i = 0; i < names.length; i ++) {
    console.log(`${i}, ${names[i]}`);
};
for(let i = 0; i < names.length; i ++) {
    console.log(i, names[i]);
};
// 15 
// это цикл складывает переменную саму с собой, выводит её и выполняет след шаг i -=1 
for(let i = 4; i >=0; i -=1) {
    let total = i + i;
    console.log(total)
}
// цикл суммы чисел
let totalSum = 0;
for(let i = 1; i <= 4; i ++) {
    totalSum = totalSum + i;
}
console.log(`Общая сумма всех чисел от 1 до 4 равна: ${totalSum}`);
// цикл суммы чисел в массиве объектов с последнего элемента
let total = 0;
for(let i = products.length - 1; i >= 0; i --) {
    total = products[i].price + total;
};
console.log(total);
// с первого элемента
let total1 = 0;
for(let i = 0; i < products.length; i ++) {
    total1 = total1 + products[i].price;
}
console.log(total1);
// сумма чисел в массиве 
let totalTy = 0;
for(let i = 0; i < numbersTy.length; i ++) {
    totalTy = totalTy + numbersTy[i];
}
console.log(totalTy);
//  с конца массива
let totalty = 0;
for(let i = numbersTy.length - 1; i  >= 0; i --) {
    totalty = totalty + numbersTy[i];
}
console.log(totalty);
// 16
let contNum = 0;
for(let i = 0; i < numbersCount.length; i ++) {
    if (numbersCount[i] >= 10) {
        contNum ++
    }
}
console.log(contNum);
// 17
for(let i = 0; i < products.length; i ++) {
    if (products[i].isAvailable === true) {
        console.log(products[i].name);
    };
};
// 18
const cards = document.querySelectorAll(".card");
for(let i = 0; i < cards.length; i ++) {
    cards[i].classList.add("active")
}
console.log(cards);
// 19
// а -forEach просто и понятно 
// б - for можно задать условие так, что в шаге перескакиваем индекс с элементом
// в - цикл, присвоим ай последний индекс (array.length - 1)  и в "шаге" действие - 1 и главное проверка, что цикл работает пока ай больше или равно нулю(а то бесконечный цикл)
// г - метод массива, просто добавить к каждому элементу класс 
// д - метод, ставим условие - если это тот элемент то сохрани его 
// 20
for(let i = 0; i < numbers.length; i ++) {
    console.log(numbers[i])
}
// 21
fruits.forEach((fruit) => {
    console.log(fruit)
})
// 23
let i = 1;
while(i <= 5 ) {
    console.log(i);
    i++;
}
// 24
let e = 5;
while(e >= 0){
    console.log(e);
    e --;
}
// 26
let count = 0;
while (count < 5) {
console.log(count);
count ++;
}
// 27
if (true) {
const nameE = 'Amina';
console.log(nameE);
}
// 28 переменная видна всем
const city = 'Astana';
if (true) {
console.log(city);
}
// 29 10 так как пересвоенная переменная внутри функции, а консолль снаружи и не видит его
let score = 10;
if (true) {
let score = 20;
}
console.log(score);
// 30 аналогично с 29
if (true) {
score = 20;
}
console.log(score);
// 31
for (let a = 0; a < 3; a++) {
console.log(a);
}
// console.log(a) выведет ошибку
// 32 когда мы создаем переменную внутри блока - она доступна только внутри этого блока, а когда изменяем внешнюю - она доступна где угодна с измененным значением
// 34
const doubledNumbers = numbers.map((num) => {
    return num * 2;
})
console.log(doubledNumbers)
// 35
const namesUsers = users.map((name) => {
    return name.name;
})
console.log(namesUsers)
// 36
const nameProducts = products.map((product) => {
    console.log(`${product.name} - ${product.price}`)
})
// 37
const numbersTen = numbers.map((num) => {
    return num + 10;
})
console.log(numbersTen)
// 38 метод создает новый массив а в этом случае этот новый массив пуст чтобы это исправить нужно их сохранять с помощбю return
const result = numbers.map((number) => {
    return number * 2;
});
console.log(result);
// 39
const numbersFilter = numbers.filter(num => num > 10);
console.log(numbersFilter)
// 40
const usersAge = users.filter((user) => {
    if (user.age >= 18) {
        return {...users}
    }
})
console.log(usersAge);
// 41
const productsAvailable = products.filter((product) => {
    if (product.isAvailable === true) {
        return {...products}
    }
})
console.log(productsAvailable);
// 42
const productsExpensive = products.filter((product) => {
    if (product.price > 100000) {
        return {...products}
    }
})
console.log(productsExpensive);
// 43 map проходит по каждому эдементу массива не изменяя его длины а filter меняет его длину
// 44
const finalBudgetOptions = numbersCount
    .filter((num) => num > 10)
    .map((num) => num * 2);
console.log(finalBudgetOptions)
// 45
const arrayProducts = products
.filter(product => {
    if (product.isAvailable === true) {
        return products;
    }
})
.map(product => product.name)
console.log(arrayProducts)
// 46
const usersOld = users
.filter((user) => user.age >=18)
.map(user => user.name)
console.log(usersOld)
// 47
numbers.forEach((number) => {
console.log(number);
});
// 48
const resultN = numbers.map((number) => {
return number * 2;
});
console.log(resultN)
// 49 обращение к переменной блочной которой не видно за ее пределами 
for (let i = 0; i < 3; i++) {
const message = 'Hello';
console.log(message);
}
// 50
for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i]);
}
// 51 создается бесконечный цикл тк условие всегда правда чтобы это исправить нужно дописать шаг i ++ 
// 52
const resultС = products.filter((product) => {
return product.isAvailable;
})
console.log(resultС);
// 53
// а
products.forEach(product => {
    console.log(product.name)
});
// б
for(let i = 0; i < products.length; i++) {
    console.log(products[i].name, i)
}
// в
const productsAvail = products.filter(product => {
    return product.isAvailable === true;
})
console.log(productsAvail);
// г
const productDear = products.filter(product => product.price > 100000);
console.log(productDear);
// д
const productName = products.map(product => product.name);
console.log(productName);
// е
const productNameFM = products
.filter(product => product.isAvailable === true)
.map(product => product.name)
console.log(productNameFM)
// ж forEach пепербирает весь массив изменяя его, не создает новый map тоже но создает новый массив не изменяя сохраняя длину как у прежнего filter тоже но изменяет длину


















// 1
// fruits.forEach(fruit => {
    //     console.log(fruit);
    // });
    
//     numbers.forEach(num => {
//         console.log(num * 2);
//     });
//     names.forEach(name => {
//         console.log(`Привет, ${name}`);
//     });
//     // 4
//     colors.forEach((color, index) => {
//         console.log(`${color}, - ${index}`); // почему индекс в фигурных скобках изменил свой тип number на string
//         console.log(color, index);
//     });
//     // 5
//     numbers.forEach((num, index) => {
//         if (index >= 3) {
//             console.log(num); //а как вывести не по отдельности а в виде массива, использовать другой метод filter
//         }
//     });
//     // 6
//     const ages = [15, 18, 20, 16, 30];
//     ages.forEach(age => {
//         if (age >= 18) {
//             console.log(age);
//         }
//     });
//     // 7 - 8
// products.forEach((object) => {
//     if (object.price > 100000) {
//     console.log(`${object.name} -${object.price} `);
// }
// });