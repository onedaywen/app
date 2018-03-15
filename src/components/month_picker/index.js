const D = new Date();
const TOYEAR = D.getFullYear();//今年
const TOMONTH = D.getMonth() + 1;//今月
const MONTHLIST = [
	[
		{option: '一月', value: 1}, 
		{option: '二月', value: 2}, 
		{option: '三月', value: 3}, 
	],[
		{option: '四月', value: 4}, 
		{option: '五月', value: 5}, 
		{option: '六月', value: 6},
	],[
		{option: '七月', value: 7}, 
		{option: '八月', value: 8}, 
		{option: '九月', value: 9},
	],[
		{option: '十月', value: 10}, 
		{option: '十一月', value: 11}, 
		{option: '十二月', value: 12},
	]
];
const monthPciker = {
	name: 'monthPciker',
	props: {
		param: {
			type: Object,
			required: true
		},
		callback: {
			type: Function
		}
	},

	created () {
		this.$nextTick(() => {
			this.dataCheck();
			this.listenScroll();
		});

	},

	data () {
		return {
			show: false,
			monthList: Object.assign([], MONTHLIST),
			style: {
				width: '200px',
				left: '0',
				top: '0',
			}
		}
	},
	methods: {
		getElePosition(ele) {
            let offsetLeft = 0, offsetTop = 0;
            while (ele != null) {
                offsetLeft += ele.offsetLeft;
                offsetTop += ele.offsetTop;
                ele = ele.offsetParent;
            }
            return {
            	offsetLeft,
            	offsetTop
            };
        },
        /** 年或月为空时取当前年或月 */
        dataCheck () {
        	const param = this.param;
       		const { year, month } = param;
       		let yearFlag = Number.isInteger(year)
       			&& year > 0;
       		let monthFlag = Number.isInteger(month)
       			&& month >= 1
       			&& month <= 12;

        	if(year && !yearFlag) {
        		throw new Error(`year must be an positive integer.`)
        	}
        	if(month && !monthFlag) {
        		throw new Error(`month must be an positive integer.1 <= month <= 12;`)
        	}
        },

        listenScroll () {
        	let monthEle = document.querySelector('.month-details');
        	let maskEle = document.querySelector('.month-mask');
        	monthEle.addEventListener('mousewheel', (e) => {
        		e = e || window.event;
        		e.preventDefault();

        		if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
			        if (e.wheelDelta > 0) { //当滑轮向上滚动时
			            this.nextYear(-1);
			        }
			        if (e.wheelDelta < 0) { //当滑轮向下滚动时
			        	this.nextYear(1);
			        }
			    } else if (e.detail) {  //Firefox滑轮事件
			        if (e.detail > 0) { //当滑轮向上滚动时
			        	this.nextYear(-1);
			        }
			        if (e.detail < 0) { //当滑轮向下滚动时
			        	this.nextYear(1);
			        }
			    }
        	}, false);
        	maskEle.addEventListener('mousewheel', (e) => {
        		this.show = false;
        	}, false);
        },

        /** 为解决层级遮罩问题，不对显示在页面上的元素设置postition: relative方案 */
		showItem ($event) {
			const style = this.style;
			let inputTarget = $event.target;
			let computedStyle = window.getComputedStyle(inputTarget);
			let { offsetLeft, offsetTop } = this.getElePosition(inputTarget)
			let w = parseInt(computedStyle.width);
			let h = parseInt(computedStyle.height);
			let scrollTop = document['documentElement' || 'body'].scrollTop;
			let scrollLeft = document['documentElement' || 'body'].scrollLeft;
			Object.assign(this.style, {
				width: w + 'px',
				left: offsetLeft - scrollLeft + 'px',
				top: offsetTop - scrollTop + h + 'px',
			});
			
			this.show = true;
		},
		hideItem () {
			this.show = false;
			const param = this.param;
			if(param.year && !param.month) {
				param.month = TOMONTH;
			}
			if(param.month && !param.year) {
				param.year = TOYEAR;
			}
		},
		nextYear (step) {
			const year = parseInt(this.param.year) || TOYEAR;
			if(year <= 1991 && step === -1) return;
			if(year >= 2091 && step === 1) return;
			this.param.year = year + step;
		},
		selectItem (y) {
			const param = this.param;
			param.month = y.value;
			param.year = param.year ? param.year : TOYEAR;
			this.show = false;
		},
		clearItem () {
			this.param.year = '';
			this.param.month = '';
			this.param.value = '';
		}
	}
};
export default monthPciker;