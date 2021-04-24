// Получение времени
let d = new Date();

let now = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds}`;

console.log(now);


// Перебор массива
let names = ["Artur", "Dimon", "Olga"];

for (let name of names) {
    console.log(name);
}


// Переворот строки
function reverse(s) {
    return s.split("").reverse().join("");
}

reverse("itproger web");


// Сортировка массива
let cars = ["nissan", "audi", "bmw", "opel"];
cars.sort();


let number = [39, 17, 100, 95, 62, 118];
number.sort((a,b) => {return a - b });

console.log(cars, number);

// Проверка на класс
let element = document.querySelector("#el");

element.classList.contains("active");


// Выбор случайного значения
let items = ["apple", "car", "door", "llama"];

let index = Math.floor(Math.random() * number.length);

console.log(items[index]);


// Замена строки
let str = "Я герой?";
let txt = str.replace("Я", "Ты");

console.log(txt);