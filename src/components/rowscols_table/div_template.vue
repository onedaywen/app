<template>
	<div>
		
		<span v-if="param && param.text" @click="param.click && param.click()">
			{{ param.text }}
		</span>
		
		<span v-if="!param || typeof param === 'string' || typeof param === 'number'">
			{{ param || '' }}
		</span>

		<img :src="param.src"
			 v-if="param.src"
			 @click="param.click && param.click()">

		<input tparampe="text" name="" 
		   v-if="param.vmodel"
		   v-model="param.vmodel"
		   :readonly="param.readonly"
		   @focus="param.focus && param.focus()"
		   @change="param.change && param.change()">

	</div>
</template>

<script type="text/javascript">
	const DivTemplate = {
		name: 'TdTemplate',
		props: ['param']
	};
	export default DivTemplate;
</script>

<style type="text/css" lang="less">
	
</style>