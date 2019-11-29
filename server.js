const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/dist/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get("*", (req, res) => {
  let url = path.join(path.join(__dirname, 'dist', 'index.html'));
  if (!url.startsWith('/app/')) // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});
app.listen(port);