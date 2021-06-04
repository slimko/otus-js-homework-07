/** Создайте массив целых чисел из 10 элементов.* */

/** 1.Выведите в консоль сумму всех элементов массива. */

export function sum(arr) {
  let res = 0;
  arr.forEach((el) => {
    res += el;
  });
  console.log(res);
}

/** 2.Создайте новый массив на основе исходного,
 * в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом.
 * (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).
 * */

export function newArr(arr) {
  return arr.map((el) => el * 2);
}

/**
 3.*Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.
 * */

export function minAndMaxEl(arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);

  console.log([min, max]);
}
