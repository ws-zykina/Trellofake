import axios from 'axios';
import store from '../store';

const instance = axios.create({
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	},
	mode: 'cors',
	crossdomain: true
});

instance.defaults.headers.get['Content-Type'] = 'application/json';
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.put['Content-Type'] = 'application/json';
instance.defaults.headers.patch['Content-Type'] = 'application/json';

instance.interceptors.request.use(
  async (config) => {


    const token = await sessionStorage.getItem( "token" );

    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   response => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
// 		console.log('401');
//     }
//     return Promise.reject(error);
//   }
// );



export default instance;
