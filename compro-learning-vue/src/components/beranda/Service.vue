<template>
     <div class="container">
        <h1 class="page-title">Our Services</h1>
        <div class="row-service">
            <card></card>
        </div>

        </div>
</template>
<script>
import Card from '@/components/service/Card.vue';
export default {
  components: {
    Card
  }
}</script>
<style scoped>
    .service{
        margin-top: 80px;
    }

    
</style>