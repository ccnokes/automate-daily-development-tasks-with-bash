const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
// log out POST and PUT bodies
server.use((req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    console.log(req.body);
  }
  next();
});

server.get('/hello', (req, res) => {
  res.send('Hello! \n');
});

server.use('/api', router);
server.use('/api-protected', (req, res, next) => {
  if (req.headers.authorization !== 'Bearer 123') {
    res.status(401);
    res.send('Unauthorized to access this resource \n');
  } else {
    next();
  }
});
server.use('/api-protected', router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at :${PORT}`);
});
