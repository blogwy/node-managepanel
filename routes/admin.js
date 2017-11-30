const express = require('express');
const product = require('../models/product.js');
const visit = require('../models/visit.js');
const user = require('../models/user.js');
const sumvisit = require('../models/sumvisit.js');
const cust = require('../models/cust.js');
const Router = express.Router();


Router.use((req, res, next) => {
  if(req.url === "/signin") return next();
  if(req.url === "/signup") return next();
	if(req.url === "/signinadmin") return next();
	if(req.url === "/validat") return next();
	const sessionrealname = req.session.realname
	// 如果没有sesion 跳到登录页面
	if(!sessionrealname){
		res.redirect('/admin/signin')  // 重定向
	}
	next()
})


Router.get('/',(req, res) => {
	sumvisit.findOne({
		_id: '5a1c1bc1cf00bd24d4ac944b'
	}).then(doc => {
		var num = doc.Sumvisit;
		num++;
		sumvisit.update({_id: '5a1c1bc1cf00bd24d4ac944b'},{Sumvisit: num}).then(result => {
			let shopnum,kefunum,yonghunum;
			user.find().then(aa => { 
				kefunum = aa.length
				product.find().then(bb => {
					shopnum = bb.length
					cust.find().then(cc => {
						yonghunum = cc.length
						res.render('index',{
							realname: req.session.realname,
							number: num,
							kefunum,
							shopnum,
							yonghunum
						})
					})
				})
			})	
		})
	})
})

Router.get('/user-list', require('../control/con_userlist.js'))
Router.get('/add-user', require('../control/con_adduser.js').getshowAddUser)
Router.post('/add-user', require('../control/con_adduser.js').postshowAddUser)
Router.get('/userdel', require('../control/con_userdel.js'))
Router.get('/shop-list', require('../control/con_shoplist.js'))
Router.get('/add-shop', require('../control/con_addshop.js').getAddShop)
Router.post('/add-shop', require('../control/con_addshop.js').postAddShop)
Router.get('/cs-list', require('../control/con_cslist.js'))
Router.get('/add-cs', require('../control/con_addcs.js').getshowAddCs)
Router.post('/add-cs', require('../control/con_addcs.js').postshowAddCs)
Router.get('/personal', require('../control/con_personal.js').getshowPersonal)
Router.post('/personal', require('../control/con_personal.js').postshowPersonal)
Router.get('/signin', require('../control/con_signin.js').getSignin)
Router.post('/signin', require('../control/con_signin.js').postSignin)
Router.get('/signinadmin', require('../control/con_signinadmin.js').getSigninadmin)
Router.post('/signinadmin', require('../control/con_signinadmin.js').postSigninadmin)
Router.get('/signup', require('../control/con_signup.js').getSignup)
Router.post('/signup', require('../control/con_signup.js').postSignup)
Router.get('/editshop', require('../control/con_editshop.js').getShopedit)
Router.post('/editshop', require('../control/con_editshop.js').postShopedit)
Router.get('/shopdel', require('../control/con_shopdel.js'))
Router.get('/csdel', require('../control/con_csdel.js'))
Router.get('/editcs', require('../control/con_editcs.js').getcsedit)
Router.post('/editcs', require('../control/con_editcs.js').postcsedit)
Router.get('/validat', require('../control/con_verification.js'))

Router.get('/signout', (req, res) => {
	req.session.destroy(err => {
		if(err){
			res.send('退出失败')
		}else{
			console.log(req.session)
			res.redirect('/admin/signin')
		}
	})
})


module.exports = Router