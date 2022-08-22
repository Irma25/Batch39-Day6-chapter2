const express = require ('express');

// 1. buat variabel yg menampung express
const app = express()

// 2. untuk memanggil server
app.listen (8000, function(){
    console.log("Server Running");
})

// 3. untuk menampilkan hello world
app.get('/', function(request, response){
  response.send("Hello World Irma");
})

// 4. untuk menampilkan hello world
app.get('/user', function(request, response){
    response.send("Hello Batch 39 ");
  })

// 5. untuk menampilkan hello world
app.get('/contact', function(request, response){
    response.send("Form Contact");
  })


//   Notes 
// 1. untuk memanggil nodemon gunakan npm start(install dr sisi browser)
//    fungsi nodemon adalah untuk tahap development supaya langsung ke refresh kehalaman tanpa harus ctrl+c seperti node index.js (install hanya dr sisi server saja)biasa
// 2. untuk unistall npm tinggal npm unistall nodemon
   