/**
 * 
 * @param {*} value 
 * 时间格式化
 */


export default {
        namespaced: true,
        actions: {
                /**
                 * 
                 * @param {*} state 
                 * @param {*} param1 
                 * first_time 上车时间 YY-MM-DD hh-mm
                 * 下车时间hhmm
                 */
                dataChange(state, [first_time, second_time]) {

                        let first_time_new = '20' + first_time.substr(0, 2) + '-' + first_time.substr(2, 2) + "-" + first_time.substr(4, 2) + " " + first_time.substr(6, 2) + ":" + first_time.substr(8, 2)
                      
                        let second_time_new = '20' + first_time.substr(0, 2) + '-' + first_time.substr(2, 2) + "-" + first_time.substr(4, 2) + " " + second_time.substr(0, 2) + ":" + second_time.substr(2, 4)
                        state.commit('getDate', [first_time_new, second_time_new])

                }
        },
        mutations: {
                getDate(state, [first_time, second_time]) {
                        console.log('aasd', first_time);
                        state.first_time = first_time
                        state.second_time = second_time
                }
        },
        state: {
                first_time: '',
                second_time: ''
        },
        getters: {

        },
}
