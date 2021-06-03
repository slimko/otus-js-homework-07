/** 1. В переменных a и b хранятся числа.
 * Вывести в консоль наибольшее из них.
 */

export function greatest(a, b) {
  const result = a > b ? a : b;
  console.log(result);
}

/** 2. Запросить у пользователя ввод числа от 1 до 12.
 Вывести в консоль название месяца, соответствующее
 этому числу (1 — январь, 2 — февраль и т.д.).
 */

export function numberToMonth() {
  const number = +prompt("Введите число от 1 до 12");
  let month = "Введено число вне диапазона от 1 до 12";
  // eslint-disable-next-line default-case
  switch (number) {
    case 1:
      month = "Январь";
      break;
    case 2:
      month = "Февраль";
      break;
    case 3:
      month = "Март";
      break;
    case 4:
      month = "Апрель";
      break;
    case 5:
      month = "Май";
      break;
    case 6:
      month = "Июнь";
      break;
    case 7:
      month = "Июль";
      break;
    case 8:
      month = "Август";
      break;
    case 9:
      month = "Сентябрь";
      break;
    case 10:
      month = "Октябрь";
      break;
    case 11:
      month = "Ноябрь";
      break;
    case 12:
      month = "Декабрь";
      break;
  }

  console.log(month);
}

/** 3. В переменных circle и square хранятся площади круга и квадрата соответственно.
 * Написать программу, которая определяет, поместится ли круг в квадрат.
 * Поместится ли круг площадью 12 в квадрат с площадью 5 ?
 */

export function circleInSquare(areaCircle, areaSquare) {
  return areaCircle / 3.14 <= Math.sqrt(areaSquare);
}
