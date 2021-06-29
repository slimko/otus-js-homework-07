/**
 * Домашнее задание №3 «Циклы»
 *
 * 1. Вывести в консоль сумму всех целых чисел от 50 до 100.
 */

export function getSum() {
  let i = 50;
  let result = 0;

  while (i <= 100) {
    // выводит 0, затем 1, затем 2
    result += i;
    i++;
  }

  console.log(result);
}

/**
 * 2. Вывести в консоль таблицу умножения на 7.

 7 x 1 = 7
 7 x 2 = 14
 …
 7 x 9 = 63

 */

export function multiplicationTable() {
  for (let i = 1; i < 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}

/**
 * 3. Запросить у пользователя ввод числа N.
 * Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N
 */

export function average() {
  const number = +prompt("Введите число:");
  let result = 0;
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      result += i;
      count++;
    }
  }

  const response = result / count;

  console.log(response);
}
