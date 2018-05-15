import axios from 'axios';

export default function callApi(endpoint,method='GET',body){
	return axios({
		method:method,
		url:`${endpoint}`,
		data:body,
		headers: {
			"Accept": 'application/json',
            "Content-Type" : 'application/json'
		   
        }
	}).catch(err =>{
		console.log(err);
	});
}

