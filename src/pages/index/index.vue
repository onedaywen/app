<template>
	<div class="index">
		<!-- <div style="width: 220px;">
			<MonthPicker :param="monthPickerParam"/>
		</div> -->
		<div style="width: 1000px;">
			<rowscolsTable/>
		</div>
	<!-- 	<div style="width: 1000px;overflow: auto;">
			<rowscolsTable/>
		</div> -->
		<div class="index-content">

			<ul class="nav-list clear" >
				<li v-for="x in navList">
					<img :src="x.src">
					<p>
						{{ x.name }}
					</p>
				</li>
			</ul>
			<ul class="img-list">
				<li v-for="x in imglist" class="clear">
					<div class="img-item">
						<img :src="x.src">
					</div>
					<div class="img-desc">
						<p>{{ x.itemName }}</p>
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