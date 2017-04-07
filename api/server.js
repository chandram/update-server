const path = require('path');
const fs = require('fs');
// console.log("__dirname ", __dirname);
const data = path.join(__dirname, 'data/');
const jsonServer = require('json-server');
const _PORT = 9002;
var db = {};
var files = fs.readdirSync(data);

files.forEach(function (file) {
    db[path.basename(file, '.json')] = require(path.join(data, file));
});

const router = jsonServer.router(db);

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

server.use(jsonServer.rewriter({
  '/api/': '/'
}))

// Returns an Express router; mount the router on /api.
// server.use('/api', router);
server.use(router);

server.listen(_PORT, () => {
  console.log(`API server started at ${_PORT}`);
});



