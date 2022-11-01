<template>
  <div class="portfolio-container">
    <p class="portfolio-title">PORTFOLIO</p>
    <a
      href="https://github.com/PatrykDorau"
      ref="github"
      class="github-link"
      v-motion="motionGlowText"
    >
      GITHUB
    </a>
    <div class="portfolio-items-container">
      <div class="portfolio-item" v-for="(project, index) in projects" :key="index" :data-slide="index + 1 +'/'+ projects.length">
        <div class="project-title">{{project.name}}</div>
          <div class="project-img">
            <img :src="project.img"/>
          </div>
          <div class="project-description">{{project.description}}</div>
          <ul class="project-responsibilities">
            <li v-for="(el, index) in project.responsibilities" :key="index">{{el}}</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {motionGlowText} from '../motions';
export default {
  name: "Portfolio",
  data() {
    return {
      motionGlowText,
      projects: [
        {
          img: "",
          name: "Shop management panel",
          type: "commercial",
          principal: "NEONAIL",
          responsibilities: [
            "Implemented visually appealing, responsive application design",
            "Cooperated withe the team to create API and communicated it with the application."
          ],
          description: `The panel aims to facilitate 500+ employees, collects all kinds of statistics on many
            various things from our online shops ( neonail, mylaq ), including shop traffic, products
            sold, bestsellers, daily/monthly/yearly revenue, domain traffic etc.`
        },
        {
          img: "",
          name: "RPG game",
          type: "private",
          responsibilities: [
            "Created game logic mostly in vanilla JS using Classes.",
            "Took care of clean code and debugging.",
            "Created visually appealing environment."
          ],
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
    navigationService(e) {
      console.log(e)
    },

    setActiveSlide() {
      document.querySelector('.portfolio-item').dataset.active = true;
    }
  }
}
</script>

<style>

  .portfolio-container {
    display: block;
    width: 80%;
    padding: 10px;
    margin-top: clamp(30px, 4vw, 60px);
    margin-inline: auto;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px; 
  }

  .portfolio-items-container {
    display: flex;
    gap: 10px;
    /* flex-wrap: wrap; */
    scroll-snap-type:x mandatory;
    overflow-x: scroll;
    width: 100%;
  }

  .portfolio-title {
    width: fit-content;
    margin-inline: auto;
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
    margin-top: -15px;
    text-align: center;
    width: fit-content;
    margin-inline: auto;
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
  margin-left: -1em;
}

  .project-title {
    color: #D2B94B;
    font-size: 20px;
    margin-block: 10px;
  }

  .project-description {
    letter-spacing:1px;
  }

  .project-responsibilities {
    align-self: baseline;
  }


  @media (min-width: 768px) {
    .portfolio-container {
      width: 60%;
    }
  }
</style>