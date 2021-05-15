/**
 * В переменных a и b хранятся числа.
 * Написать программу, которая выводит в консоль произведение и сумму этих чисел
 */

export function sum(a, b) {
  console.log(a + b);
}

export function multiplication(a, b) {
  console.log(a * b);
}

/**
 * В двух переменных хранятся строки символов.
 * Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.
 */

export function lengthCharacters(a, b) {
  console.log((a + b).length);
}

/**
 * 3.* Написать программу, которая запрашивает у пользователя ввод трёхзначного числа,
 * а потом выводит в консоль сумму цифр введённого числа.
 */

export function sumNumbers() {
  const number = prompt("Введите трехзначное число:");

  const result = number
    .split("")
    .map((x) => Number(x))
    .reduce((first, next) => first + next);

  console.log(result);
}
