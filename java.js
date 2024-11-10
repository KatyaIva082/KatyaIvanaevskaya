// Сложить два числа
function sum(a, b) {
    console.log(a + b);
}

// Вернуть наибольшее из 3х чисел
function maxOfThree(a, b, c) {
    console.log(Math.max(a, b, c));
}

// Вернуть самую длинную строку
function longestString(arr) {
    const longest = arr.reduce((a, b) => a.length > b.length ? a : b);
    console.log(longest);
}

// Является ли слова палиндромом?
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    console.log(word === reversed);
}

// Сумма элементов массива
function sumArray(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    console.log(sum);
}

// Отфильтровать массив чисел (оставить числа больше 10)
function filterGreaterThanTen(arr) {
    const filtered = arr.filter(num => num > 10);
    console.log(filtered);
}

// Отфильтровать массив объектов (младше 50 лет)
function filterUnderFifty(arr) {
    const filtered = arr.filter(person => person.age < 50);
    console.log(filtered);
}

// Склонировать объект
function cloneObject(obj) {
    const clone = JSON.parse(JSON.stringify(obj));
    console.log(clone);
}

// Примеры использования
sum(5, 10);
maxOfThree(10, 20, 30);
longestString(["apple", "banana", "cherry"]);
isPalindrome("racecar");
sumArray([1, 2, 3, 4, 5]);
filterGreaterThanTen([5, 15, 25, 3, 12]);
filterUnderFifty([{ name: "Bob", age: 50}, { name: "Jane", age: 64}, { name: "Jack", age: 25}]);
cloneObject({ name: "Bob", age: 50, children: [{ name: "Marie", age: 16}, { name: "Jame", age: 12}] });