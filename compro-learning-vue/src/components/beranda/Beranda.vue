<template>
    <div>
        <div class="section_1">
            <div class="section1_content">
                <h1>expert are here sove you business problem.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dicta esse fuga, nulla quasi libero illo quae ducimus maiores voluptates doloribus ratione eaque sequi nisi facilis ab velit rem sapiente!</p>
            </div>
            <div class="section1_img">
                <img src="@/assets/img/section_1.jpg" alt="beranda">

            </div>
        </div>
    </div>
</template>
<style scoped>
.section_1{
    padding: 20px 0;
    display: flex;
    align-items: center;
}
.section1_content{
    width: 50%;
    padding: 30px 0;
}
.section1_img{
    width: 50%;
}
.section1_content h1{
    font-size: 48px;
}
.section1_content p{
    margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
    .section_1{
        flex-direction: column;
        padding: 20px 20px;
    }
    .section1_content{
        width: 100%;
        padding: 20px 0;
    }
    .section1_img{
        width: 100%;
    }
}

</style>