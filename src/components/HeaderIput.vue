<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="datamessage" @keyup.enter="increment(datamessage)"/>
		</div>
	</section>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'HeaderInput',
		data() {
			return {
				datamessage:'7e0b0500831035001112234e230000060000000148011462b1044c84870000002201261511130000060000000328011461e4044c84690019432201261500105874f2805874f2cd01000000000000000000000000303030303030303030303030303030303337303638353139393630353132323631390022012615101510000000000000000000000010000000a3b1003e7e'
			}
		},
		//测试,记得删除
		created(){
		this.$store.dispatch('getmessgaeaAbout/Change_message',this.datamessage)
		},
		methods: {
			
		
			...mapActions('getmessgaeaAbout',{increment:'Change_message'}),
			
			
		},
	}
</script>
