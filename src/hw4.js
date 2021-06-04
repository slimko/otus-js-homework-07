/**
 Домашнее задание №4 «Объекты»
 * */

/**
 Создайте объект user, содержащий поле name со
 значением ‘John’.

 1.Запросить у пользователя ввод числа. Записать
 введенное значение в поле age объекта user.
 */

export function setAgeToUser(user) {
  const age = +prompt("Введите число:");
  // eslint-disable-next-line no-param-reassign
  user.age = age;

  return user;
}

/**
 2.Создать копию объекта user с именем admin.
 Добавить новому объекту поле role со значением ‘admin’.
 */

export function cloneUser(user) {
  const admin = { ...user, role: "admin" };
  return admin;
}

/** 3*. Записать все значения полей объекта admin в отдельные переменные.
 Имена переменных должны совпадать с названиями полей.
 */

export function propsObject(obj) {
  const { name, age, role } = obj;
  return [name, age, role];
}
