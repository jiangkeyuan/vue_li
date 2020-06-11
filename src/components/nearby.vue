<template>
    <ul class="nearby">
        <li class="nearby-cont bor">
            <i class="iconfont icon-diliweizhi"></i>
            <span>{{city || "获取失败"}}</span>
        </li>
        <li class="nearby-cont">
            <i class="iconfont icon-diqiu"></i>
            <span v-once>必游榜单</span>
        </li>
    </ul>
</template>
<script>
import useCity from "@/hooks/useCity";
export default {
    setup(){
        const city = useCity();
        return {
            city
        }
    }
}
</script>
<style lang="scss" scoped>
.nearby{
    width: 100%;
    height: 50px;
    border-top: 1px solid #e0e0e0;
    display: flex;
    flex-direction: row;
    .bor{
        border-right: 1px solid #e0e0e0;
    }
    &-cont{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #212121;
        span{
            font-size: 14px;
        }
        i{
            font-size: 20px;
        }
    }
}
</style>