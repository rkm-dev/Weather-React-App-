var axios = require('axios');

const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=bb8b42d9e205bb6b2bc34d9146793838&units=metric';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${URL}&q=${encodedLocation}`;

		return axios.get(requestURL).then(function(res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
};