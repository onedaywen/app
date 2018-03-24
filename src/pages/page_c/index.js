import { mapState } from 'vuex';
import PageCStore from 'src/pages/page_c/store/index.js';
export default {
	name: 'PageC',
	data () {
		return {
			title: '页面c'
		}
	},
	components: {
		
	},
	computed: mapState({
        PageC: state => state.PageC,
	}),
	created () {
		if(!this.$store.PageC) {
			this.$store.registerModule('PageC', PageCStore);
		}
	},
};