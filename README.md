# MailerQ EJS Plugin

## Installation

```bash
npm install mailer-q-ejs
```

## Usage

- This plugin is an extension of the [MailerQ](https://github.com/mailer-q/mailer-q) module for sending email.
- It enables MailerQ to use EJS templating to send email.
- To use this extension, simply require the module and call the resulting function with the path to your email templates as an argument.

Example configuration:

```javascript
const path = require("path");
const MailerQEjs = require("mailer-q-ejs");

const config = {
	renderer: MailerQEjs(path.join(__dirname, "./email_templates")),
	defaultFrom: "Test Tester test@example.com",
	defaultTo: "recipient@test.com",
	host: "smtp.example.com",
	port: 587,
	auth: {
		user: "your username",
		pass: "your pass"
	}
}
```

Example sending mail:

```javascript
const MailerQ = require("./config/mailers");

MailerQ
.contents({
	from: "Test Sender sender@test.com",
	to: "recipient@example.com",
	subject: "Test message",
	templateFileName: "welcome.ejs",
	locals: {
		name: "Bob Jones"
	}
})
.deliverNow()
.then(() => {
	console.log("Message sent!");
})
.catch((err) => {
	console.log(err);
});
```
