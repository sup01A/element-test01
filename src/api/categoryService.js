import instance from "@/utils/request.js";
export const categoryListServiceApi = ()=>{
    return instance.get('/category')
}
export const addCategoryServiceApi = (data)=>{
    return instance.post('/category',data)
}
export const updateCategoryServiceApi = (data)=>{
    return instance.put('/category',data)
}