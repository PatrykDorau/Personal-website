<template>
  <div class="portfolio-container" v-motion-slide-bottom>
    <div class="menu">
      <router-link to="/">Main page</router-link> / <router-link to="/portfolio">Portfolio</router-link>
    </div>
    <h3 class="portfolio-title">PORTFOLIO</h3>
    <div @click="navigationService('left')" class="arrow arrow-left">
      <i class="first-line"></i>
      <i class="second-line"></i>
    </div>
    <div @click="navigationService('right')" class="arrow arrow-right">
      <i class="first-line"></i>
      <i class="second-line"></i>
    </div>
    <div class="portfolio-items-container">
      <div class="portfolio-item" v-for="(project, index) in projects" :key="index" :data-slide="index + 1 +'/'+ projects.length">
        <div class="project-title">{{project.name}}</div>
          <div class="project-img">
            <img :src="project.img" width="100%"/>
          </div>
          <div class="project-description">{{project.brief}}</div>
          <router-link class="project-btn" v-motion="motionButtonGlow" @click="setCurrentElement" :to="{path: `/portfolio/${project.id}`}">More info</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {motionGlowText, motionButtonGlow} from '../motions';
export default {
  name: "Portfolio",
  data() {
    return {
      motionGlowText,
      motionButtonGlow,
      projects: [
        {
          img: "",
          video: "",
          name: "Shop management panel",
          id: "Shop-management-panel",
          type: "Commercial",
          github: "abc",
          link: [
            "abc",
            "def"
          ],
          stack: "Vue.js, Css, Html, REST API",
          principal: "NEONAIL",
          responsibilities: [
            "Implemented visually appealing, responsive application design",
            "Cooperated withe the team to create API and communicated it with the application."
          ],
          brief: "Panel for employees to remotely control multiple stores in all available markets",
          description: `The panel aims to facilitate 500+ employees, collects all kinds of statistics on many
            various things from our online shops ( neonail, mylaq ), including shop traffic, products
            sold, bestsellers, daily/monthly/yearly revenue, domain traffic etc.`
        },
        {
          img: "",
          video: "",
          name: "RPG game",
          id: "RPG-game",
          type: "Private",
          github: "abc",
          stack: "Js, Css, Html",
          responsibilities: [
            "Created game logic mostly in vanilla JS using Classes.",
            "Took care of clean code and debugging.",
            "Created visually appealing environment."
          ],
          brief: "My approach on creating an RPG game based on Pokemons",
          description: `Tile-based game that allows you to control player who's a chef. Have your own deck of
            pizza's, talk to others and fight with them in pokemon like environment. Game is still in
            progress but demo is available on my GitHub.`
        },
      ]
    }
  },
  mounted() {
    this.setActiveSlide()
  },
  methods: { 
    navigationService(side) {
      let currentSlide = document.querySelector("[data-active='true']");
      let currentSlideIndex = currentSlide.dataset.slide.split("/")[0];
      let maxSlideIndex = currentSlide.dataset.slide.split("/")[1];
      let nextSlideIndex = 0;
      let nextSlide; 

      currentSlide.dataset.active = "false"

      if(side == "right") {
        if( currentSlideIndex < maxSlideIndex) {
          nextSlideIndex = Number(currentSlideIndex) + 1;
          nextSlide = document.querySelector(`[data-slide='${nextSlideIndex}/${maxSlideIndex}']`);
          nextSlide.dataset.active = "true";
          nextSlide.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        } else {
          nextSlideIndex = 1;
          nextSlide = document.querySelector(`[data-slide='${nextSlideIndex}/${maxSlideIndex}']`);
          nextSlide.dataset.active = "true";
          nextSlide.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        }
      } else if(side == "left") {
          if( currentSlideIndex > 1) {
            nextSlideIndex = Number(currentSlideIndex) - 1;
            nextSlide = document.querySelector(`[data-slide='${nextSlideIndex}/${maxSlideIndex}']`);
            nextSlide.dataset.active = "true";
            nextSlide.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
          } else {
            nextSlideIndex = maxSlideIndex;
            nextSlide = document.querySelector(`[data-slide='${nextSlideIndex}/${maxSlideIndex}']`);
            nextSlide.dataset.active = "true";
            nextSlide.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
          }
        }
    },

    setActiveSlide() {
      document.querySelector('.portfolio-item').dataset.active = true;
    },

    setCurrentElement() {
      let currentActiveIndex = document.querySelector("[data-active='true']").dataset.slide.split("/")[0];

      localStorage.setItem("activePortfolioItem", JSON.stringify(this.projects[currentActiveIndex-1]));
    }
  }
}
</script>

<style scoped>

  .portfolio-container {
    display: block;
    width: 80%;
    padding: 10px;
    margin-top: clamp(30px, 4vw, 60px);
    margin-inline: auto;
    border-radius: 15px;
    position: relative;
  }

  .portfolio-items-container {
    display: flex;
    gap: 10px;
    /* flex-wrap: wrap; */
    scroll-snap-type:x mandatory;
    overflow-x: scroll;
    width: 100%;
  }

 ::-webkit-scrollbar {
    width: 0;
    height: 0 !important;
  }

  .portfolio-title {
    width: fit-content;
    margin-bottom: clamp(20px, 4vw, 40px);
    font-size: 22px;
    padding-block: 2px;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 5px;
    border-bottom: 2px solid bisque;
    border-top: 2px solid transparent;
    text-align: center;
    transition: all 0.2s linear;
  }

  .portfolio-title:hover {
    letter-spacing: 10px;
    border-top: 2px solid bisque;
  }
  
  .github-link {
    color: rgba(255, 255, 255, 0.7);
    display: block;
    text-align: center;
    width: fit-content;
    margin-inline: auto;
    padding-bottom: 1px;
    text-decoration: none;
    border-bottom: 1px solid bisque;
    transition: all 0.2s linear;
  }

  .github-link:hover {
    scale: 1.1;
    color:rgba(255, 255, 255, 0.9);
  }

  .portfolio-item {
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
    min-width: 250px;
    width: 100%;
    flex: 0 0 auto;
    scroll-snap-align: center;
  }

  .portfolio-item ul {
    margin-block-start: 5px;
    text-align: left;
    list-style: none;
    padding-top: 10px;
  }
  .portfolio-item ul li::before {
    content: "\2022"; 
    color: #D2B94B;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }

  .project-title {
    color: #D2B94B;
    font-size: 20px;
    margin-block: 10px;
  }

  .project-description {
    letter-spacing:1px;
    max-width: 400px;
    margin-inline: auto;
  }

  .project-responsibilities {
    align-self: baseline;
    padding: 5px 10px;
  }

  .arrow {
    color: white;
    position: absolute;
    cursor: pointer;
  }

  .arrow-left {
    top: 60%;
    left: -15px;
    rotate: 90deg;
  }

  .arrow-right {
    top: 60%;
    right: -15px;
    rotate: -90deg;
  }

  .arrow-right .first-line {
    width: 17px;
    height: 3px;
    background-color: white;
    display: inline-block;
    rotate: 45deg;
    transition: all 0.2s ease-in-out;
    border-radius: 5px 0 0 5px;
  }
  .arrow-right .second-line {
    width: 17px;
    height: 3px;
    background-color: white;
    display: inline-block;
    rotate: -45deg;
    transition: all 0.2s ease-in-out;
    margin-left: -6px;
    border-radius: 0 5px 5px 0;
  }

  .arrow-left .first-line {
    width: 17px;
    height: 3px;
    background-color: white;
    display: inline-block;
    rotate: 45deg;
    transition: all 0.2s ease-in-out;
    border-radius: 5px 0 0 5px;
  }
  .arrow-left .second-line {
    width: 17px;
    height: 3px;
    background-color: white;
    display: inline-block;
    rotate: -45deg;
    transition: all 0.2s ease-in-out;
    margin-left: -6px;
    border-radius: 0 5px 5px 0;
  }

  .menu {
    color:  #D2B94B;
    font-weight: 700;
    text-decoration: none;
  }
  .menu a {
    color: white;
    text-decoration: none;
    font-weight: 300;
    padding-bottom: 1px;
    border-bottom: 1px solid #D2B94B;
    transition: all 0.5s ease-in-out;
  }

  .project-btn {
    width: fit-content;
    color: white;
    margin-block: 15px;
    padding: 10px 20px;
    box-shadow: 5px 4px 12px -9px rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 2px;
    background-color: rgb(170, 150, 126);
    text-align: center;
}


  @media (min-width: 768px) {
    .portfolio-container {
      width: 60%;
    }
  }
</style>