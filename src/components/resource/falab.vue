<template>
    <div class="photo_with_intrduce">
        <div>
            <img src="@/assets/falab.jpg" alt="自造實驗室">
        </div>
        <div class="intrduce_text">
            <div>
                <h3>自造實驗室</h3>
            </div>
            <div>
                <p>&emsp;&emsp;這裡是**實驗室**，我們創意實現的核心空間。實驗室配備了各類電子元件、精密的雷射切割機和多台3D列印機，還有豐富的工具庫供成員自由使用。無論是電子電路的設計、複雜模型的製作，還是創新項目的原型開發，這裡都是將想法化為現實的理想場所。
                </p>
            </div>
        </div>
    </div>
    <hr class="rounded">
    <h2>設備</h2>
    <div class="photo_with_intrduce">
        <div>
            <img src="../../assets/AD3.jpg">
        </div>
        <div class="equipment">
            <h3>Adventurer 3</h3>
            <h4>產品規格</h4>
            <ul style="list-style-type:square;">
                <li>3D打印機名稱: Flashforge Adventurer 3</li>
                <li>打印技術：FFF 熔絲製造技術</li>
                <li>最大打印尺寸：150 x 150 x 150 mm (LxWxH)</li>
                <li>打印精度：0.1mm – 0.4mm</li>
                <li>打印材料線徑：1.75mm</li>
                <li>噴嘴數量：1</li>
                <li>噴嘴直徑：0.4mm</li>
                <li>加熱床：有</li>
                <li>打印材料：PLA, PET(G), ABS</li>
                <li>軟體名稱：FlashPrint</li>
                <li>支援檔格式：stl, obj</li>
                <li>作業系統：Windows, Mac OS</li>
                <li>打印機尺寸：388 x 340 x 405 mm (LxWxH)</li>
                <li>連接方式：USB Stick, WIFI , 雲端</li>
            </ul>
            <h4>功能與角色</h4>
            <p>Adventerer 3 3D列印機為本社團數量最多的3D列印機，列印小型成品為主，底板平台為快速抽取式，主要用途為提供社員初階教學及外界申請使用。</p>
        </div>
    </div>
    <div class="photo_with_intrduce">
        <div>
            <img src="../../assets/AD3.jpg">
        </div>
        <div class="equipment">
            <h3>Laser System TAZ-13090</h3>
            <p>雷射切割機是本社核心工具，在展覽和專題製作中不可或缺。快速將3D圖檔轉換為實體作品，廣泛應用於製作模型、裝飾品等。適用於木材、壓克力等多種材料，滿足不同專題製作的需求。雷射切割機為本社帶來了靈活、高效且高品質的製作體驗。</p>
            <br>
            <p>TAZ-13090雷射金屬非金屬混合切割機</p>
            <a href="https://www.youtube.com/watch?v=CsJ2BbbxZw4">https://www.youtube.com/watch?v=CsJ2BbbxZw4</a>
        </div>
    </div>

</template>

<script>
// import falab from '.../assets/falab.jpg'
export default {
    data() {
        return {

        };
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 40px;
}

.equipment {
    padding-left: 20px;
}

.equipment>h3 {
    margin: 0;
    font-size: 40px;
    margin-top: 0;
}

.equipment>h4 {
    /* margin-top: 0; */
    /* margin-left: 20px; */
    font-size: 25px;
    color: aqua;
}

.equipment>p{
    margin: 0;
}
</style>