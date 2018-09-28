const nodemailer = require('nodemailer');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path =require('path');
var port = process.env.PORT || 3000;
var app = express();


//view engine 
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');

//body parser middleware
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());


app.use('/public', express.static(path.join(__dirname,'public')));
  
app.get('/',(req,res) => {
  res.render('index.handlebars');
});

app.get('/about',(req,res) => {
  res.render('about.handlebars');
});
app.get('/portfolio',(req,res) => {
  res.render('portfolio.handlebars');
});
app.get('/portfolio_detail',(req,res) => {
  res.render('portfolio_detail.handlebars');
});
app.get('/news',(req,res) => {
  res.render('news.handlebars');
});
app.get('/news_detail',(req,res) => {
  res.render('news_detail.handlebars');
});
app.get('/contact',(req,res) => {
  res.render('contact.handlebars');
});
app.get('/pricing',(req,res) => {
  res.render('pricing.handlebars');
});
app.get('/service',(req,res) => {
  res.render('service.handlebars');
});
app.get('/404',(req,res) => {
  res.render('404.handlebars');
});
// app.get('')


app.post('/send', (req,res)=>{
  // console.log(req.body);
  var output = `
    <h4>NEW CONTACT DETAILS : </h4>
    NAME : ${req.body.name}<br>
    EMAIL :${req.body.email}<br>
    PHONE NO : ${req.body.phone}<br>
    MESSAGE : ${req.body.message}
`;



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhaipk100@gmail.com',
    pass: 'Pranit@9250044080'
  }
});

var mailOptions = {
  from: 'bhaipk100@gmail.com',
  to: 'pranitarora03@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'CHECK THE CONTACT OF USER....',
  html : output
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(`Error occured ${JSON.stringify(error)}`);
  } else {
    console.log('Email sent: ' + info.response);
  }

  res.render('index',{msg:'mail has been sent'});
});
});

app.listen(port,()=>{
    console.log(`server started... ${port}`);
});