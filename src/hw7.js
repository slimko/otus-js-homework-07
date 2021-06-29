/** Домашнее задание №7 «Работа с DOM»
 *
 * Сверстать страницу и подключить к ней файл со скриптом.
 На странице должны быть три текстовых параграфа, поле ввода и кнопка.
 Напишите скрипт, который будет выполнять следующие условия:
 *

 * 1.Кнопка скрыта, если в поле ввода нет значения.
 * 2.При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода.
 * 3.*Если параграфов становится больше 5, первый из них удаляется.
 */

export function createListItem(app) {
  // eslint-disable-next-line max-len,no-param-reassign
  app.innerHTML = `<div class="content"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
    <input class="input-field" type="text">
    <button type="submit" class="button">Send</button>`;

  const button = app.querySelector(".button");
  button.hidden = true;
  const input = app.querySelector("input");
  const content = app.querySelector(".content");

  input.addEventListener("input", () => {
    if (input.value !== "") {
      button.hidden = false;
    }
  });

  button.addEventListener("click", () => {
    if (content.children.length >= 5) {
      content.children[0].remove();
    }
    // иначе jest не понимает
    let currentHTML = content.innerHTML;
    currentHTML += `<p>${input.value}</p>`;
    content.innerHTML = currentHTML;

    input.value = "";
    button.hidden = true;
  });
}
