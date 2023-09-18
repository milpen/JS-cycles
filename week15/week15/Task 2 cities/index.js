const citiesList = document.getElementById('cities_list'); //получаем элемент из html

const cities = ["Москва", "Санкт-Петербург", "Токио", "Нью-Йорк"]; // создаю массив 4 городов
let citiesTemperature = []; // создаю пустой массив для хранения значений температуры
for(let i = 0; i< cities.length; i++) {
const cityInput = prompt(`Введите температуру для ${cities[i]}`);//запрашиваем у пользователя температуру
citiesTemperature.push(Number(cityInput)); // добавляем данные в массив, переводя их в число

const cityElem = document.createElement('li'); //создаю элемент списка
cityElem.textContent = `Температура в городе ${cities[i]}: ${cityInput} градусов Цельсия`; //вывожу текстовое содержимое элемента
citiesList.append(cityElem);//добавляю элемент в список
};

citiesTemperature.sort((a, b) => a - b);//сортирую массив с температурами

const minTemp = citiesTemperature[0];//выбираю мин.значение (из отсортированного массива)
const maxTemp = citiesTemperature[citiesTemperature.length - 1];//выбираю макс значение (длина массива минус 1)

const minTempShown = document.createElement('h4');//создаю элемент для вывода мин.температуры
minTempShown.textContent = `Минимальная температура: ${minTemp} градусов Цельсия`;//вывожу текст
citiesList.after(minTempShown);//добавляю текст после списка городов

const maxTempShown = document.createElement('h4');//создаю элемент для вывода макс.температуры
maxTempShown.textContent = `Максимальная температура: ${maxTemp} градусов Цельсия`;//вывожу текст
citiesList.after(maxTempShown);//добавляю текст после списка городов

//Вариант 2
/*const citiesList = document.getElementById('cities_list');

const cities = ["Москва", "Санкт-Петербург", "Токио", "Нью-Йорк"];
let citiesTemperature = [];

for(let i = 0; i< cities.length; i++) {
const cityInput = prompt(`Введите температуру для ${cities[i]}`);
citiesTemperature.push(Number(cityInput));

const cityElem = document.createElement('li');
cityElem.textContent = `Температура в городе ${cities[i]}: ${cityInput} градусов Цельсия`;
citiesList.append(cityElem);
};
//Создаю две переменные, где значения гарантированно больше или меньше возможных температур (поняла пункт 6 задания так)
let minimum = Infinity;
let maximum = -Infinity;

for (let i=0; i<citiesTemperature.length; i++) {
    const temp = citiesTemperature[i];
    if (temp<minimum){
        minimum=temp;
    }
    if (temp>maximum){
        maximum=temp;
    }
}

const minTempShown = document.createElement('h4');
minTempShown.textContent = `Минимальная температура: ${minimum} градусов Цельсия`;
citiesList.after(minTempShown);

const maxTempShown = document.createElement('h4');
maxTempShown.textContent = `Максимальная температура: ${maximum} градусов Цельсия`;
citiesList.after(maxTempShown);*/