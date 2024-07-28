<template>
    <div class="biodata-card">
      <div class="card">
        <div class="card-body">
          <h2>{{ biodata.name }}</h2>
          <p>{{ biodata.age }} tahun</p>
          <p>{{ biodata.address }}</p>
          <p>{{ biodata.email }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      biodata: Object, // Menggunakan prop untuk menerima data biodata dari luar komponen
    },
  };
  </script>
  
  <style scoped>
  .biodata-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-body {
    padding: 20px;
  }
  
  h2 {
    margin: 0;
  }
  
  p {
    margin: 5px 0;
  }
  </style>
  