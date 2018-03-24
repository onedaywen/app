import ajax from 'common/js/ajax.js'
import { mapState } from 'vuex';
import indexStore from 'src/pages/index/store/index.js';
export default {
	data () {
		return {
			title: '主页'
		}
	},

	components: {
		
	},

	computed: mapState({
		index: state => state.index,
		navList: state => state.index.navList,
		param: state => state.index.param,
	}),

	created () {
		if(!this.$store.index) {
			this.$store.registerModule('index', indexStore);
		}
		document.title = this.title;
		this.$nextTick(() => {
			
		})
	},

	methods: {
		
	}
};