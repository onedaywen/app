<template>
	<div class="pull-list">
		<slot name="listslot">

		</slot>
		<div class="footer-tips" v-show="param.pageNum === param.pageMax">
			到底啦。。。
		</div>
	</div>
</template>

<script type="text/javascript">
	const List = {
		name: 'List',
		props: {
			/**
			 * @type {Object}
			 * {
			 *   data: [],
			 *   add () {},
			 *   pageNum: 1,
			 *   pageMax: 10,
			 * }
			 */
			param: {
				type: Object,
				require: true
			}
		},
		data () {
			return {}
		},

		created () {},

		mounted () {
			this.scrollInit();
		},

		watch: {
			'param.add': function (list) {
				const param = this.param;
				if(typeof param.add == 'function') {
	            	param.add();
	            }
			}
		},

		methods: {
			scrollInit (e) {
				const param = this.param;
		        window.addEventListener("scroll", function(event) {
		            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		            if(document.documentElement.scrollHeight == document.documentElement.clientHeight + scrollTop ) {
		                if(typeof param.add == 'function') {
		                	if(param.pageNum >= param.pageMax) return;
		                	param.add();
		                	param.pageNum++;
		                	
		                }
		            }        

		        });	
			},
		}
	}

	export default List;
</script>


<style type="text/css" lang="less">
	@import '../../common/less/variable.less';
	.pull-list {
		.padding(10, 10, 10, 10);
		.font-size(30);
		margin-bottom: 120px;
		> p {
			.height(200);
		}
		.footer-tips {
			text-align: center;
			.font-size(30);
			color: #999;
		}
	}
</style>