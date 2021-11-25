"use strict";

const randomNumber = () => {
  //Функция загадывания числа
  const number = Math.floor(Math.random() * 98) + 2;
  return number;
};

const tryToGuess = () => {
  //Основная функция вмещающая весь функционал
  const target = randomNumber(); // присваеваем переменной значение рандомного числа
  let attempts = 10; // попытки
  const Game = () => {
    if (attempts > 0) {
      // если попытки больше 0 то
      const answer = prompt(
        `Отгадайте число от 1 до 100 у вас ${attempts} попыток`
      ); //спрашиваем пользователя  число
      if (answer.trim() === null) {
        alert("Прощай!");
        attempts = 0;
        return;
      }

      if (answer.trim() === "" || isNaN(answer)) {
        //проверка что введено число и там где я запутался с !!
        attempts--;
        alert("Введите число!");
        Game();
        return;
      }
      if (answer > target) {
        //Если число больше то выводим сообщение и убавляем попытки
        attempts--;
        alert(`Загаданное число меньше, осталось ${attempts} попыток`);
        Game();
        return;
      }
      if (answer < target) {
        //Если число меньше то выводим сообщение и убавляем попытки
        attempts--;
        alert(`Загаданное число больше, осталось ${attempts} попыток`);
        Game();
        return;
      }
      if (answer == target) {
        //Если число равно о выводим сообщение и предлагаем сыграть снова
        alert("Поздравляем вы угадали!");
        let again = confirm("Сыграем еще разок?"); //Выводим сообщение с вариантами ответа да или нет
        if (again) {
          //Выполняется только если вернулось тру из again
          randomNumber(); // снова загадываем число вызвав функцию
          attempts = 10;
          Game(); // и снова вызываю функцию игры
          return;
        } else {
          //А тут в другом случае если отказ
          alert("Прощай!");
          attempts = 0;
          return;
        }
      }
    }
    if (attempts == 0) {
      // тут если число попыток равно 0 показываю число и предлагаю сыграть еще
      alert(`Вы не угадали, загаданное число: ${randomNumber()}`);
      let again = confirm("Сыграем еще разок?");
      if (again) {
        randomNumber();
        attempts = 10;
        Game();
        return;
      } else {
        alert("Прощай!");
        // attempts = 0;
        return;
      }
    }
  };
  Game();
};

tryToGuess();

// console.log(randomNumber);

// for (let i = 0; i < 11; i++) {
//   if (condition > randomNumber) {
//     alert("Загаданное число меньше");
//   }
//   if (condition < randomNumber) {
//     alert("Загаданное число больше");
//   }
//   if (condition === randomNumber) {
//     alert("Поздравляем вы угадали!");
//   }
// }

// do {
//   randomNumber = Math.floor(Math.random() * 98) + 2;
// } while (condition > randomNumber);
// {
//   alert("Загаданное число меньше");
//   break;
// }
// while (condition < randomNumber) {
//   alert("Загаданное число больше");
//   break;
// }
// while (condition === randomNumber) {
//   alert("Поздравляем, вы победили!");
//   break;
// }
