import axios from 'axios';

const time = new Date().getTime();

// 请求时的拦截
axios.interceptors.request.use(function (config) {

    // 发送请求之前做一些处理
    if(config.method == 'get'){
    	config.url = config.url + 'time=' + time;
    }
    else{
    	config.url = config.url + 'time=' + time + '&' + config.data;
    	config.data = '';
    }
    
    return config;

  }, function (error) {
    // 当请求异常时做一些处理
    return Promise.reject(error);
  });

if (process.env.NODE_ENV == 'development') {

	var getConfig =  async() => {
		var res = await axios.get('/mobile/config.json?');
		return res.data.data;
	};

	var getHomeData = async() => {
		var res = await axios.get('/mobile/v140/home.json?');
		return res.data.data;
	};

	var getCurrentDetail = async() => {
		var res = await axios.get('/mobile/product/currentDetail.json?');
		return res.data;
	};

	var getProductList = async() => {
		var res = await axios.get('/mobile/v140/product/listing.json?', { params: { pageSize: 20,  productType: 3, pageNum: 0}});
		return res.data;
	};

	var getSporadictList = async() => {
		var res = await axios.get('/mobile/v140/product/listing.json?', { params: { pageSize: 20,  productType: 1, pageNum: 0}});
		return res.data;
	};

	var login = async(o) => {
		var qs = require('querystring');		
		var res = await axios.post('/user/login.json?', qs.stringify({
		    loginId: o.loginId,  
			password: o.password,
			captchaCode: '66666'
		}), {
			headers: { 
				'phoneuuid': 'wx',
				'Authorization': '', 
				//"Content-Type": "application/json;charset=utf-8",
				"Content-Type":'application/x-www-form-urlencoded'
			}
		});
		return res.data;
	}
}

export { 
	getConfig,
	getHomeData,
	getCurrentDetail,
	getProductList,
	getSporadictList,
	login
};

