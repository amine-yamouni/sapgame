const app = require('express')();
const path = require('path');
const serveStatic = require('serve-static');

app.use('/', serveStatic(__dirname));
app.get(/.*/, (_, res) => res.sendFile(path.join(__dirname, './dist/index.html')));

const httpServer = app.listen(process.env.PORT || 8080);

httpServer.setTimeout(1000);
