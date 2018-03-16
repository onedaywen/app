<template>
	<div>
		<DivTemplate :param="param"/>
		<div v-if="param.data && param.data.length"
			 :style="z.style" 
			 :class="z.class"
			 v-for="z in param.data">
			 <DivTemplate :param="z"/>
		</div>
	</div>
</template>

<script type="text/javascript">
	import DivTemplate from './div_template.vue';
	const TdTemplate = {
		name: 'TdTemplate',
		props: ['param'],
		components: {
			DivTemplate
		}
	};
	export default TdTemplate;
</script>

<style type="text/css" lang="less">
	
</style>