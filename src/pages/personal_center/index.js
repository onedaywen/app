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
				this.getData();
			};
		});
	},

	mounted () {
		
	},

	methods: {
		getData (list) {

			let p = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 500);
			});
			p.then(data => {
				const param = this.$store.state.personalCenter.param;
				for(let i = 0; i< 100; i++){
					param.data.push(`src/common/images/${i%3 + 1}.jpg?${Math.random()}`);
				}
			})
		},
		getBase64 () {
			let fr = new FileReader();
			// http://7xkge0.dl1.z0.glb.clouddn.com/fcappmallazh5eg4h0gt.jpg
			
		}
	}
};