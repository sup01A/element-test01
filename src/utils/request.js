import axios from "axios";

const baseURL = '/api';
const instance = axios.create({baseURL});
import {useTokenStore} from "@/stores/token.js";
import {ElMessage} from "element-plus";
import router from "@/route/index.js";
instance.interceptors.response.use(
    res =>{
        if (res.data.code===0){
            ElMessage.success(res.data.msg || '成功')
            return res.data
        }else {
            ElMessage.error(res.data.msg || '错误1')
            return Promise.reject(res.data)
        }
    },
    error => {
        if (error.response.status === 401){
            ElMessage.error("请先登录")
            router.push('/')
            return Promise.reject(error)
        }
        ElMessage.error(error.response.data.msg || '错误2')
        return Promise.reject(error)
    }
)
instance.interceptors.request.use(
    config =>{
        let tokenStore = useTokenStore();
        if (tokenStore.token){
            config.headers.Authorization = tokenStore.token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
export default instance