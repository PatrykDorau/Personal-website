<template>
  <div class="portfolio-item-container" v-motion-slide-bottom>
    <div class="menu">
      <router-link to="/">Main page</router-link> / <router-link to="/portfolio">Portfolio</router-link> / <router-link :to="{path: `/portfolio/${portfolioElement.id}`}">{{portfolioElement.name}}</router-link>
    </div>
    <h3 class="portfolio-item-title">{{portfolioElement.name}}</h3>
    <p class="item-type">{{portfolioElement.type}} project</p>
    <div class="image-box">
      <img :src="portfolioElement.img" alt="">
    </div>
    <h4 class="portfolio-section-title">Description</h4>
    <div class="description-content">{{portfolioElement.description}}</div>
    <h4 class="portfolio-section-title">Responsibilities</h4>
    <ul class="project-responsibilities">
      <li v-for="(el, index) in portfolioElement.responsibilities" :key="index">{{el}}</li>
    </ul>
    <h4 class="portfolio-section-title">Stack</h4>
    <div class="item-stack">{{portfolioElement.stack}}</div>
    <h4 class="portfolio-section-title">Video Preview</h4>
    <video :src="portfolioElement.video" type="video/mp4"></video>
    <h4 class="portfolio-section-title">On the web</h4>
    <div class="web-content">
      <a v-if="portfolioElement.github !== ''" :href="portfolioElement.github" class="element">
        <span>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
          </svg>
        </span>
        @Github
      </a>
      <a :href="link" v-for="(link, index) in portfolioElement.link" :key="index" class="element">
        <span>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" focusable="false" height="30px" width="30px">
							<path d="M17.237,3.056H2.93c-0.694,0-1.263,0.568-1.263,1.263v8.837c0,0.694,0.568,1.263,1.263,1.263h4.629v0.879c-0.015,0.086-0.183,0.306-0.273,0.423c-0.223,0.293-0.455,0.592-0.293,0.92c0.07,0.139,0.226,0.303,0.577,0.303h4.819c0.208,0,0.696,0,0.862-0.379c0.162-0.37-0.124-0.682-0.374-0.955c-0.089-0.097-0.231-0.252-0.268-0.328v-0.862h4.629c0.694,0,1.263-0.568,1.263-1.263V4.319C18.5,3.625,17.932,3.056,17.237,3.056 M8.053,16.102C8.232,15.862,8.4,15.597,8.4,15.309v-0.89h3.366v0.89c0,0.303,0.211,0.562,0.419,0.793H8.053z M17.658,13.156c0,0.228-0.193,0.421-0.421,0.421H2.93c-0.228,0-0.421-0.193-0.421-0.421v-1.263h15.149V13.156z M17.658,11.052H2.509V4.319c0-0.228,0.193-0.421,0.421-0.421h14.308c0.228,0,0.421,0.193,0.421,0.421V11.052z"></path>
					</svg>
        </span>
        @Site
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioElement",
  data() {
    return {
      portfolioElement: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let data = JSON.parse(localStorage.getItem("activePortfolioItem"));
      this.portfolioElement = data
      console.log(data)
    }
  }
}
</script>

<style scoped>

.portfolio-item-container {
    display: block;
    width: 80%;
    padding: 10px;
    margin-top: clamp(30px, 4vw, 60px);
    margin-inline: auto;
    border-radius: 15px;
    position: relative;
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
  .portfolio-item-title {
    width: fit-content;
    margin-bottom: clamp(20px, 4vw, 40px);
    font-size: clamp(18px, calc(100vw * 22 / 1000), 22px);
    padding-block: 2px;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 5px;
    border-bottom: 2px solid bisque;
    border-top: 2px solid transparent;
    text-align: center;
    transition: all 0.2s linear;
    text-transform: uppercase;
  }

  .portfolio-section-title {
    width: fit-content;
    margin-bottom: clamp(20px, 4vw, 40px);
    font-size: clamp(16px, calc(100vw * 20 / 1000), 20px);
    padding-block: 2px;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 3px;
    border-bottom: 2px solid bisque;
    border-top: 2px solid transparent;
    transition: all 0.2s linear;
  }

  .description-content {
    color: rgba(255, 255, 255, 0.9);
    padding: 5px 10px;
  }

  .project-responsibilities {
    align-self: baseline;
    padding: 0px 25px;
    color: rgba(255, 255, 255, 0.9);
  }

  ul {
    margin-block-start: 5px;
    text-align: left;
    list-style: none;
    padding-top: 10px;
  }

  ul li::before {
    content: "\2022"; 
    color: #D2B94B;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  .item-type {
    color: rgba(255, 255, 255, 0.9);
    margin-top: clamp(-20px, -4vw, -40px);
  }

  .item-stack{
    color: rgba(255, 255, 255, 0.9);
    padding: 0px 10px;
  }

  .element {
      display: flex;
      align-items: center;
      gap: 10px;
      color: white;
      text-decoration: none;
  }

  .element:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (min-width:768px) {
    .portfolio-item-container {
      width: 60%;
    }
     .portfolio-item-title:hover {
      letter-spacing: 10px;
      border-top: 2px solid bisque;
    }

    .portfolio-section-title:hover{
      letter-spacing: 5px;
      border-top: 2px solid bisque;
    }
  }

</style>