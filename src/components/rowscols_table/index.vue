<template>
	<div class="rowscols-table-box">

		<table class="rowscols-table">
			<tr>
				<th v-for="x in param.titleArr" 
					:style="x.style" :class="x.class" 
					@mousedown="mousedown($event, x)"
					@mouseup="mouseup($event, x)">
					{{ x.text }}
				</th>
			</tr>
			<tr v-for="x in param.contentArr"  
				:style="x.style" 
				:class="x.class">
				<td v-for="y in x"
					:style="y.style" 
					:class="y.class"
					:colspan="y.colspan || 1"
					:rowspan="y.rowspan || 1">

					<span v-if="y.text" @click="y.click && y.click()">
						{{ y.text }}
					</span>
					<span v-if="!y || typeof y === 'string' || typeof y === 'number'">
						{{ y || '' }}
					</span>
					<img :src="y.src"
						 v-if="y.src"
						 @click="y.click && y.click()">
					<input type="text" name="" 
							   v-if="y.vmodel"
							   v-model="y.vmodel"
							   :readonly="y.readonly"
							   @focus="y.focus && y.focus()"
							   @change="y.change && y.change()">	 

					<div v-if="y.data && y.data.length"
						 :style="z.style" 
						 :class="z.class"
						 v-for="z in y.data">

						<span v-if="z.text" @click="z.click && z.click()">
							{{ z.text }}
						</span>

						<span v-if="!z || typeof z === 'string' || typeof z === 'number'">
							{{ z || ''}}
						</span>

						<img :src="z.src"
							 v-if="z.src"
							 @click="z.click && z.click()">

						<input type="text" name="" 
							   v-if="z.vmodel"
							   v-model="z.vmodel"
							   :readonly="z.readonly"
							   @focus="y.focus && y.focus()"
							   @change="y.change && y.change()">
					</div>

				</td>
			</tr>
		</table>
	</div>
</template>


<script type="text/javascript">
	const rowscolsTable = {
		name: 'rowscolsTable',
		// props: {
		// 	param: {
		// 		type: Object,
		// 		require: true
		// 	}
		// }
		data () {
			return {
				eventTarget: '',
				param: {
					titleArr: [
						{
							text: 'aaaaa11',
							style: {
								width: '100px'
							}
						},{
							text: 'aaaaa12',
							style: {
								width: '100px'
							}
						},{
							text: 'aaaaa13',
							style: {
								width: '100px'
							}
						},{
							text: 'aaaaa14',
							style: {
								width: '100px'
							}
						},{
							text: 'aaaaa15',
							style: {
								width: '100px'
							}
						}
					],
					contentArr: [
						[
							{
								colspan: 5,
								data: [
									{
										text: '总1'
									},{
										text: '总2'
									},{
										text: '总3'
									},
									'zong 4',
									{
										src: 'asdfasdf.jpg'
									},{
										vmodel: 'shuangxiang'
									}
								]
							},
						],
						[
							{
								src: 'asdfasdf.jpg',
								click () {
									alert('asdfasjdlkf')
								}
							},
							{
								vmodel: 1111,
							},
							{
								colspan: 2,
								text: 22222,
							},
							{
								rowspan: 2,
								text: 3333,
							},
						],
						[
							{
								text: 4444,
								style: {
									color: 'skyblue'
								},
								click () {
									alert('click')
								}
							},
							{
								colspan: 2,
								text: 5555,
							},
							{
								text: 6666,
							}
						]
					]
				}
			}
		},

		created () {

		},

		methods: {
			mousedown ($event, x) {
				let eventTarget = $event.target;
				let initWidth = parseInt(window.getComputedStyle(eventTarget).width) || 0;
				this.eventTarget = eventTarget;
				let fn = (e) => {
					x.style.width = initWidth + e.pageX - $event.pageX + 'px';
					console.log(x.style.width);
				};
				this.fn = fn;
				eventTarget.addEventListener('mousemove', fn, false);
			},

			mouseup ($event, x) {
				let fn = this.fn;
				this.eventTarget.removeEventListener('mousemove', fn, false);

			},
		}
	};

	export default rowscolsTable;
</script>

<style type="text/css" lang="less">
	.rowscols-table-box {
		.rowscols-table {
			width: 100%;
			text-align: center;
			word-break: break-all;
			border-collapse: collapse;
			font-size: 24px;
			th {
				cursor: e-resize
			}
			td, th {
				padding: 5px;
				border: solid 1px #999;
				input {
					width: 80%;
					padding: 0 10px;
					height: 30px;
					vertical-align: middle;
				}
				img {
					width: 80%;
					height: auto;
					vertical-align: middle;
				}
			}
		}
	}
</style>