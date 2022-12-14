import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev'


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(middleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err){
    // eslint-disable-next-line no-console
    console.log(err);
  } else{
    open('http://localhost:'+ port);
  }
})
