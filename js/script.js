"use strict";

const randomNumber = () => {
  //Функция загадывания числа
  const number = Math.floor(Math.random() * 98) + 2;
  return number;
};

const tryToGuess = () => {
  const target = randomNumber();
  let attempts = 10;
  while (attempts > 0) {
    const answer = prompt("Отгадайте число от 1 до 100 у вас 10 попыток");
    if (answer === null || answer === "" || !!isNaN(answer)) {
      alert("Введите число!");
    }
    if (answer > target) {
      attempts--;
      alert(`Загаданное число меньше, осталось ${attempts} попыток`);
    }
    if (answer < target) {
      attempts--;
      alert(`Загаданное число больше, осталось ${attempts} попыток`);
    }
    if (answer == target) {
      alert("Поздравляем вы угадали!");
      let again = confirm("Сыграем еще разок?");
      if (again) {
        randomNumber();
        attempts = 10;
        tryToGuess();
      } else {
        alert("Прощай!");
        break;
      }
    }
    if (attempts == 0) {
      alert(`Вы не угадали, загаданное число: ${randomNumber()}`);
      let again = confirm("Сыграем еще разок?");
      if (again) {
        randomNumber();
        attempts = 10;
        tryToGuess();
      } else {
        alert("Прощай!");
        break;
      }
    }
  }
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
