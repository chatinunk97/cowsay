const cowsay = require("cowsay");
exports.randomFunction = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

exports.cowFunction = (text) => {
  const cowObj = {
    text: text,
    e: "O-O",
    T: "U",
  };

  return cowsay.say(cowObj)
};
