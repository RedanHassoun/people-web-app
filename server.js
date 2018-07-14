const express = require('express')

const port = process.env.PORT || 3000

var app = express()

var peopleArray = []

app.use(express.static(__dirname + '/public'));

var initPeople = ()=>{
  peopleArray.push({id:'123',name:'redan',mail:'redan@mail.com'})
  peopleArray.push({id:'124',name:'sameh',mail:'sameh@mail.com'})
}

initPeople()


app.get('/getAllPeople', (req,res)=>{
  res.send(peopleArray)
})


// application -------------------------------------------------------------
app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port,()=>{})
