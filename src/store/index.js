//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
import  getmessgaeOptions from './getmessgae'
import  dateChangeOptions from './date'
//应用Vuex插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
	modules:{
		countAbout:countOptions,
		personAbout:personOptions,
		getmessgaeaAbout:getmessgaeOptions,
		dateChangeAbout:dateChangeOptions
	}
})