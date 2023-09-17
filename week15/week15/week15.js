//Задание 1+
// Выведите числа от 1 до 10 в консоль
let task1Result1;
for (taskResult1 = 1; taskResult1 < 11; taskResult1++) {
  console.log (1, taskResult1);
}
//Задание 2+
// Выведите чётные числа от 1 до 20 в консоль
for (taskResult2 = 1;  taskResult2 <=20; taskResult2 ++) {
if (taskResult2 % 2 !==0) {
} else {
console.log(2, taskResult2);
}
}

//Задание 3+
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (taskResult3 = 10; taskResult3 >0; taskResult3 --) {
console.log(3, taskResult3);
}
//Задание 4+
// Выведите таблицу умножения на 5 от 1 до 10
for (taskResult4 = 1; taskResult4 <=10; taskResult4++) {
let result = taskResult4*5;
console.log(4, result);
}
//Задание 5+
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (a = 1; a <= 100; a++) {
sum += a;
}
console.log(5, sum);

//Задание 6+
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let number of array) {
console.log(6, number);
}
//Задание 7+
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum7 = 0;
for (let i = 0; i < numbers.length; i++) {
sum7 += numbers[i];
}
console.log(7, sum7);

//Задание 8+
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
const animalsPretty = animals[i] + " - прекрасное животное";
animals[i] = animalsPretty;
}
console.log(8, animals);

//Задание 9+
// Выведите символы в строке в консоль
const str = 'Hello';
for (let symbol of str) {
console.log(9, symbol);
}

//Задание 10+
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let number of numbers) {
console.log(10, number);
}
//Задание 11+
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (let word of sentences) {
let arrays = word.split(" ");
arrays.forEach((item) => {
console.log(11, item);
});
}
//Задание 12+
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum12 = 0;
for (let elem of numbers) {
sum12 += elem;
}
console.log(12, sum12);

//Задание 13+
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for(c = 0; c< list.length; c++) {
console.log(13, list[c].length);
}

//Задание 14+
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words14 = ["Hello", "world", "string"];
//Вариант 1
// for (let element of words14) {
//   const upperCase = element.toUpperCase();
//   console.log(14, upperCase); // отдельные слова
// }

//Вариант 2
for (let i = 0; i < words14.length; i += 1) {
const word = words14[i];
const normalizedWord = word.toUpperCase();
words14[i] = normalizedWord;
}
console.log(14, words14); // массив слов

//Задание 15+
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
function getVowels() {
for (let elem of greeting.toLowerCase()) {
if(vowels.includes(elem)) {
vowelCount++;
}
}
return vowelCount;
}
console.log(15, getVowels(greeting));

//Задание 16+
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
const newWords = words.join(' ');
console.log(16, newWords);

//Задание 17+
// Выведите числа от 1 до 10 в консоль используя цикл while
let numbers17 = 1;
while(numbers17 <= 10) {
console.log(17, numbers17);
numbers17++;
}
//Задание 18+
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let numbers18 = 10;
while(numbers18 >= 1){
console.log(18, numbers18);
numbers18 --;
}

//Задание 19  НЕ НАШЛА ПРОСТОЕ РЕШЕНИЕ, ЕСТЬ 2 ВАРИАНТА
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
//Вариант 1
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let i = 0;
let positiveNumbers =[];
while (i < allNumbers.length) {
if (allNumbers[i] > 0) {
positiveNumbers.push(allNumbers[i]);
}
i++
}
console.log(19, positiveNumbers);

//Вариант 2
function isPositive(arr) {
  let count = 0;
  while (count < arr.length-1) {
  if (arr[count]< 0) {
  allPositive = false;
  console.log('задание 19 есть отрицательное значение ' + arr[count]);
  break
  }
  count++;
  }
  }
  isPositive(allNumbers);
  console.log('задание 19 все числа положительные? ' + allPositive);


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let r = 0;
do {
console.log(20, random[r]);
r++;
}
while (random[r] > 0);
//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let num21 = 1;
do{
if (num21 % 3 !== 0) {
console.log(21, num21);
}
num21 ++;
} while (num21 <=100);
//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

// ищем сумму положительных чисел
// если пользователь вводит отрицательное число, прерываем цикл с помощью break
// отрицательное число не суммируется

let sum22 = 0;
do {
  // просим пользователя ввести число, если предыдущее было положительным.
  let number = parseInt(prompt("Введите число больше 0: "));
  // условие прерывания
if(number < 0) {
break;
}
//     // если цикл не прерывался, число положительное
//     // добавляем его к сумме
sum22 += number;
number++;
}
while (sum22 < 100);
// выводим на экран сумму
console.log(22, `Сумма введенных положительных чисел: ${sum22}.`);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const colors = document.getElementsByTagName("h4");
console.log(colors);
for (let elem of colors) {
elem.style.backgroundColor = "#2ca8e6";
}
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
let n = 0;
for (n = 0; n < 6; n++) {
  randomString += alphabet[Math.round(Math.random() * (alphabet.length))];
}
console.log(24, randomString);