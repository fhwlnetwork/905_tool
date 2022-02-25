//截取信息
export default {
    namespaced: true,
    actions: {
        Change_message(state,value){
            //信息转换
            state.commit('getmessage',value)
        },

    },
    mutations: {
        // Change_message(state,value){
        //     // console.log('aaaaa',state.initmessage);
        //     state.initmessage=value.substr(0,this.getBlength(value))
        //     console.log(state.initmessage);
        // },
        getmessage(state,value){
          
            //设备id
            state.machine=value.substr(10,12)
            //时间
            state.firsttime=value.substr(238,10);
            
            state.secondtime=value.substr(248,4)
            //行程 xxxxx.xkm
            state.count_kilo=value.substr(252,6)/10
            //空驶里程xxxxx.xkm
            state.Air_mileage=value.substr(258,4)/10
        
            //附加费
            state.extra_charge=value.substr(262,6)
            //等待计时时间
            state.wait_time=value.substr(268,4)
            //交易金额
            state.trading_volume=value.substr(272,6)/10
        },
        designDemo(state,value){
			state.top=value
			console.log('aaa',value,state.top);
		}

    },
    state: {
        //初始化输入信息
        initmessage:'',
        machine:'等待输入码流',
        //上车时间
        firsttime:Date(),
        secondtime:Date(),
        wait_time:Date(),
        //计程公里
        count_kilo:'',
        Air_mileage:'',
        extra_charge:'',
        trading_volume:'',
        //初始化长度
        len:0,
        count:0,
        top:''
    },
    getters: {

    },
}