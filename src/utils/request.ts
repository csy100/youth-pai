import axios from 'axios';

// 创建 axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API || 'http://localhost:5001/api',
  timeout: 5000, // 请求超时时间
});

export default request;
