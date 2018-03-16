<template>
	<div>
		<transition name="fade">
			<router-view></router-view>
		</transition>
		<div>
			<Navigation/>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Navigation from 'components/navigation/index.vue';
	export default {
		components: {
			Navigation,
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