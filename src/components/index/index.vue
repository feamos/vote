<template>
	<div class="tovote">
		<!-- <button @click="modal = !modal" v-show="!modal">发起投票</button> -->
		<router-link to="/tovote" tag="em">发起投票</router-link>
	</div>
</template>
<script>
	export default {
	  data () {
	    return {
	      modal: false
	    }
	  }
	}
</script>
<style scope>
	.tovote {
		width:100%;
		position: relative;
	}
	.tovote em{
		width: 169px;
		height: 34px;
		line-height:34px;
		padding: 0px 53px;
		font-size: 14px;
		color: #ffffff;
		background: #579be5;
		border-radius: 10px;
		border:0;
		cursor: pointer;
		outline: none;
		position: absolute;
		right: 40px;
		top: 450px;
	}
	.content {
		width: 100%;
		height: 100%;
		background: red;
	}	
</style>
