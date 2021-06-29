/** Домашнее задание №10 «Регулярные выражения»

 Пользователь вводит текстовую строку.
 Определить с помощью регулярного выражения, является ли введённая строка:
 1.Датой.
 2.Адресом электронной почты.
 3.*Номером телефона

 */

export function regDate(str) {
  const reg = /^(0?[1-9]|[12][0-9]|3[01])[/\-.](0?[1-9]|1[012])[/\-.]\d{4}$/;
  return reg.test(str);
}

export function regEmail(str) {
  const reg = /[\da-z.]+@[\da-z1-9]+\.[a-z]+/;
  return reg.test(str);
}

export function regPhone(str) {
  const reg =
    /\+\d[\s(-]{0,1}\d{3}[\s)-]{0,1}\d{3}[\s-]{0,1}\d{2}[\s-]{0,1}\d{2}/;
  return reg.test(str);
}
