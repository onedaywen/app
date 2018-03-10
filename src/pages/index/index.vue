<template>
	<div class="index">
		<div class="title">{{ title }}</div>
		<div class="index-content">
			<ul class="img-list">
				<li v-for="x in imglist">
					<div>
						<img :src="x.src">
					</div>
				</li>
			</ul>
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