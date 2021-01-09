const capitalizeFirstLetters = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => {
      return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "";
    })
    .join(" ");
};

module.exports = capitalizeFirstLetters;
