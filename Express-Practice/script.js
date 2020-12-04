const http = require("http");
const express = require("express");

const males = () => {
  fetch("http://localhost:3000/api/people/gender/male", {
    headers: {
      Accept: "application/json",
    },
  }).then((data) => data.json());
};

// const htmlbp = (page, custom) => {
//   return `
//       <!DOCTYPE html>
//       <html>
//           <head>
//               <title>You are at ${page}</title>
//           </head>
//           <body>
//               <h1>This is the ${page} page.</h1>
//               <p>${custom}</p>
//           </body>
//       </html>
//       `;
// };
