<template>
	<div class="personal-center">
		<List :param="param">
			<div slot="listslot">
				<div v-for="(el, index) in param.data">
					<p>{{ index }}</p>
					<img :src="el">
				</div>
			</div>
		</List>
		<div>
			<input type="text" name="name" v-model="msg">
		</div>
	</div>
</template>

<script type="text/javascript">
	import index from './index.js';
	export default index;
</script>

<style type="text/css" lang="less">
	@import './index.less';
</style>