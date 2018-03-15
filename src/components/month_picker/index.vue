<template>
	<div class="month-picker">
		<input 
			type="text"
			readonly
			placeholder="请选择月份" 
			v-model="param.year + (param.year && param.month ? '-' : '') + param.month" 
			@click="showItem($event)">
		<div class="mask" v-show="show" @click="showItem($event)"></div>
		<div class="month-content" v-show="show" :style="style">
			<div class="year-box">
				<p class="fl chooseyear" @click="nextYear(-1)">&lt;</p>
				<p class="fr chooseyear" @click="nextYear(1)">&gt;</p>
				<p class="yearval">{{ param.year || 2018}}</p>
			</div>
			<ul class="month-details">
				<li v-for="x in monthList">
					<div v-for="y in x" 
						:class="{active: y.value === param.month}"
						@click="selectItem(y)">
						{{ y.option }}
					</div>
				</li>
			</ul>
			<div class="month-btn">
				<span @click="hideItem">取消</span>&nbsp;&nbsp;
				<span @click="clearItem">清空</span>&nbsp;&nbsp;
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	const monthPciker = {
		name: 'monthPciker',
		props: {
			param: {
				type: Object,
				required: true
			},
			callback: {
				type: Function
			}
		},

		created () {
			this.$nextTick(this.dataCheck);
		},

		data () {
			return {
				show: false,
				monthList: [
					[
						{option: '一月', value: 1}, 
						{option: '二月', value: 2}, 
						{option: '三月', value: 3}, 
					],
					[
						{option: '四月', value: 4}, 
						{option: '五月', value: 5}, 
						{option: '六月', value: 6},
					],
					[
						{option: '七月', value: 7}, 
						{option: '八月', value: 8}, 
						{option: '九月', value: 9},
					],
					[
						{option: '十月', value: 10}, 
						{option: '十一月', value: 11}, 
						{option: '十二月', value: 12},
					]
				],
				style: {
					width: '200px',
					left: '50%',
					top: '50%',
				}
			}
		},
		methods: {
			getElePosition(ele) {
	            let offsetLeft = 0, offsetTop = 0;
	            while (ele != null) {
	                offsetLeft += ele.offsetLeft;
	                offsetTop += ele.offsetTop;
	                ele = ele.offsetParent;
	            }
	            return {
	            	offsetLeft,
	            	offsetTop
	            };
	        },
	        /** 年或月为空时取当前年或月 */
	        dataCheck () {
	        	const param = this.param;
	       		const { year, month } = param;
	       		let yearFlag = Number.isInteger(year)
	       			&& year > 0;
	       		let monthFlag = Number.isInteger(month)
	       			&& month >= 1
	       			&& month <= 12;

	        	if(year && !yearFlag) {
	        		throw new Error(`year must be an positive integer.`)
	        	}
	        	if(month && !monthFlag) {
	        		throw new Error(`month must be an positive integer.1 <= month <= 12;`)
	        	}
	        },

			showItem ($event) {
				const style = this.style;
				let inputTarget = $event.target;
				let computedStyle = window.getComputedStyle(inputTarget);
				let position = this.getElePosition(inputTarget);
				let w = parseInt(computedStyle.width);
				let h = parseInt(computedStyle.height);
				console.log(h)
				Object.assign(this.style, {
					width: w + 'px',
					left: position.offsetLeft + 'px',
					top: position.offsetTop + h + 'px',
				})
				this.show = !this.show;
			},
			hideItem () {
				this.show = false;
			},
			nextYear (step) {
				const year = parseInt(this.param.year) || new Date().getFullYear();
				this.param.year = year + step;
			},
			selectItem (y) {
				const param = this.param;
				param.month = y.value;
				param.year = param.year ? param.year : new Date().getFullYear();
				this.show = false;
			},
			clearItem () {
				this.param.year = '';
				this.param.month = '';
				this.param.value = '';
			}
		}
	}
	export default monthPciker;
</script>

<style type="text/css" lang="less">
	.month-picker {
		.fl {
			float: left;
		}
		.fr {
			float: right;
		}
		> input {
			box-sizing: border-box;
			width: 100%;
			height: 36px;
			padding: 0 10px;
			border:solid 1px #ccc;
			line-height: 36px;
		}
		.mask {
			position: fixed;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			background-color: rgba(0, 0, 0, .1);
			cursor: pointer;
		}
		.month-content {
			position: fixed;
			background-color: #fff;
			box-shadow: 0px 2px 4px #ddd;
			font-size: 14px;
			.year-box {
				box-sizing: border-box;
				background-color: #f1f4f7;
				padding: 0 10px;
				height: 36px;
				line-height: 36px;
				.chooseyear {
					cursor: pointer;
					font-size: 16px;
					&:hover {
						color: #1abc9c;
					}
				}
				.yearval {
					text-align: center;
				}
			}
			.month-details {
				li {
					display: flex;
					> div {
						flex: 1;
						text-align: center;
						line-height: 36px;
						cursor: pointer;
						&:hover {
							background-color: #f1f4f7;
							color: #1abc9c;
						}
					}
					.active {
						background-color: #f1f4f7;
						color: #1abc9c;
					}
				}
			}
			.month-btn {
				box-sizing: border-box;
				height: 36px;
				line-height: 36px;
				color: #1abc9c;
				font-size: 14px;
				border-top: solid 1px #efefef;
				text-align: right;
				padding-right: 24px;
				cursor: pointer;
				&:hover {
					opacity: .8;
				}
			}
		}

	}
</style>