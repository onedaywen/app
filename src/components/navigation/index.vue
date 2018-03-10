<template>
	<div class="footer_navigation">
		<div class="nav-item">
			<router-link to="/">首页</router-link>	
		</div>
		<div class="nav-item">
			<router-link to="/shopcar">上传照片</router-link>	
		</div>
		<div class="nav-item">
			<router-link to="/personal_center">个人中心</router-link>	
		</div>
	</div>
</template>

<script type="text/javascript">
	
</script>

<style type="text/css" lang="less">
	@import '../../common/less/variable.less';
	.footer_navigation {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		.height(100);
		display: flex;
		.nav-item {
			flex: 1;
			text-align: center;
			.font-size(24);
			.height(100);
			.line-height(100);
			.padding(20, 20, 20, 10);
			background-color: skyblue;
		}
	}

</style>