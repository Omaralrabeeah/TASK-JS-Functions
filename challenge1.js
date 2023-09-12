/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName() {
  console.log("omar");
}
printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear) {
  let currentYear = 2023;
  let age = currentYear - birthYear;

  console.log(age);
}
printAge(1990);
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  if (language === "en") {
    console.log(`Hello ${name}`);
  } else if (language === "es") {
    console.log(`Hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
  console.log(`Merhaba ${name}`);
}

printHello("omar", "en");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger numbers
 **/ function printMax(num1, num2) {
  if (num1 < num2) {
    console.log(`${num2} is greater than ${num1}`);
  } else {
    console.log(`${num1} is greater than ${num2}`);
  }
}
printMax(20, 40);
