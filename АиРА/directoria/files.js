const fs = require("fs");
const path = require("node:path");

let dirname = __dirname;

function recursy(input) {
    fs.readdir(input, (err, files) => {
        if (err) console.error(err);
        else {
            files.forEach((file) => {
                let filePath = path.join(input, file);
                fs.stat(filePath, (err, stats) => {
                    if (err) console.error(err);
                    else {
                        if (stats.isDirectory()) {
                            recursy(filePath);
                        } else console.log(filePath);
                    }
                });
            });
        }
    });
}

recursy(dirname);
