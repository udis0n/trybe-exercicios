const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('udison', console.log)

module.exports = {
  uppercase,
};
