import instance from "@/utils/request.js";
export const homeServiceApi = ()=>{
    return  instance.get('/home')
}