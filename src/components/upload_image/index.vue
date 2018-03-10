<template>
    <div class="upload-image">
        <ul class="base64Data">
            <li v-for="(item, index) in param.data"
                v-if="param.data.length"
                :style="param.style"
                :class="{uploadSuccess: item.uploadSuccess, uploadFail: item.uploadFail}">
                <span>
                    <b @click="deleteImage({item, index})">x</b>
                </span>
                <img :src="item.base64">
            </li>
        </ul>
        <div class="upload-image-btn">
            <label :for="id" :style="param.style">
                <span>
                    +
                </span>
            </label>
            <input type="file" :id="id" accept="image/gif,image/jpeg,image/jpg, image/png, image/svg" @change="selectImages($event)">
        </div>
    </div>
</template>

<script>
    import index from './index.js';
    export default index;
</script>

<style lang="less">
    @import './index.less';
</style>