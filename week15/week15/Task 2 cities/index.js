const citiesList = document.getElementById('cities_list'); //получаем элемент из html

const cities = ["Москва", "Санкт-Петербург", "Токио", "Нью-Йорк"]; // создаю массив 4 городов
let citiesTemperature = [5, 12, -8, 4]; // создаю пустой массив для хранения значений температуры
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
maxTempShown.textContent = `Максимальная температура: ${maxTemp} градусов Цельсия`;//выводу текст
citiesList.after(maxTempShown);//добавляю текст после списка городов
