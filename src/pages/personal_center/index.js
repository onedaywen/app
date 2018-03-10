import { mapState } from 'vuex';
import personalCenterStore from 'src/pages/personal_center/store/index.js';


export default {
	data () {
		return {
			msg: '购物车'
		}
	},

	computed: mapState({
		personalCenter: state => state.personalCenter,
	}),
	created () {
		this.$nextTick(() => {
			if(!this.$store.personalCenter) {
				this.$store.registerModule('personalCenter', personalCenterStore);
			}
		})
	},
};