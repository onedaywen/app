
const uploadImage =  {
    name: 'uploadImage',
    props: ['param'],
    data() {
        return {
            /* input file按钮的id */
            id: Math.random(),
        };
    },
    components: {
        
    },
    created() {
        this.$nextTick(()=>{
            console.log(api)
        });
    },
    methods: {
        /**
         * 选择图片，转成base64预览
         * **/
        selectImages (e) {
            const param = this.param;
            const files = e.target.files;
            let reader = new FileReader();
            let imgObj = new Image();
            let p = new Promise((resolve, reject) => {
                imgObj.onload = () => {
                    resolve(imgObj);
                };
                reader.onload = (e) => {
                    imgObj.src = e.target.result;
                };
                reader.readAsDataURL(files[0]);
            });
            p.then(imgObj => {
                let {
                    width,
                    height,
                    currentSrc
                } = imgObj;
                this.param.data = [
                    {
                        base64: currentSrc,
                        file: files[0],
                        imageUrl: '',
                        uploadSuccess: false,
                        uploadFail: false,
                        width,
                        height,
                    }
                ]
                console.dir(this.param.data);
            });
        },
        /***
         * 确定上传
         * **/
        // ensureUpload () {
        //     const param = this.param;
        //     const qiniu = this.param.qiniu;
        //     let imageData = this.param.imageData;
        //     if(!(qiniu.url && qiniu.token && qiniu.domain)) {
        //         alert('上传到七牛缺少url，token或domain参数, 上传出错');
        //     }
        //     let i = 0;
        //     const dataArr = [];
        //     const dealDatafn = (typeStr, data) => {
        //         this.show = false;
        //         data = JSON.parse(data);
        //         dataArr[i] = typeStr === 'catch' ? '' : qiniu.domain+'/'+data.key;
        //         if(i === imageData.length-1) {
        //             let count = 0;
        //             dataArr.map((x, index) => {
        //                 if(x) {
        //                     count++;
        //                     imageData[index].uploadSuccess = true;
        //                     imageData[index].imageUrl = x;
        //                 } else {
        //                     imageData[index].uploadFail = true;
        //                 }
        //             });
        //         }
        //         i++;
        //         while(imageData[i] && imageData[i].uploadSuccess) {
        //             i++;
        //         }
        //         if (i < imageData.length) {
        //             recursive();
        //         }
        //     };
        //     const recursive = () => {
        //         while(imageData[i] && imageData[i].uploadSuccess) {
        //             i++;
        //         }
        //         let file = imageData[i].file;
        //         let key = `fcapp/mall/${Math.random().toString(36).substr(2)}${file.name.substring(file.name.lastIndexOf('.'))}`;
        //         let token = qiniu.token;
        //         let reqparam = {
        //             url: qiniu.url,
        //             data: { token, file, key }
        //         };
        //         this.show = true;
        //         ajax.uploadFormData(reqparam).then((data) => {
        //             dealDatafn('then', data);
        //         }).catch((data) => {
        //             dealDatafn('catch', data);
        //         })
        //     };
        //     recursive();
        // },
        /**
         * @param Object类型
         * {
     *   item: item, //@item base64Data数组的一个值，类型为{}
     *   index: index,//@index item在base64Data数组的下标
     * }
         * **/
        // deleteImage (param) {
        //     let thisParam = this.param;
        //     let imageData = thisParam.imageData;
        //     let pageParam = thisParam.pageParam;
        //     imageData.splice(param.index, 1);
        //     if(pageParam) {
        //         pageParam.key = Math.random();
        //         pageParam.total = imageData.length || 1;
        //     }
        // },
        // pageCallback (param) {
        //     console.log(param)
        // }
    }
};
export default uploadImage;