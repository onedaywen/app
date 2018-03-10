import { mapState } from 'vuex';
import shopcarStore from 'src/pages/shopcar/store/index.js';
import uploadImage from 'components/upload_image/index.vue';
export default {
	name: 'shopcar',
	data () {
		return {
			msg: '购物车'
		}
	},
	components: {
		uploadImage
	},
	computed: mapState({
		shopcar: state => state.shopcar,
		uploadParam: state => state.shopcar.uploadParam,


	}),
	created () {
		if(!this.$store.shopcar) {
			this.$store.registerModule('shopcar', shopcarStore);
		}
	},
};