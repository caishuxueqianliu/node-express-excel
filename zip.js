const fs = require('fs')


let data = fs.readFileSync('./data/1.jpg');

fs.writeFileSync('./data/16117/LaunchScreen.png',data)