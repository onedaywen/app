import { mapState } from 'vuex';
import PageAStore from 'src/pages/page_a/store/index.js';

import Vue from 'vue';

const PageA =  {
	name: 'PageA',
	data () {
		return {
			title: '页面a'
		}
	},
	components : {
		
	},
	computed: mapState({
        PageA: state => state.PageA,
	}),
	created () {
		if(!this.$store.PageA) {
			this.$store.registerModule('PageA', PageAStore);
		}
		this.$nextTick(() => {
			
		});
	},

	mounted () {
		
	},

	methods: {
		
	}
};

export default PageA;