const chalk = require("chalk");
const { randomFunction, cowFunction } = require("./utils");

function makeCowSay(count) {
  for (let i = 1; i <= count; i++) {
    var randomColor = randomFunction();
    console.log(chalk.hex(randomColor)(cowFunction(`This is Cow number ${i}`)));
  }
}

makeCowSay(5);
