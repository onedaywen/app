<template>
	<div class="pull-list">
		<slot name="listslot">

		</slot>
	</div>
</template>

<script type="text/javascript">
	const List = {
		name: 'List',
		props: {
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
		                	param.add();
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
		> p {
			.height(200);
		}
	}
</style>