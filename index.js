const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

const MailerQRenderer = (dirPath, vars) => {
    return (templateFileName, vars) => {
        const templateString = fs.readFileSync(path.join(dirPath, templateFileName), "utf8");

        return ejs.render(templateString, vars);
    }
}

module.exports = MailerQRenderer;
