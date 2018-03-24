<template>
	<div class="nav">
		<ul class="nav-content">
			<li>
				<router-link to="/">主页</router-link>
			</li>
			<li>
				<router-link to="a">页面a</router-link>
			</li>
			<li>
				<router-link to="b">页面b</router-link>
			</li>
			<li>
				<router-link to="c">页面c</router-link>
			</li>

		</ul>
	</div>
</template>

<script type="text/javascript">
	
</script>

<style type="text/css" lang="less">
	@import '../../common/less/variable.less';
	.nav {
		position: fixed;
		left: 0;right: 0;
		bottom: 0;
		.height(100);
		border-top: solid 1px #eee;
		> .nav-content {
			height: 100%;
			display: flex;
			> li {
				flex: 1;
				> a {
					display: block;
					width: 100%;
					height: 100%;
					.line-height(100);
					text-align: center;
					.font-size(24);
				}
			}
		}
	}
</style>