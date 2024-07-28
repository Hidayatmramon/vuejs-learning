<template>
   
        <div class="card-container">
            <div class="card">
                <h2 class="card-title">Card 1</h2>
                <img src="@/assets/img/layanan.png" alt="layanan">
                <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div class="card">
                <h2 class="card-title">Card 2</h2>
                <img src="@/assets/img/layanan.png" alt="layanan">
                <p class="card-description">Voluptatibus, nobis? Earum id maiores vero delectus?</p>
            </div>
            <div class="card">
                <h2 class="card-title">Card 3</h2>
                <img src="@/assets/img/layanan.png" alt="layanan">
                <p class="card-description">Quod ad dolor, necessitatibus deleniti molestias iusto.</p>
            </div>
            <div class="card">
                <h2 class="card-title">Card 4</h2>
                <img src="@/assets/img/layanan.png" alt="layanan">
                <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div class="card">
                <h2 class="card-title">Card 5</h2>
                <img src="@/assets/img/layanan.png" alt="layanan">
                <p class="card-description">Voluptatibus, nobis? Earum id maiores vero delectus?</p>
            </div>
            <div class="card">
                <h2 class="card-title">Card 6</h2>
                <img src="@/assets/img/layanan.png" alt="layanan">
                <p class="card-description">Quod ad dolor, necessitatibus deleniti molestias iusto.</p>
            </div>
        </div>
</template>

<style>
.container {
    background-color: white;
    padding: 20px;
    text-align: center;
}
.card img{
    width: 100px;
}

.page-title {
    font-size: 28px;
    color: #0066cc;
    margin-bottom: 20px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 10px;
    padding: 20px;
    width: 300px;
    text-align: center;
}

.card-title {
    font-size: 20px;
    color: #0066cccb;
}

.card-description {
    font-size: 16px;
    color: #333;
}
@media screen and (max-width: 768px) {
    .card {
        width: 100%; 
        margin: 10px 0; 
    }
}

@media screen and (max-width: 576px) {
    .card-container {
        flex-direction: column; 
    }
}
</style>