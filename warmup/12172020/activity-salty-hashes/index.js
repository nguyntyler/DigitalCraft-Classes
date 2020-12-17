const bcrypt = require("bcryptjs");

// Create a "salt" with 10 salt rounds
const salt = bcrypt.genSaltSync(10);
console.log(salt);
// For reference: https://www.npmjs.com/package/bcryptjs#gensaltsyncrounds-seed_length

// Use the salt to create a hash from this password.

// Reference: https://www.npmjs.com/package/bcryptjs#hashsyncs-salt
const password = "super-secret-password";

const hash = bcrypt.hashSync(password, salt);
// console.log() the hash
console.log(hash);

const pass = bcrypt.compareSync(password, hash);
console.log(pass);

/*
Music Database:

The artists have many albums.
Albums have many songs.
Artists have many genres.
Songs have one genre.
Songs belong to an album.
Albums belong to the artists.
*/
