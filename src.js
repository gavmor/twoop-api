import babelPolyfill from 'babel-polyfill';
import dotenv from 'dotenv';
import Twax from 'twax';
import koa from 'koa';
import koaPath from 'koa-path';

dotenv.config();

const app = koa();
const route = koaPath();
const twax = new Twax();

app.use(route('/:handle', function *(){
  yield twax.taxonomize(this.params.handle)
            .then(body => Object.assign(this, {body}));
}));

console.log('listening');
app.listen(process.env.PORT || 3000);