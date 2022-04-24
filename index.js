//Практическое задание №1
const convertButton = document.querySelector('.fullname__convert');

convertButton.addEventListener("click", () => {
    const fullnameInput = document.querySelector('.fullname__input');

    //здесь получится простая проверка, если есть лишние пробелы только в начале или в конце, и введеные фамилия, имя и отчество разделены одним пробелом. Для более сложной проверки наверно нужно использовать регулрные выражения?

    const [firstname, lastname, middlename] = (((fullnameInput.value).trim())).split(" ");
    //полная запись:
    // const separatedNames = (((fullnameInput.value).trim())).split(" ");
    // const firstname = separatedNames[0];
    // const lastname = separatedNames[1];
    // const middlename = separatedNames[2];

    const firstnameConverted = document.querySelector('.firstname__converted');
    const lastnameConverted = document.querySelector('.lastname__converted');
    const middlenameConverted = document.querySelector('.middlename__converted')

    firstnameConverted.innerHTML = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
    lastnameConverted.innerHTML = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
    middlenameConverted.innerHTML = middlename[0].toUpperCase() + middlename.slice(1).toLowerCase();
});

//Практическое задание №2
//Сделала функцию, которая считает время от клика на кнопку (чтобы можно было "застать" момент "прямо сейчас")
const countdownButton = document.querySelector('.countdown__button');
countdownButton.addEventListener("click", formatDate);

function formatDate() {
    const clickTime = new Date();
    countdownButton.disabled = true;

    const x = setInterval(function () {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;

        const now = new Date();
        const distance = now.getTime() - clickTime.getTime();
        const countdownResult = document.querySelector('.countdown__result');

        if (distance < second) {
            countdownResult.innerHTML = (`Прямо сейчас`);
        } else if (distance < minute) {
            let result = Math.floor(distance / second);
            countdownResult.innerHTML = (`${result} сек. назад`);
        } else if (distance < hour) {
            let result = Math.floor(distance / minute);
            countdownResult.innerHTML = (`${result} мин. назад`);
        } else if (distance >= hour) {
            countdownResult.innerHTML = (`${clickTime.getDate()}.${clickTime.getMonth()}.${clickTime.getFullYear()} ${clickTime.getHours()}:${clickTime.getMinutes()}`);
            clearInterval(x);
        }
    }, 200)
};

//Практическое задание №3
const generatorButton = document.querySelector('.generator__button');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generatorButton.addEventListener("click", () => {
    const generated = document.querySelector('.generated');
    const minimum = document.querySelector('.minimum');
    const maximum = document.querySelector('.maximum');
    const average = document.querySelector('.average');
    const sum = document.querySelector('.sum');
    const product = document.querySelector('.product');

    const generatedArray = [];
    for (i = 0; i < 10; i++) {
        generatedArray.push(getRandomIntInclusive(-10, 10));
    }

    let arraySum = 0;
    let arrayProd = 1;
    for (let i = 0; i < generatedArray.length; i++) {
        arraySum += generatedArray[i];
        arrayProd *= generatedArray[i];
    }

    generated.innerHTML = `Сгенерировали: ${generatedArray}`;
    minimum.innerHTML = `Минимальное: ${Math.min(...generatedArray)}`;
    maximum.innerHTML = `Максимальное: ${Math.max(...generatedArray)}`;
    sum.innerHTML = `Сумма чисел: ${arraySum} `;
    average.innerHTML = `Среднее арифметическое: ${arraySum/generatedArray.length} `;
    product.innerHTML = `Произведение чисел: ${arrayProd}`;

});