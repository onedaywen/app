import ajax from 'common/js/ajax.js'
import { mapState } from 'vuex';
import indexStore from 'src/pages/index/store/index.js';
// require('./test.less');
export default {
	data () {
		return {
			title: '图片展示页面'
		}
	},

	computed: mapState({
		index: state => state.index,
		navList: state => state.index.navList,
		imglist: state => state.index.imglist,

	}),

	created () {
		if(!this.$store.index) {
			this.$store.registerModule('index', indexStore);
		}
		document.title = this.title;
		this.$nextTick(() => {
			
			this.getData();
		})
	},

	methods: {
		getData () {
			const param = {
				method: 'post',
				url: '/f/d',
				data: {
					a: 10,
					b: 100
				},
				headers: {
					a: [100, 200],
					b: {x: 10, y: 'yyyyyyyy'}
				},
				// timeout: 1000,
			};
			const p = ajax(param);
			p.then(data => {
				console.log(data)
			});
			// p.abort();
			
		},
		// postData () {
		// 	const param = {
		// 		url: '/f/d',
		// 		data: {
		// 			a: 10,
		// 			b: 100
		// 		}
		// 	};
		// 	ajax(param).then(data => {
		// 		console.log(data);
		// 	})
		// }
	}
};