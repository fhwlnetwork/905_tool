/**
 * 
 * @param {*} value 
 * 人脸格式化
 * 7e8bd200301034555566660007313233313234323100000000000000000000000000620210345555666622021115015200010a00000000000003000002777e
 */


 export default {
    namespaced: true,
    actions: {
        Change_message(state,value){
            state.commit('getmessage',value)
        } 
    },
    mutations: {
        getmessage(state,value){
            //设备id
            state.machine=value.substr(10,12)
            //比对结果 0:比对成功，1比对失败
            state.comparison=value.substr(53,2)
            console.log(state.comparison)
            //业务类型 0:签到，1：动态查岗
            state.type_service=value.substr(55,2)
            //相似度 范围0---100
            state.similate=value.substr(57,2)
            //通道号
            state.chanel=value.substr(59,2)
        }, 

    },
    state: {
        machine:'',
        comparison:'', 
        type_service:'', 
        similate:'',
        chanel:''
        

    },
    getters: {

    },
}
