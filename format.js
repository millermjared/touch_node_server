fs = require('fs');



var data = fs.readFileSync("data.json");

var json = JSON.parse(data);

fs.writeFileSync("data.json", JSON.stringify(json, null, 2))
