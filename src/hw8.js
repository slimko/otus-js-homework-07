/**
 * Домашнее задание №8 «Работа с датами»

 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
 Напишите программу, выводящую день недели по введённой дате.
* */

export function getDay() {
  const input = prompt("Введите дату в формате ДД.ММ.ГГГГ:");

  const [day, month, year] = input.split(".");

  const inputDate = new Date(`${year}-${month}-${day}`);

  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return days[inputDate.getDay()];
}

/**
 2.Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.
*/

export function diffMin() {
  const day = new Date();
  console.log(day.getHours() * 60 + day.getMinutes());
}

/**
 * 3. *В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
 * Написать программу, которая определяет более молодого пользователя.
 *
 */

export function diffDate(a, b) {
  const [aDay, aMonth, aYear] = a.split(".");
  const [bDay, bMonth, bYear] = b.split(".");

  const birthdayA = new Date(`${aYear}-${aMonth}-${aDay}`);
  const birthdayB = new Date(`${bDay}-${bMonth}-${bYear}`);

  return birthdayA.getTime() > birthdayB.getTime() ? a : b;
}
