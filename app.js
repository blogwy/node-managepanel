const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const product = require('./api/api_product.js');
const admin = require('./routes/admin.js');
const db = require('./models/db');
const app = express();

// 中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
	secret: 'wally',
	resave: false,
	saveUninitialized: false,
	cookie: {maxAge: 1000*60*60}
}))

// 静态资源
app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads',express.static(path.join(__dirname, 'uploads')))

// 模板引擎
app.set('view engine', 'ejs')

// 路由
app.use('/api', product)
app.use('/admin', admin)


app.listen(3000, () => {
	console.log('server is running on localhost:3000')
})