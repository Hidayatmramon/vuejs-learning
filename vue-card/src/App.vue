<template class="row-service">
  
  <Card v-for="item in data"
   :title="item.title" :desc="item.desc" :img="item.img" 
   :pfp="item.pfp" :btn="item.btn" :nama="item.nama" :tanggal="item.tanggal">
    <card-service></card-service>
  </Card>


</template>
<script>
import Card from '@/components/my-components/Card.vue'
export default {
  components:{
    Card,
    'card-service': Card,
  },
  data(){
    return{
      data:[
        {
          title:"Data Diri",
          desc: "berasal dari bogor, dan memiliki mimpi menjadi bug bounty dan fullstack developer",
          nama: "Ramon Hidayat",
          tanggal: "31 Oct 2023",
          img:"hy2.jpg  ",
          pfp:"pfp.jpg",
          btn:"arw.png"
        },
      ]
    }
  }
}
</script>
<style>
  .row-service{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
  }
  .btn-service-global{
        margin: 10px 0 0 1.8rem;
        font-size: 16px;
        font-weight:400;
        color: white;
        background-color: #6C87D6;
        padding: 15px 20px;
        border: none;
        border-radius: 10px;
        transition: 0.3s;
    }
  .btn-service-global:hover{
    background-color: #485192;
  }
</style>