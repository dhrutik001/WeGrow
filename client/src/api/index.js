import axios from 'axios';

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const url = process.env.Ml_Model_Url;

export const predictOptimumCrop = data => axios.post(url, data, config);
