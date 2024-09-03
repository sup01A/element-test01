import instance from "@/utils/request.js";
export const categoryListServiceApi = ()=>{
    return instance.get('/category')
}