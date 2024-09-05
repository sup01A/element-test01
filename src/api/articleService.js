import instance from "@/utils/request.js";
export const getArticleListBySearchCondition = (conditionSearchData)=>{
    return instance.get('/article',{params:conditionSearchData})
}