const strLikes = require("./numbers-as-strings.json");

const numLikes = strLikes.map((like) => Number(like));

console.log(numLikes);
console.log(typeof numLikes[0]);
