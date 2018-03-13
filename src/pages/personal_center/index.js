import { mapState } from 'vuex';
import personalCenterStore from 'src/pages/personal_center/store/index.js';
import List from 'components/list/index.vue';

export default {
	data () {
		return {
			msg: '购物车',
		}
	},
	components : {
		List
	},
	computed: mapState({
		personalCenter: state => state.personalCenter,
		param: state => state.personalCenter.param,
	}),
	created () {
		if(!this.$store.personalCenter) {
			this.$store.registerModule('personalCenter', personalCenterStore);
		}
		this.$nextTick(() => {
			this.$store.state.personalCenter.param.add =  (list) => {
				console.log(list)
				this.getData();
			};
		});
	},

	mounted () {
		
	},

	methods: {
		getData () {

			let p = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 500);
			});
			p.then(data => {
				const param = this.$store.state.personalCenter.param;
				for(let i = 0; i< 1000; i++){
					param.data.push(`src/common/images/${i%3 + 1}.jpg?${Math.random()}`);
				}
			})
		}
	}
};