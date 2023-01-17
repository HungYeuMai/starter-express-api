const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.all('/test', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.post('/',(req,res)=>{
    console.log('====================================');
    console.log(req.body, req.params, req.query);
    console.log('====================================');

    res.json(req.body)
})
app.listen(process.env.PORT || 3000)