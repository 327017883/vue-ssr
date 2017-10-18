import axios from 'axios';

const time = new Date().getTime();

if (process.env.NODE_ENV == 'development') {
	var getConfig =  async() => {
		var res = await axios.get('/mobile/config.json', { params: { time: time }});
		return res.data.data;
	};

	var getHomeData = async() => {
		var res = await axios.get('/mobile/v140/home.json?', { params: { time: time }});
		return res.data.data;
	};
}

export { 
	getConfig,
	getHomeData
};

