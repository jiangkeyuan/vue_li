<template>
    <div class="swiper-item">
        <img :src="obj.imgUrl" :alt="obj.id" class="swiper-item-img">
        <span class="swiper-item-name">{{obj.desc}}</span>
    </div>
</template>
<script>
// import { computed } from "vue";
export default {
    props:["obj"],
}
</script>
<style lang="scss" scoped>
    .swiper-item{
        display: flex;
        flex-direction: column;
        width: 93.75px;
        align-items: center;
        &-img{
            width: 55px;
            height: 55px;
        }
        &-name{
            margin-top: 5px;
            font-size: 14px;
            color: #212121;
        }
    }
</style>