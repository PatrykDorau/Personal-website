<template>
  <div v-motion="motionAbout" class="about-container">
    <div class="menu">
      <router-link to="/">Main page</router-link> / <router-link to="/about">About</router-link>
    </div>
    <p class="about-title">ABOUT</p>
    <div class="about-description-wrapper">
      <div class="about-description-title">Here is a little something <em>about me</em>.</div>
      <div class="tab-btn" @click="openTab('carrer')">
        <span>Career-wise</span>
        <span data-arrow="carrer" class="indicator">
          <i class="first-line"></i>
          <i class="second-line"></i>
        </span>
      </div>
      <div data-target="carrer" class="about-description-content">
        I'm Patryk. Currently working and living in Poznań, Poland. I've been coding for <em>over 2 years</em>.
        My adventure with code began encouraged by people around me. At first I learned from free courses, in between I created my small portfolio of projects and also <em>studied math</em>.
        After a year of learning, I managed to find my first job as a full stack developer.
        However, I quickly decided to change my position to <em>front end developer</em> because it coincided more with what I liked.
        Currently, I continue to work and develop as a programmer. Privately, I am an energetic and open-minded person who thinks a lot about the future.
        In my free time I play and watch soccer, and try to live a healthy life. I'm also a big fun of board and computer RPG games, such as DnD, Gloomhaven, Divinity original sin and so on. Last but definitely not least, big and integral part of my life is faith in <em>Jesus Christ</em>. 
      </div>
      <div class="tab-btn" @click="openTab('priv')">
        <span>Privately</span>
        <span data-arrow="priv" class="indicator">
          <i class="first-line"></i>
          <i class="second-line"></i>
        </span>
      </div>
      <div data-target="priv" class="about-description-content">
        I'm Patryk. Currently working and living in Poznań, Poland. I've been coding for <em>over 2 years</em>.
        My adventure with code began encouraged by people around me. At first I learned from free courses, in between I created my small portfolio of projects and also <em>studied math</em>.
        After a year of learning, I managed to find my first job as a full stack developer.
        However, I quickly decided to change my position to <em>front end developer</em> because it coincided more with what I liked.
        Currently, I continue to work and develop as a programmer. Privately, I am an energetic and open-minded person who thinks a lot about the future.
        In my free time I play and watch soccer, and try to live a healthy life. I'm also a big fun of board and computer RPG games, such as DnD, Gloomhaven, Divinity original sin and so on. Last but definitely not least, big and integral part of my life is faith in <em>Jesus Christ</em>. 
      </div>
    </div>
  </div>
</template>

<script>
import {motionAbout} from '../motions';
export default {
  name: "About",
  data() {
    return {
      motionAbout
    }
  },
  methods: {
    openTab(target) {
      let el = document.querySelector(`[data-target=${target}`);
      let arrow = document.querySelector(`[data-arrow=${target}`);
      el.classList.toggle("active");
      arrow.classList.toggle("active");
    }
  }
}
</script>

<style scoped>
.about-container {
  width: 80%;
  padding: 10px;
  margin-top: clamp(30px, 4vw, 60px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: rgba(255, 255, 255, 0.1); */
  border-radius: 15px;
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

.about-title {
  width: fit-content;
  margin-bottom: clamp(20px, 4vw, 40px);
  font-size: 22px;
  padding-block: 2px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing:5px;
  border-bottom: 2px solid bisque;
  border-top: 2px solid transparent;
  transition: all 0.2s linear;
}

.about-title:hover {
  letter-spacing: 10px;
  border-top: 2px solid bisque;
}

.face-container {
  width: 100px;
  height: 100px;
  border: 3px solid rgb(36, 33, 33);
  border-radius: 50%;
  padding: 10px;
  margin-inline: auto;
  background-color: #D2B94B;
}

.face-container img {
  transition:all 0.3s linear;
}

.face-container:hover img {
  scale: 1.3;
}

.about-description-wrapper {
  display : flex;
  justify-content: space-between;
  padding: 10px;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.9);
}
.about-description-title {
  font-size: clamp(16px, calc(100vw * 25 / 1920), 25px);
  margin-top: 10px;
  margin-bottom: 20px;
  letter-spacing:1px;
}
.about-description-content {
  letter-spacing:1px;
  font-size: clamp(13px, calc(100vw * 16 / 1920), 16px);
  line-height: 20px;
  width: 100%;
  max-height: 0;
  overflow-y: auto;
  transition: all 0.2s ease-in-out;
  /* padding: 10px 10px 30px 10px; */
}
.about-description-content.active {
  max-height: 400px;
}
em {
  font-style: normal;
  color: #D2B94B;
}

.tab-btn {
    display: flex;
    justify-content: space-between;
    width: 80%;
    border-bottom: 1px solid bisque;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.indicator {
  position: relative;
}

.indicator .first-line {
  width: 12px;
  height: 1px;
  background-color: white;
  display: inline-block;
  rotate: 45deg;
  transition: all 0.2s ease-in-out;
}
.indicator .second-line {
  width: 12px;
  height: 1px;
  background-color: white;
  display: inline-block;
  rotate: -45deg;
  margin-left: -4px;
  transition: all 0.2s ease-in-out;
}

.indicator.active .first-line {
  rotate: -45deg;
}
.indicator.active .second-line {
  rotate: 45deg;
}

@media (min-width: 768px) {
  .about-container {
    width: 60%;
  }
  .about-description-content {
    width: 80%;
    overflow-y: hidden;
  }
  
}
</style>