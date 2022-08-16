const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
 
  var title = 'Our Home Page';
  var heading = 'My Website';
  res.render('pages/index',{
    'title':title,
    'heading': heading
  });
})

app.get('/m1max', (req, res) => {
 
  var title = 'Apple M1 Max Page';
  var heading = 'My Website';
  res.render('pages/m1max',{
    'title':title,
    'heading': heading
  });
})

app.get('/cars', (req, res) => {
 
  var title = 'Corvette C8 Page';
  var heading = 'My Website';
  res.render('pages/cars',{
    'title':title,
    'heading': heading
  });
})

app.get('/movies', (req, res) => {
 
  var title = 'MCU Movies Page';
  var heading = 'My Website';
  res.render('pages/movies',{
    'title':title,
    'heading': heading
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
