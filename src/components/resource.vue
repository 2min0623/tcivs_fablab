<template>
    <h1>資源</h1>
    <div id="classroom_clumn">
        <div><router-link to="/resource/falab">自造實驗室</router-link></div>
        <div><router-link to="/resource/art">創意美學</router-link></div>
        <div><router-link to="/resource/electronic">電子電路</router-link></div>
        <div><router-link to="/resource/carpentry">木工</router-link></div>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {
            // classroom_img_array: [
            //     require("../assets/falab.jpg"),
            //     require("../assets/electronic.jpg"),
            //     require("../assets/art.jpg"),
            //     require("../assets/carpentry.jpg")
            // ],
            // currentImg: require("../assets/falab.jpg")
        }
    },
    // methods: {
    //     change_img(num) {
    //         this.currentImg = this.classroom_img_array[num];
    //     }
    // }
}
</script>

<style scoped>

#classroom_clumn {
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    background-color: rgb(67, 65, 70);
}

#classroom_clumn > div {
    font-size: 30px;
    flex-grow: 1; /* 让每个 div 等比例地分配可用空间 */
    flex-shrink: 0; /* 防止 div 缩小 */
    flex-basis: 0; /* 让 div 的基础宽度为 0 */
    text-align: center;
}

#classroom_clumn a {
    font-size: 30px;
    padding: 5px;
    display: block; /* 确保链接在 div 内占满整个区域 */
}

#classroom_clumn > div:hover {
    background-color: #a2c3b4;
}

</style>