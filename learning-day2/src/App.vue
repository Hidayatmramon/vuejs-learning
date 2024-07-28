<template>
  <div class="card-service">
    <div v-for="(card, index) in cardArray" :key="index">
      <Card :key="index" :cardData="card" />
    </div>
    <span>{{ greetingMessage }}</span>
  </div>
</template>

<script>
import Card from '@/components/my-components/card.vue';

export default {
  components: {
    Card,
  },  
  data() {
    return {
      greetingMessage: 'Hello',
      cardArray: [  
        { title: 'Card 1', content: 'Content for Card 1' },
        { title: 'Card 2', content: 'Content for Card 2' },
        { title: 'Card 3', content: 'Content for Card 3' },
    ],
    };
  },
};
</script>


  <style>
  .card-service {
    display: flex;
  }

  .card-button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;
    transition: background-color 0.3s;
  }

  .card-button:hover {
    background-color: #0056b3;
  }
  </style>
