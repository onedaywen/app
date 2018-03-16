/* design by wenyitian 20180315 **/
const D = new Date();
const TOYEAR = D.getFullYear();//今年
const TOMONTH = D.getMonth() + 1;//今月
const MONTHLIST = [
	[
		{option: '1月', month: 1, selectable: true, year: ''},
		{option: '2月', month: 2, selectable: true, year: ''},
		{option: '3月', month: 3, selectable: true, year: ''},
	],[
		{option: '4月', month: 4, selectable: true, year: ''},
		{option: '5月', month: 5, selectable: true, year: ''},
		{option: '6月', month: 6, selectable: true, year: ''},
	],[
		{option: '7月', month: 7, selectable: true, year: ''},
		{option: '8月', month: 8, selectable: true, year: ''},
		{option: '9月', month: 9, selectable: true, year: ''},
	],[
		{option: '10月', month: 10, selectable: true, year: ''},
		{option: '11月', month: 11, selectable: true, year: ''},
		{option: '12月', month: 12, selectable: true, year: ''},
	]
];
const monthPciker = {
	name: 'monthPciker',
	props: {
		/*	monthPickerParam: {
				year: '',
				month: '',
				limitStart: '',
				limitEnd: '',
			}
		*/
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

        getLimitData () {
        	const { limitStart, limitEnd } = this.param;
        	if(!limitStart) {
        		this.param.limitStart = '1991-1';
        	}
        	if(!limitEnd) {
        		this.param.limitEnd = '9999-12';
        	}
        	let limitStartArr = limitStart.split('-');
        	let limitStartYear = parseInt(limitStartArr[0]);
        	let limitStartMonth = parseInt(limitStartArr[1]);
			let limitEndArr = limitEnd.split('-');
        	let limitEndYear = parseInt(limitEndArr[0]);
        	let limitEndMonth = parseInt(limitEndArr[1]);
        	Object.assign(this.param, {
        		limitStartYear,
				limitStartMonth,
				limitEndYear,
				limitEndMonth,
        	});
        	return {
        		limitStartYear,
				limitStartMonth,
				limitEndYear,
				limitEndMonth,
        	}
        },

        /** 年或月为空时取当前年或月 */
        dataCheck () {
        	const param = this.param;
       		const { year, month, limitStart, limitEnd } = param;
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
        	if(typeof limitStart !== 'string' || typeof 'limitEnd' !== 'string') {
        		throw new Error(`limitStart and limitEnd must be String type, like '2018-3'.`)
        	}
        	if(limitStart && typeof limitStart === 'string' && !limitStart.includes('-')) {
        		throw new Error(`limitStart sperate flag is '-', like '2018-3'.`)
        	}
        	if(limitEnd && typeof limitEnd === 'string' && !limitEnd.includes('-')) {
        		throw new Error(`limitEnd sperate flag is '-', like '2018-3'.`)
        	}
        	this.setLimit();
        },

        setLimit () {
			const { year, month } = this.param;
        	let {
        		limitStartYear,
				limitStartMonth,
				limitEndYear,
				limitEndMonth,
        	} = this.getLimitData();
        	let copyMonthList = JSON.parse(JSON.stringify(this.monthList));
        	copyMonthList.forEach(x => {
        		x.forEach(y => {
        			y.year = year || TOYEAR;
        			y.selectable = true;
        			if(y.year > limitEndYear) {
        				y.selectable = false;
        			}
        			if(y.year ===  limitEndYear) {
        				if(y.month > limitEndMonth) {
        					y.selectable = false;
        				}
        			}
        			if(y.year < limitStartYear) {
        				y.selectable = false;
        			}
        			if(y.year ===  limitStartYear) {
        				if(y.month < limitStartMonth) {
        					y.selectable = false;
        				}
        			}
        		});
        	});
        	this.monthList = copyMonthList;
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

			let top = offsetTop - scrollTop + h;
			let i = top - 36;
			let k = setInterval(() => {
				if(i === top) {
					clearInterval(k);
					return;
				}
				i += 1;
				Object.assign(this.style, {
					width: w + 'px',
					left: offsetLeft - scrollLeft + 'px',
					top: i + 'px',
				});
			}, 10)
			
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
			let {
        		limitStartYear,
				// limitStartMonth,
				limitEndYear,
				// limitEndMonth,
        	} = this.getLimitData();
			const year = parseInt(this.param.year) || TOYEAR;
			if(year <= limitStartYear && step === -1) return;
			if(year >= limitEndYear && step === 1) return;
			this.param.year = year + step;
			this.setLimit();
		},
		selectItem (y) {
			if(!y.selectable) return;
			const param = this.param;
			param.month = y.month;
			param.year = param.year ? param.year : TOYEAR;
			this.show = false;
			if(typeof this.callback === 'function') {
				this.callback(param);
			}
		},
		clearItem () {
			this.param.year = '';
			this.param.month = '';
		}
	}
};
export default monthPciker;