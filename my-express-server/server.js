const express = require("express");

const app = express();

app.listen(5000, function(){
    console.log("Server started on port 5000");
});

// app.get('/', function(req, res) {

// })

app.get('/', (req, res) => {
    res.send("hello world !2345678");
});

app.get('/contact', (req, res) => {
    res.send("my email is: resdtedf@gmail.com")
});



app.get('/about', (req, res) => {
    res.send("qrwetyrufigfuhghj")
});


app.get('/newsfeed', (req, res) => {
    res.send("dsjkashdgfdgshjaksdjhgsahjksdjhgshajksdjhgshjkdfuy")
});