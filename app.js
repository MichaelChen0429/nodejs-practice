const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const querystring = require('querystring')
const server = http.createServer((req, res) => {
  console.log('method: ',req.method) //GET
  const url = req.url
  console.log('url: ', url)
  req.query = querystring.parse(url.split('?')[1])
  console.log('query: ',req.query)
  console.log(req.query)
  var article1 = "how to eat"
  var article2 = "how to sleep"
  var article = article1 + "," + article2
  if (req.query.id === '1') {
    var article = article1
  } else if (req.query.id === '2') {
    var article = article2
  }
  res.end(
    JSON.stringify(article)
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});