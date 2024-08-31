import instance from "@/utils/request.js";
export const loginServiceApi = (username,password,rememberMe)=>{
    const params = new URLSearchParams();
    params.append("username",username)
    params.append("password",password)
    params.append("rememberMe",rememberMe)
    return instance.post('/user/login',params)
}
export const registerServiceApi = (username,password)=>{
    const params = new URLSearchParams();
    params.append("username",username)
    params.append("password",password)
    return instance.post('/user/register',params)
}