require('dotenv').config();

const nodemailer = require('nodemailer');
const Email = require('email-templates');

const pug = require('pug');

const sendEmail1 = () => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
            pass: process.env.PASSWORD || '1234' // TODO: your gmail password
        }
    });

    const email = new Email({
        transport: transporter,
        send: false,
        preview: true,
    });

    let tasks = [
        { username: 'name1', taskname: 'task1', action: 'completed' },
        { username: 'name2', taskname: 'task2', action: 'completed' }
    ]


    email.render('html', {
        taskList: tasks
    }).then((temp) => {
        console.log(temp);
        /*  email.send({
             message: {
                 from: 'abc@gmail.com',
                 to: 'abc@gmail.com',
             },
             locals: {
                 fname: 'ABC',
                 lname: 'ABC',
             }
         }).then(() => console.log('email has been sent!')); */
    }).catch(console.error);


}

const sendEmail = () => {
    let baseHTMLOptions = {
        surveys: []
    };

    const baseHTML = pug.compileFile(__dirname + '/emails/table.pug');
    let mailHTML = baseHTML(baseHTMLOptions);
    console.log(mailHTML);
}

module.exports = sendEmail;