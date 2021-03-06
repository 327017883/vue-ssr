process.env.VUE_ENV = 'server';
const isProd = process.env.NODE_ENV === 'production';

const fs = require('fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const serialize = require('serialize-javascript')
const favicon = require('serve-favicon')
const lru = require('lru-cache')
const vueRenderer = require('vue-server-renderer')
const resolve = file => path.resolve(__dirname, file)
const devServer = require('./build/dev-server')

const app = express()

const createRenderer =  bundle => {
  // https://github.com/isaacs/node-lru-cache#options
  return vueRenderer.createBundleRenderer(bundle, {
    cache: lru({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

const parseHTML = tmpl => {
  const placeholder = '{{ APP }}'
  const i = tmpl.indexOf(placeholder)
  return {
    head: tmpl.slice(0, i),
    tail: tmpl.slice(i + placeholder.length)
  }
}

const parseMeta = (head, context) => {

  const title = context.title || ''
  const description = context.description || ''
  const keywords = context.keywords || ''
  head = head.replace(/(<title>)(.*?)(<\/title>)/, `$1${title}$3`)
  head = head.replace(/(<meta name=description content=")(.*?)(">)/, `$1${description}$3`)
  head = head.replace(/(<meta name=keywords content=")(.*?)(">)/, `$1${keywords}$3`)
  return head
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

if(isProd) {
  renderer = createRenderer(fs.readFileSync(resolve('./dist/server-bundle.js'), 'utf-8'))
  indexHTML = parseHTML(fs.readFileSync(resolve('./dist/index.html'), 'utf-8'))
} else {
  devServer(app, {
    indexUpdated: index => {
      indexHTML = parseHTML(index)
    },
    bundleUpdated: bundle => {
      renderer = createRenderer(bundle)
    }
  })
}

if (process.env.NODE_ENV == 'development') {
  let proxyMiddleware = require('http-proxy-middleware');

  app.use('/mobile', proxyMiddleware({target: 'https://weixin.100lending.com', changeOrigin: true}));
}

app.use(compression({ threshold: 0 }))
app.use(favicon('./public/favicon.ico'))
app.use('/dist', serve('./dist'))
app.use('/public', serve('./public'))

app.get('*', (req, res) => {

  if(!renderer) {
    return res.end('the renderer is not ready, just wait a minute')
  }

  res.setHeader('Content-Type', 'text-html')

  const context = {url: req.url}
  const renderStream = renderer.renderToStream(context)

  renderStream.once('data', () => {
    res.write(parseMeta(indexHTML.head, context))
  })

  renderStream.on('data', chunk => {
    res.write(chunk)
  })

  renderStream.on('end', () => {
    if(context.initialState){
      res.write(
        `<script>window.__INITIAL_STATE__=${
          serialize(context.initialState, {isJSON: true})
        }</script>`
      )
    }

    res.end(indexHTML.tail)
  })

  renderStream.on('error', err => {
   
    if(err && err.code == '404'){
      res.status(404).end('404, Page Not Found')
      return
    }
    res.status(500).end('500 Internal Error')
    console.log(err)
  })
});

//解密
var NodeRSA = require('node-rsa');
var privateKey = fs.readFileSync("src/rsa-key/private.key","utf-8"); 
var key = new NodeRSA(privateKey.replace(/\r\n/g, '\n'));
key.setOptions({encryptionScheme: 'pkcs1'});

app.post('/user/login.json', function(req, res){

  var password = key.decrypt(req.query.password, 'utf8');
  var loginId = key.decrypt(req.query.loginId, 'utf8');

  console.log('手机号为：' + loginId)
  console.log('登录密码为：' + password)

  res.send({code: 1, message: '操作成功', data: '暂无数据' });
});

const PORT = process.env.PORT || 8086
const HOST = process.env.HOST || 'localhost'

app.listen(PORT, HOST, () => {
  console.log(`server started at ${HOST}:${PORT} `);
})