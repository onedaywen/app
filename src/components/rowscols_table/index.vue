<template>
	<div class="rowscols-table-box">
		<!-- <table class="rowscols-table">
			<tr>
				<th v-for="x in param.titleArr" :style="x.style" :class="x.class">
					{{ x.text }}
				</th>
			</tr>
			<tr v-for="trObj in param.trArr"  
				:style="trObj.style" 
				:class="trObj.class">
				<td v-for="tdObj in trObj.data"
					:style="tdObj.style" 
					:class="tdObj.class"
					:colspan="tdObj.colspan || 1"
					:rowspan="tdObj.rowspan || 1">
					<div v-if="dObj"
						 v-for="dObj in tdObj.data"
						 :style="dObj.style" 
						 :class="dObj.class"
						 @click="dObj.click && dObj.click()">
						<span v-if="dObj.text">
							{{ dObj.text }}
						</span>
						<input type="text" name="" 
							   v-if="dObj.vmodel"
							   v-model="dObj.vmodel"
							   :readonly="dObj.readonly">
						<img :src="dObj.src"
							 v-if="dObj.src">
						<span v-if="!dObj || typeof dObj === 'string' || typeof dObj === 'number'">
							{{ dObj }}
						</span>
					</div>
				</td>
			</tr>
		</table> -->

		<table class="rowscols-table">
			<tr>
				<th v-for="x in param2.titleArr" :style="x.style" :class="x.class">
					{{ x.text }}
				</th>
			</tr>
			<tr v-for="x in param2.contentArr"  
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
				// param: {
				// 	titleArr: [
				// 		{
				// 			text: 'aaaaa11'
				// 		},{
				// 			text: 'aaaaa12'
				// 		},{
				// 			text: 'aaaaa13'
				// 		},{
				// 			text: 'aaaaa14'
				// 		},{
				// 			text: 'aaaaa15'
				// 		}
				// 	],
				// 	trArr:[
				// 		//trObj
				// 		{
				// 			class: 'totalcols',
				// 			data: [
				// 				{
				// 					data: [
				// 						{
				// 							text:'11111',
				// 							src:'asdfka.jpg',
				// 							vmodel: 'hello world'
				// 						}
				// 					]
				// 				},
				// 				{
				// 					colspan: 3,
				// 					data: [
				// 						{
				// 							text: '22222221'
				// 						},
				// 						222233332,
				// 						'222233333',
				// 					]
				// 				},
				// 				{
				// 					rowspan: 2,
				// 					data: [
				// 						{
				// 							text:'33333'
				// 						}
				// 					]
				// 				}
				// 			]
				// 		},
				// 		{
				// 			class: 'totalcols',
				// 			data: [
				// 				{
				// 					data: [
				// 						{
				// 							text:'44444'
				// 						}
				// 					]
				// 				},
				// 				{
				// 					colspan: 2,
				// 					data: [
				// 						{
				// 							text:'5555'
				// 						}
				// 					]
				// 				},
				// 				{
				// 					data: [
				// 						{
				// 							text:'66666'
				// 						}
				// 					]
				// 				}
				// 			]
				// 		}
				// 	]
				// },

				param2: {
					titleArr: [
						{
							text: 'aaaaa11'
						},{
							text: 'aaaaa12'
						},{
							text: 'aaaaa13'
						},{
							text: 'aaaaa14'
						},{
							text: 'aaaaa15'
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