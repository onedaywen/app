import { mapState } from 'vuex';
import PageBStore from 'src/pages/page_b/store/index.js';
export default {
	name: 'PageB',
	data () {
		return {
			title: '页面b'
		}
	},
	components: {
		
	},
	computed: mapState({
        PageB: state => state.PageB,
	}),
	created () {
		if(!this.$store.PageB) {
			this.$store.registerModule('PageB', PageBStore);
		}
	},
};