onst http = require('http');

const server = http.createServer((req, res)=> {

  const url = req.url;
  const method = req.method;

  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1> Mujaffar </h1></script></body>');
  res.write('</html>');
  res.end();
 
  });
server.listen(4000);c