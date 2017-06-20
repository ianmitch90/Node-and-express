//load nodes first
var loremIpsum = require('lorem-ipsum');
var output = loremIpsum();
const express = require('express');
const app = express();


//using app get to generate a link to get results
app.get('/', function(req, res){
  res.send('<html><body>
  <p>Cool paragraphs here:</p>
  <a href="/lorem-ipsum/2">Push me~</a>
  </body></html>')
});

//define what gets printed
app.get('/lorem-ipsum/:count', function(req, res){
  res.send(
    output = loremIpsum({
    count: req.params.count,
    units: 'paragraphs',
    suffix: '<br>'
     })
   )
});

//listen for port 3000 and print "sucsess" to command
app.listen(3000, function(){
  console.log('Sucess!');
});

app.use(express.static('public'))
