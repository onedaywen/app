<template>
	<div>
		<transition name="fade">
			<router-view></router-view>
		</transition>
		<div>
			<Nav/>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Nav from 'components/nav/index.vue';
	export default {
		components: {
			Nav,
		}
	}
</script>

<style type="text/css" lang="less">
	@import 'common/less/reset.less';
	@import 'common/less/variable.less';
	@import 'common/less/public.less';
	body {
		.font-size(15);
	}
</style>