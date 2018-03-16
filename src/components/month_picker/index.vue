<template>
	<div class="month-picker">
		<input 
			type="text"
			readonly
			placeholder="请选择月份" 
			v-model="param.year + (param.year && param.month ? '-' : '') + param.month" 
			@click="showItem($event)">
		<div class="month-mask" v-show="show" @click="hideItem($event)"></div>

		<div class="month-content" v-show="show" :style="style">
			<section class="year-box">
				<p class="fl chooseyear"
				   :class="{'not-selectable': param.year === param.limitStartYear }"
				   @click="nextYear(-1)">&lt;</p>
				<p class="fr chooseyear" 
				   :class="{'not-selectable': param.year === param.limitEndYear }"
				   @click="nextYear(1)">&gt;</p>
				<p class="yearval">{{ param.year || 2018}}</p>
			</section>

			<ul class="month-details">
				<li v-for="x in monthList">
					<div v-for="y in x" 
						:class="{active: y.month === param.month && y.selectable, 'not-selectable': !y.selectable}"
						@click="selectItem(y)">
						{{ y.option }}
					</div>
				</li>
			</ul>
			
			<section class="month-btn">
				<span @click="hideItem">取消</span>&nbsp;&nbsp;
				<span @click="clearItem">清空</span>&nbsp;&nbsp;
			</section>
		</div>
	</div>
</template>

<script type="text/javascript">
	import MonthPicker from './index.js';
	export default MonthPicker;
</script>

<style type="text/css" lang="less">
	@import './index.less';
</style>