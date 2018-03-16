<template>
	<div class="rowscols-table-box">
		<table class="rowscols-table">
			<tr>
				<th v-for="x in param.titleArr" 
					:style="x.style" 
					:class="x.class" :width="x.width"
					@mousedown="mousedown($event, x)"
					@mouseup="mouseup($event, x)">
					<TdTemplate :param="x"/>
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
					<TdTemplate :param="y"/>
				</td>
			</tr>
		</table>
	</div>
</template>


<script type="text/javascript">
	import TdTemplate from './td_template.vue';
	const rowscolsTable = {
		name: 'rowscolsTable',
		components: {
			TdTemplate
		},

		data () {
			return {
				eventTarget: '',
				param: {
					titleArr: [
						'商品',
						'单价/数量',
						'实付金额',
						'运费',
						'订单/包裹状态',
						'买家',
						'物流信息',
						{
							text: '操作',
							click () {
								alert('操作')
							}
						}
					],
					contentArr: [
						[
			  
							{
								colspan: 8,
								data: [
									{
										class: 'order-code',
										style: {
											color: '#1abc9c'
										},
										text: '订单号码： 105240184796',
										click () {
											alert('跳转到订单详情页')
										}
									},
									'下单时间：2018-03-16 15:34:35',
									'交易单号：2018031621001004150527890114',
									'总额：￥0.40元',
									'已退款'
								]
							},
						],
						[
			  
							{
								colspan: 8,
								data: [
									'店铺名称：WG的小店',
									{
										text: '包裹单号： 205790199196',
										class: 'package-code',
										style: {
											color: '#1abc9c'
										},
										click () {
											alert('跳转到包裹详情页')
										}
									},
									'营业点名称：永新汇地下仓库'
								]
							},
						],
						[
							{
								data: [
									{
										src: 'asdfasdf.jpg',
										click () {
											alert('全屏查看图片')
										},
									},{
										text: '商品名称001',
									},{
										text: '商品规格001',
									},{
										text: '商品留言001',
									}
								]
								
							},
							'19.9*100',
							'1990',
							{
								rowspan: 3,
								text: '24.00'
							},{
								rowspan: 3,
								text: '退款完成'
							},{
								rowspan: 3,
								data: [
									'买家姓名：温一天',
									'买家手机号：13714034157'
								]
							},{
								rowspan: 3,
								text: '商品已发往深圳松岗分拨中心'
							},{
								rowspan: 3,
								data: [
									{
										class: 'confirm',
										text: '确认收货',
										click () {
											alert('确认收货')
										}
									}
								]
								
							}
						],
						[
							{
								data: [
									{
										src: 'asdfasdf.jpg',
										click () {
											alert('全屏查看图片')
										},
									},{
										text: '商品名称002',
									},{
										text: '商品规格002',
									},{
										text: '商品留言002',
									}
								]
								
							},
							'29.9*100',
							'2990'
						],
						[
							{
								data: [
									{
										src: 'asdfasdf.jpg',
										click () {
											alert('全屏查看图片')
										},
									},{
										text: '商品名称003',
									},{
										text: '商品规格003',
									},{
										text: '商品留言003',
									}
								]
								
							},
							'39.9*100',
							'3990'
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