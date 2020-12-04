let generateContent = ({ page, additional, count }) =>
  `
          <!DOCTYPE html>
          <html>
              <head>
                  <title>My Selection:${page}</title>
                  <link rel="stylesheet" href="./styles.css">
              <head>
              <body>
                  ${navigation}
                  ${makeHeading(page)}
                  The count is ${count || 0}. I hope you are happy.
                  <ul>
                      ${additional.join("")}
                  </ul>
                  <footer>
                      copyleft 2020
                  </footer>
              </body>
          </html>
      `;

module.exports = generateContent;
