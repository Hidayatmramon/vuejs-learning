<template>
    <div class="card-service">
      <div class="card-content">
        <div class="card-image">
          <img src="https://i.pinimg.com/564x/73/f9/b0/73f9b0a8a1cddc9bdaba1856eb1c91ba.jpg" alt="Card Image" />
        </div>
        <div class="text-content">
          <h4>User-Friendly Behaviour For Business-minded People</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat ut hic
            expedita nesciunt molestiae aut, perspiciatis maiores rem, odit velit, provident
            adipisci. Magni natus sit ea, similique exercitationem minima?
          </p>
          <button class="card-button">Button</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>


  </script>
  
  <style scoped>
  .card-service {
    border-radius: 10px;
    margin: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
    background-color: #fff;
    max-width: 300px; /* Adjust the maximum width as needed */
    height: auto; /* Adjust the height as needed */
  }
  
  .card-service:hover {
    transform: scale(1.05);
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
  }
  
  .card-image {
    max-width: 100%;
    height: 150px;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .text-content {
    padding: 10px;
  }
  
  h4 {
    font-size: 1.5rem;
    margin: 0;
  }
  
  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
  
  </style>