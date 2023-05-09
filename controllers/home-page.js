const fs = require('fs');
const path = require('path');

module.exports=(req, res) => {
    fs.readFile(path.join(__dirname,"..", "views", "index.html"), { encoding: 'utf8' }, (err, data) => {
        res.send(data);
    })
}