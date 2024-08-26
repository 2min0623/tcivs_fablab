<template>
    <footer class="footer">
        <br>
        <nav>
            <label>相關網站：</label>
            <a href="https://www.instagram.com/3dmaker_tcivs/?utm_medium=copy_link">3D創客社IG</a>
            <a href="https://www.google.com/url?q=https%3A%2F%2Fw3.tcivs.tc.edu.tw%2Fischool%2Fpublish_page%2F81%2F%3Fcid%3D6129&sa=D&sntz=1&usg=AOvVaw34r8D9ETeETmLFalrQHQs4">Fabla自造實驗室</a>
            <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Ftcivs2017%2F%3Fref%3Dbookmarks&sa=D&sntz=1&usg=AOvVaw1lSFE91YF1PCkKYijEhZOu">WeMake自造實驗室</a>
            <a href="https://www.google.com/url?q=https%3A%2F%2Ftcivs.tc.edu.tw%2F&sa=D&sntz=1&usg=AOvVaw3L-3eFL4tKxpQFbgLrm25c">臺中高工</a>
        </nav>
        <div>
            <p>FabLab自造實驗室｜ 地址：40241 臺中市南區高工路191號 | 電話 : 04-22613158 #6603 </p>
        </div>
    </footer>
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
.footer {
    width: 100%;
    background-color: #4e4b5caf;
}

.footer>nav {
    display: flex;
    justify-content: center;
    place-items: center;
    max-width: 1000px;
    min-width: 850px;
    margin: 0 auto;
}

.footer>nav>a {
    /* display: inline-block; */
    flex-grow: 1;
    /* 让每个 div 等比例地分配可用空间 */
    flex-shrink: 0;
    /* 防止 div 缩小 */
    flex-basis: 0;
    margin: 10px;
    /* padding: 10px; */
    /* color: blue; */
    font-size: 16px;
    border: solid 2px;
    text-align: center;

}

.footer>div {
    display: flex;
    justify-content: flex-end;
    place-items: center;
    max-width: 1000px;
    min-width: 850px;
    margin: 0 auto;
}

.footer>div>p {
    font-size: 14px;
}
</style>