export default (await import('vue')).defineComponent({
data() {
return {
projects: [
{
title: "Project 1",
description: "Description of Project 1",
technologies: "Vue.js, CSS, HTML",
image: "@/assets/img/layanan.png",
link: "https://example.com/portfolio-1.jpg",
},
{
title: "Project 2",
description: "Description of Project 2",
technologies: "React, Redux, Node.js",
image: "@/assets/img/portfolio-1.jpg",
link: "https://example.com/project2",
},
],
};
},
});
