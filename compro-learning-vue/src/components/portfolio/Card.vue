<template>
    <div class="portfolio">
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <img :src="project.image" :alt="project.title" class="project-image">
        <div class="project-details">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <p class="project-technologies">{{ project.technologies }}</p>
          <a :href="project.link" target="_blank" class="project-link">View Project</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            title: "Project 1",
            description: "Description of Project 1",
            technologies: "Vue.js, CSS, HTML",
            image: "src/assets/img/portfolio-1.jpg",
            link: "https://example.com/portfolio-1.jpg",
          },
          {
            title: "Project 2",
            description: "Description of Project 2",
            technologies: "React, Redux, Node.js",
            image: "src/assets/img/portfolio-1.jpg",
            link: "https://example.com/project2",
          },
        ],
      };
    },
  };
  </script>
  
  
  <style scoped>
  .portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .project-card {
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 10px;
    padding: 20px;
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  
  .project-image {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
  
  .project-details {
    padding: 10px;
  }
  
  .project-title {
    font-size: 20px;
    color: #0066cc;
  }
  
  .project-description {
    font-size: 16px;
    color: #333;
    margin-top: 10px;
  }
  
  .project-technologies {
    font-size: 14px;
    color: #777;
    margin-top: 5px;
  }
  
  .project-link {
    text-decoration: none;
    color: #007BFF;
    margin-top: 15px;
  }
  </style>
  