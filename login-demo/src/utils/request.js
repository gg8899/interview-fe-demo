import axios from "axios";
const request = axios.create({
    baseURL: '/api',
    timeout: 5000,
})


// 添加请求拦截器
request.interceptors.request.use(function (config) {
    return config;
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    console.log(response, 'responseresponseresponse');

    return response.data;
}, function (error) {
    return Promise.reject(error);
});


export default request