//Практическое задание №1
const convertButton = document.querySelector('.fullname__convert');

convertButton.addEventListener("click", () => {
    const fullNameInput = document.querySelector('.fullname__input');
    const separatedNames = (((fullNameInput.value).trim())).split(" ");
    //здесь получится простая проверка, если есть лишние пробелы только в начале или в конце, и введеные фамилия, имя и отчество разделены одним пробелом. Для более сложной проверки наверно нужно использовать регулрные выражения?

    const newFirstname = separatedNames[0];
    const newLastname = separatedNames[1];
    const newMiddlename = separatedNames[2];

    document.querySelector('.firstname__converted').innerHTML = newFirstname[0].toUpperCase() + newFirstname.slice(1).toLowerCase();
    document.querySelector('.lastname__converted').innerHTML = newLastname[0].toUpperCase() + newLastname.slice(1).toLowerCase();
    document.querySelector('.middlename__converted').innerHTML = newMiddlename[0].toUpperCase() + newMiddlename.slice(1).toLowerCase();
});