<template>
    <header class="header">
        <router-link to="/"><img src="@/assets/tcivs_3Dmaker_LOGO.png"></router-link>
        <h3>臺中高工3D創客社</h3>
        <nav>
            <router-link to="/tcivs_fablab/">首頁</router-link>
            <router-link to="/instruction">教學</router-link>
            <router-link to="/resource/falab">資源</router-link>
            <router-link to="/reserve">預約</router-link>
            <router-link to="/about">關於</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    components: {

    },
    methods: {

    },
    created() {

    }
}
</script>

<style scoped>
.header {
    display: flex;
    width: 100%;
    background-color: #4E4B5C;
    place-items: center;
}

.header img {
    width: 50px;
    height: auto;
    margin-left:10px ;
}

.header nav {
    display: flex;
    width: 80%;
    justify-content: flex-end;
    place-items: center;
}

.header nav a {
    /* display: inline-block; */
    padding: 10px;
    color: blue;
    font-size: 20px;

}

.header nav a:hover {
    background-color: black;
    cursor: pointer;
}

h3{
    padding: 0;
    margin-left: 5px;
    width:200px;
}
</style>
