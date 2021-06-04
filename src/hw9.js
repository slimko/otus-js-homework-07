/** Домашнее задание №9 «Математические операции»
 *
 * 1.Даны длины трёх сторон треугольника.
 Определить, является ли треугольник прямоугольным.
 //4,5,3 или 12,13,5
 */

export function isRectangularTriangle(a, b, c) {
  const sides = [a, b, c];
  const hypotenuse = Math.max.apply(null, sides);
  sides.splice(
    sides.findIndex((el) => el === hypotenuse),
    1
  );

  return (
    // eslint-disable-next-line eqeqeq,no-restricted-properties
    Math.pow(sides[0], 2) + Math.pow(sides[1], 2) == Math.pow(hypotenuse, 2)
  );
}

/**
 2.Пользователь вводит число R.
 Написать программу,которая выведет в консоль длину окружности и площадь круга с радиусом R.
 */

export function getLengthAndAreaCircle(r) {
  // eslint-disable-next-line no-restricted-properties
  const area = Math.pow(r, 2) * Math.PI;
  const length = 2 * Math.PI * r;
  return [length, area];
}

/**
 *Пользователь вводит числа a, b и c.
 Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

 Квадратное уравнение вида ax2 + bx + c = 0
 1. Вычислить дискриминант по формуле d = b2 – 4ac.
 2. Если D > 0, то квадратное уравнение имеет два корня; если D = 0, то 1 корень; и если D < 0, то делают вывод, что корней нет.

 Если дискриминант больше нуля, то вычислить два корня уравнения:
 x1 = (-b+√d) / 2a
 x2 = (-b-√d) / 2a

 */

export function quadraticEquation(a, b, c) {
  // 1. Вычислить дискриминант по формуле d = b2 – 4ac.
  // eslint-disable-next-line no-restricted-properties
  const d = Math.pow(b, 2) - 4 * a * c;

  // 2. Если дискриминант больше нуля, то вычислить два корня уравнения:
  //  x1 = (-b+√d) / 2a
  //  x2 = (-b-√d) / 2a

  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
  if (d === 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    return [x1];
  }
  return "No roots";
}
