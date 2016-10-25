import babelPolyfill from 'babel-polyfill';
import dotenv from 'dotenv';
import Twax from 'twax';
import koa from 'koa';
import path from 'koa-path';
import cors from 'koa-cors';
import logger from 'koa-logger';

dotenv.config();

const app = koa();
const route = path();
const twax = new Twax();

app.use(cors());
app.use(logger());

app.use(route('/user_id/:user_id', function *() {
  yield twax.taxonomize({...this.params})
            .then(body => Object.assign(this, {body}));
}));

app.use(route('/screen_name/:screen_name', function *() {
  console.log(this.params);
  yield twax.taxonomize({...this.params})
            .then(body => Object.assign(this, {body}));
}));

console.log('listening');
app.listen(process.env.PORT || 3000);