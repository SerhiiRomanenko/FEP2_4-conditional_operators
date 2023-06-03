//----------------------------------------FIRST TASK---------------------------------------------------//

let firstNum = 13;
let secondNum = 5;
if (+firstNum !== +firstNum || +secondNum !== +secondNum) {
  console.log("Oops. Wrong type(s)");
} else {
  if (firstNum > secondNum) {
    console.log(`First number (${firstNum}) is larger then second number (${secondNum})`)
  } else if (firstNum < secondNum) {
    console.log(`First number (${firstNum}) is smaller then second number (${secondNum})`)
  } else {
    console.log("The numbers are the same")
  }
}

//----------------------------------------SECOND TASK---------------------------------------------------//

let firstDistanceInKm = 3;
let secondDistanceInFt = 11111;

if (firstDistanceInKm * 1000 > secondDistanceInFt * 0.305) {
  console.log(`${firstDistanceInKm} kilometers is larger than ${secondDistanceInFt} feet`);
} else if (firstDistanceInKm * 1000 < secondDistanceInFt * 0.305) {
  console.log(`${firstDistanceInKm} kilometers is smaller than ${secondDistanceInFt} feet`);
} else {
  console.log("Distances are the same");
}

//----------------------------------------THIRD TASK---------------------------------------------------//


let num1 = 15;
let num2 = 5;

if (num1 % num2 === 0) {
  console.log(`The number ${num1} is the divisor of ${num2}`);
} else {
  console.log(`The number ${num1} is NOT the divisor of ${num2}`)
}


//----------------------------------------FOURTH TASK---------------------------------------------------//

let myNumber = 1112;
let strNumber = "" + myNumber;

if (strNumber[strNumber.length - 1] % 2 === 0) {
  console.log(`Остання цифра - парна. Остання цифра - ${strNumber[strNumber.length - 1]}`);
} else {
  console.log(`Остання цифра НЕ парна. Остання цифра - ${strNumber[strNumber.length - 1]}`);
}


//----------------------------------------FIFTH TASK---------------------------------------------------//


let twoDigitNumber = 51;
let stringNumber = "" + twoDigitNumber;
if (stringNumber.length === 2) {
  if (stringNumber[0] > stringNumber[1]) {
    console.log(`Перша цифра ${stringNumber[0]} більша ніж друга ${stringNumber[1]}`)
  } else if (stringNumber[0] < stringNumber[1]) {
    console.log(`Перша цифра ${stringNumber[0]} менша ніж друга ${stringNumber[1]}`)
  } else {
    console.log("Цифри одинакові")
  }
} else {
  console.log(`${twoDigitNumber} не є двохзначним числом`);
}


//----------------------------------------SIXTH TASK---------------------------------------------------//


let threeDigitNumber = 551;
let stringNum = "" + threeDigitNumber;
if (stringNum.length !== 3) {
  console.log(`${threeDigitNumber} не є трьохзначним числом`);
} else {

  let sumOfDigits = +stringNum[0] + +stringNum[1] + +stringNum[2];
  let productOfDigits = +stringNum[0] * +stringNum[1] * +stringNum[2];

  //--------- Перевірка на парність суми чисел
  if (sumOfDigits % 2 === 0) {
    console.log("Сума цифра парна");
  } else {
    console.log("Сума цифра НЕ парна");
  }

  //--------- Перевірка на кратність 5 суми чисел
  if (sumOfDigits % 5 === 0) {
    console.log("Сума цифра кратна 5");
  } else {
    console.log("Сума цифра НЕ кратна 5");
  }

  //--------- Перевірка чи добуток цифр > 100
  if (productOfDigits > 100) {
    console.log(`Добуток його цифр становить ${productOfDigits}, що більше 100`);
  } else if (productOfDigits < 100) {
    console.log(`Добуток його цифр становить ${productOfDigits}, що менше 100`);
  } else {
    console.log(`Добуток його цифр становить ${productOfDigits}`);
  }
}

//----------------------------------------SEVENTH TASK---------------------------------------------------//


let threeDigitNum = 555;
let strNum = "" + threeDigitNum;

if (strNum.length !== 3 ) {
  console.log(`${threeDigitNum} не є трьохзначним числом`);
} else {

  //--------- Перевірка чи всі цифри одинакові
  if (strNum[0] === strNum[1] && strNum[0] === strNum[2]) {
    console.log("Всі цифри одинакові");
  } else {
    console.log("Всі цифри не одинакові");
  }

  //--------- Перевірка чи є однакові цифри
  if (strNum[0] === strNum[1] || strNum[0] === strNum[2] || strNum[1] === strNum[2]) {
    console.log("Є однакові цифри");
  } else {
    console.log("Нема однакових цифр");
  }
}


//----------------------------------------EIGHTH TASK---------------------------------------------------//

let mySixthDigitNumber = 147741;
let myStrNum = "" + mySixthDigitNumber;

if (myStrNum.length !== 6) {
  console.log(`${mySixthDigitNumber} не є шестизначним числом`);
} else {
  let revertStrNum = myStrNum[5] + myStrNum[4] + myStrNum[3] + myStrNum[2] + myStrNum[1] + myStrNum[0];
  if (+revertStrNum === mySixthDigitNumber) {
    console.log(`Задане шестизначне число ${mySixthDigitNumber} є дзеркальним`);
  } else {
    console.log(`Задане шестизначне число ${mySixthDigitNumber} НЕ є дзеркальним`);
  }
}